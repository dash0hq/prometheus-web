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
import { PromQLExtension } from './promql';
import { CompleteStrategy } from './complete';
import { CompletionResult } from '@codemirror/autocomplete';

describe('PromQLExtension destroy', () => {
  it('should call destroy on complete strategy if available', () => {
    const mockDestroy = jest.fn();
    const mockStrategy: CompleteStrategy = {
      promQL: (): CompletionResult | null => null,
      destroy: mockDestroy,
    };

    const extension = new PromQLExtension();
    extension.setComplete({ completeStrategy: mockStrategy });
    extension.destroy();

    expect(mockDestroy).toHaveBeenCalled();
  });

  it('should not throw if complete strategy has no destroy method', () => {
    const mockStrategy: CompleteStrategy = {
      promQL: (): CompletionResult | null => null,
    };

    const extension = new PromQLExtension();
    extension.setComplete({ completeStrategy: mockStrategy });

    expect(() => extension.destroy()).not.toThrow();
  });

  it('should be safe to call destroy multiple times', () => {
    const extension = new PromQLExtension();

    expect(() => {
      extension.destroy();
      extension.destroy();
    }).not.toThrow();
  });

  it('should work with default complete strategy', () => {
    const extension = new PromQLExtension();

    // Default HybridComplete should also have destroy
    expect(() => extension.destroy()).not.toThrow();
  });
});
