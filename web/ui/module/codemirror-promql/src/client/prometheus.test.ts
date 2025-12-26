// Copyright 2021 The Prometheus Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { describe, it, expect, jest } from '@jest/globals';
import { HTTPPrometheusClient, CachedPrometheusClient, PrometheusClient } from './prometheus';

describe('HTTPPrometheusClient destroy', () => {
  it('should be safe to call destroy multiple times', () => {
    const client = new HTTPPrometheusClient({ url: 'http://localhost:8080' });
    expect(() => {
      client.destroy();
      client.destroy();
    }).not.toThrow();
  });

  it('should abort in-flight requests when destroy is called', async () => {
    let fetchAborted = false;

    const client = new HTTPPrometheusClient({
      url: 'http://localhost:8080',
      fetchFn: (_input: RequestInfo, init?: RequestInit): Promise<Response> => {
        return new Promise((_resolve, reject) => {
          // Listen for abort signal
          init?.signal?.addEventListener('abort', () => {
            fetchAborted = true;
            reject(new DOMException('Aborted', 'AbortError'));
          });
        });
      },
    });

    // Start a request (don't await it)
    const requestPromise = client.metricNames().catch(() => {
      // Expected to fail due to abort
    });

    // Give the request time to start
    await new Promise((resolve) => setTimeout(resolve, 10));

    // Destroy should abort the request
    client.destroy();

    // Wait for the request to be aborted
    await requestPromise;

    expect(fetchAborted).toBe(true);
  });
});

describe('CachedPrometheusClient destroy', () => {
  it('should call destroy on underlying client if available', () => {
    const mockDestroy = jest.fn();
    const mockClient = {
      labelNames: () => Promise.resolve([]),
      labelValues: () => Promise.resolve([]),
      metricMetadata: () => Promise.resolve({}),
      series: () => Promise.resolve([]),
      metricNames: () => Promise.resolve([]),
      flags: () => Promise.resolve({}),
      destroy: mockDestroy,
    } as PrometheusClient & { destroy: () => void };

    const cached = new CachedPrometheusClient(mockClient);
    cached.destroy();

    expect(mockDestroy).toHaveBeenCalled();
  });

  it('should not throw if underlying client has no destroy method', () => {
    const mockClient = {
      labelNames: () => Promise.resolve([]),
      labelValues: () => Promise.resolve([]),
      metricMetadata: () => Promise.resolve({}),
      series: () => Promise.resolve([]),
      metricNames: () => Promise.resolve([]),
      flags: () => Promise.resolve({}),
    } as PrometheusClient;

    const cached = new CachedPrometheusClient(mockClient);

    expect(() => cached.destroy()).not.toThrow();
  });

  it('should be safe to call destroy multiple times', () => {
    const mockClient = {
      labelNames: () => Promise.resolve([]),
      labelValues: () => Promise.resolve([]),
      metricMetadata: () => Promise.resolve({}),
      series: () => Promise.resolve([]),
      metricNames: () => Promise.resolve([]),
      flags: () => Promise.resolve({}),
    } as PrometheusClient;

    const cached = new CachedPrometheusClient(mockClient);

    expect(() => {
      cached.destroy();
      cached.destroy();
    }).not.toThrow();
  });
});
