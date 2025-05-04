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

import { Completion, snippet } from '@codemirror/autocomplete';

export const durationTerms = [{ label: 'y' }, { label: 'w' }, { label: 'd' }, { label: 'h' }, { label: 'm' }, { label: 's' }, { label: 'ms' }];
export const matchOpTerms = [{ label: '=' }, { label: '!=' }, { label: '=~' }, { label: '!~' }];
export const binOpTerms = [
  { label: '^' },
  { label: '*' },
  { label: '/' },
  { label: '%' },
  { label: '+' },
  { label: '-' },
  { label: '==' },
  { label: '>=' },
  { label: '>' },
  { label: '<' },
  { label: '<=' },
  { label: '!=' },
  { label: 'atan2' },
  { label: 'and' },
  { label: 'or' },
  { label: 'unless' },
];

export const binOpModifierTerms = [
  { label: 'on', info: 'Match only on specified labels', type: 'none' },
  { label: 'ignoring', info: 'Ignore specified labels for matching', type: 'none' },
  { label: 'group_left', info: 'Allow many-to-one matching', type: 'none' },
  { label: 'group_right', info: 'Allow one-to-many matching', type: 'none' },
];

export const atModifierTerms = [
  { label: 'start()', info: 'resolve to the start of the query', type: 'none' },
  { label: 'end()', info: 'resolve to the end of the query', type: 'none' },
];

export const functionIdentifierTerms = [
  {
    label: 'abs',
    detail: 'function',
    info: 'Return absolute values of input series',
    type: 'none',
  },
  {
    label: 'absent',
    detail: 'function',
    info: 'Determine whether input vector is empty',
    type: 'none',
  },
  {
    label: 'absent_over_time',
    detail: 'function',
    info: 'Determine whether input range vector is empty',
    type: 'none',
  },
  {
    label: 'acos',
    detail: 'function',
    info: 'Calculate the arccosine, in radians, for input series',
    type: 'none',
  },
  {
    label: 'acosh',
    detail: 'function',
    info: 'Calculate the inverse hyperbolic cosine, in radians, for input series',
    type: 'none',
  },
  {
    label: 'asin',
    detail: 'function',
    info: 'Calculate the arcsine, in radians, for input series',
    type: 'none',
  },
  {
    label: 'asinh',
    detail: 'function',
    info: 'Calculate the inverse hyperbolic sine, in radians, for input series',
    type: 'none',
  },
  {
    label: 'atan',
    detail: 'function',
    info: 'Calculate the arctangent, in radians, for input series',
    type: 'none',
  },
  {
    label: 'atanh',
    detail: 'function',
    info: 'Calculate the inverse hyperbolic tangent, in radians, for input series',
    type: 'none',
  },
  {
    label: 'avg_over_time',
    detail: 'function',
    info: 'Average series values over time',
    type: 'none',
  },
  {
    label: 'ceil',
    detail: 'function',
    info: 'Round up values of input series to nearest integer',
    type: 'none',
  },
  {
    label: 'changes',
    detail: 'function',
    info: 'Return number of value changes in input series over time',
    type: 'none',
  },
  {
    label: 'clamp',
    detail: 'function',
    info: 'Limit the value of input series between a minimum and a maximum',
    type: 'none',
  },
  {
    label: 'clamp_max',
    detail: 'function',
    info: 'Limit the value of input series to a maximum',
    type: 'none',
  },
  {
    label: 'clamp_min',
    detail: 'function',
    info: 'Limit the value of input series to a minimum',
    type: 'none',
  },
  {
    label: 'cos',
    detail: 'function',
    info: 'Calculate the cosine, in radians, for input series',
    type: 'none',
    // Avoid ranking higher than `count`.
    boost: -1,
  },
  {
    label: 'cosh',
    detail: 'function',
    info: 'Calculate the hyperbolic cosine, in radians, for input series',
    type: 'none',
    // Avoid ranking higher than `count`.
    boost: -1,
  },
  {
    label: 'count_over_time',
    detail: 'function',
    info: 'Count the number of values for each input series',
    type: 'none',
  },
  {
    label: 'days_in_month',
    detail: 'function',
    info: 'Return the number of days in current month for provided timestamps',
    type: 'none',
  },
  {
    label: 'day_of_month',
    detail: 'function',
    info: 'Return the day of the month for provided timestamps',
    type: 'none',
  },
  {
    label: 'day_of_week',
    detail: 'function',
    info: 'Return the day of the week for provided timestamps',
    type: 'none',
  },
  {
    label: 'day_of_year',
    detail: 'function',
    info: 'Return the day of the year for provided timestamps',
    type: 'none',
  },
  {
    label: 'deg',
    detail: 'function',
    info: 'Convert radians to degrees for input series',
    type: 'none',
    // Avoid ranking higher than `delta`.
    boost: -1,
  },
  {
    label: 'delta',
    detail: 'function',
    info: 'Calculate the difference between beginning and end of a range vector (for gauges)',
    type: 'none',
  },
  {
    label: 'deriv',
    detail: 'function',
    info: 'Calculate the per-second derivative over series in a range vector (for gauges)',
    type: 'none',
  },
  {
    label: 'exp',
    detail: 'function',
    info: 'Calculate exponential function for input vector values',
    type: 'none',
  },
  {
    label: 'floor',
    detail: 'function',
    info: 'Round down values of input series to nearest integer',
    type: 'none',
  },
  {
    label: 'histogram_avg',
    detail: 'function',
    info: 'Return the average of observations from a native histogram (experimental feature)',
    type: 'none',
  },
  {
    label: 'histogram_count',
    detail: 'function',
    info: 'Return the count of observations from a native histogram (experimental feature)',
    type: 'none',
  },
  {
    label: 'histogram_fraction',
    detail: 'function',
    info: 'Calculate fractions of observations within an interval from a native histogram (experimental feature)',
    type: 'none',
  },
  {
    label: 'histogram_quantile',
    detail: 'function',
    info: 'Calculate quantiles from native histograms (experimental) and from conventional histogram buckets',
    type: 'none',
  },
  {
    label: 'histogram_sum',
    detail: 'function',
    info: 'Return the sum of observations from a native histogram (experimental feature)',
    type: 'none',
  },
  {
    label: 'histogram_stddev',
    detail: 'function',
    info: 'Estimate the standard deviation of observations from a native histogram (experimental feature)',
    type: 'none',
  },
  {
    label: 'histogram_stdvar',
    detail: 'function',
    info: 'Estimate the standard variance of observations from a native histogram (experimental feature)',
    type: 'none',
  },
  {
    label: 'double_exponential_smoothing',
    detail: 'function',
    info: 'Calculate smoothed value of input series',
    type: 'none',
  },
  {
    label: 'hour',
    detail: 'function',
    info: 'Return the hour of the day for provided timestamps',
    type: 'none',
  },
  {
    label: 'idelta',
    detail: 'function',
    info: 'Calculate the difference between the last two samples of a range vector (for counters)',
    type: 'none',
  },
  {
    label: 'increase',
    detail: 'function',
    info: 'Calculate the increase in value over a range of time (for counters)',
    type: 'none',
  },
  {
    label: 'info',
    detail: 'function',
    info: 'Add data labels from corresponding info metrics',
    type: 'none',
  },
  {
    label: 'irate',
    detail: 'function',
    info: 'Calculate the per-second increase over the last two samples of a range vector (for counters)',
    type: 'none',
  },
  {
    label: 'label_replace',
    detail: 'function',
    info: 'Set or replace label values',
    type: 'none',
  },
  {
    label: 'label_join',
    detail: 'function',
    info: 'Join together label values into new label',
    type: 'none',
  },
  {
    label: 'last_over_time',
    detail: 'function',
    info: 'The most recent point value in specified interval.',
    type: 'none',
  },
  {
    label: 'ln',
    detail: 'function',
    info: 'Calculate natural logarithm of input series',
    type: 'none',
  },
  {
    label: 'log10',
    detail: 'function',
    info: 'Calulcate base-10 logarithm of input series',
    type: 'none',
  },
  {
    label: 'log2',
    detail: 'function',
    info: 'Calculate base-2 logarithm of input series',
    type: 'none',
  },
  {
    label: 'mad_over_time',
    detail: 'function',
    info: 'Return the median absolute deviation over time for input series',
    type: 'none',
  },
  {
    label: 'max_over_time',
    detail: 'function',
    info: 'Return the maximum value over time for input series',
    type: 'none',
  },
  {
    label: 'min_over_time',
    detail: 'function',
    info: 'Return the minimum value over time for input series',
    type: 'none',
  },
  {
    label: 'minute',
    detail: 'function',
    info: 'Return the minute of the hour for provided timestamps',
    type: 'none',
  },
  {
    label: 'month',
    detail: 'function',
    info: 'Return the month for provided timestamps',
    type: 'none',
  },
  {
    label: 'pi',
    detail: 'function',
    info: 'Return pi',
    type: 'none',
  },
  {
    label: 'predict_linear',
    detail: 'function',
    info: 'Predict the value of a gauge into the future',
    type: 'none',
  },
  {
    label: 'present_over_time',
    detail: 'function',
    info: 'the value 1 for any series in the specified interval',
    type: 'none',
  },
  {
    label: 'quantile_over_time',
    detail: 'function',
    info: 'Calculate value quantiles over time for input series',
    type: 'none',
  },
  {
    label: 'rad',
    detail: 'function',
    info: 'Convert degrees to radians for input series',
    type: 'none',
    // Avoid ranking higher than `rate`.
    boost: -1,
  },
  {
    label: 'rate',
    detail: 'function',
    info: 'Calculate per-second increase over a range vector (for counters)',
    type: 'none',
  },
  {
    label: 'resets',
    detail: 'function',
    info: 'Return number of value decreases (resets) in input series of time',
    type: 'none',
  },
  {
    label: 'round',
    detail: 'function',
    info: 'Round values of input series to nearest integer',
    type: 'none',
  },
  {
    label: 'scalar',
    detail: 'function',
    info: 'Convert single-element series vector into scalar value',
    type: 'none',
  },
  {
    label: 'sgn',
    detail: 'function',
    info: 'Returns the sign of the instant vector',
    type: 'none',
  },
  {
    label: 'sin',
    detail: 'function',
    info: 'Calculate the sine, in radians, for input series',
    type: 'none',
  },
  {
    label: 'sinh',
    detail: 'function',
    info: 'Calculate the hyperbolic sine, in radians, for input series',
    type: 'none',
  },
  {
    label: 'sort',
    detail: 'function',
    info: 'Sort input series ascendingly by value',
    type: 'none',
  },
  {
    label: 'sort_desc',
    detail: 'function',
    info: 'Sort input series descendingly by value',
    type: 'none',
  },
  {
    label: 'sort_by_label',
    detail: 'function',
    info: 'Sort input series ascendingly by label value',
    type: 'none',
  },
  {
    label: 'sort_by_label_desc',
    detail: 'function',
    info: 'Sort input series descendingly by value value',
    type: 'none',
  },
  {
    label: 'sqrt',
    detail: 'function',
    info: 'Return the square root for input series',
    type: 'none',
  },
  {
    label: 'stddev_over_time',
    detail: 'function',
    info: 'Calculate the standard deviation within input series over time',
    type: 'none',
  },
  {
    label: 'stdvar_over_time',
    detail: 'function',
    info: 'Calculate the standard variance within input series over time',
    type: 'none',
  },
  {
    label: 'sum_over_time',
    detail: 'function',
    info: 'Calculate the sum over the values of input series over time',
    type: 'none',
  },
  {
    label: 'tan',
    detail: 'function',
    info: 'Calculate the tangent, in radians, for input series',
    type: 'none',
  },
  {
    label: 'tanh',
    detail: 'function',
    info: 'Calculate the hyperbolic tangent, in radians, for input series',
    type: 'none',
  },
  {
    label: 'time',
    detail: 'function',
    info: 'Return the Unix timestamp at the current evaluation time',
    type: 'none',
  },
  {
    label: 'timestamp',
    detail: 'function',
    info: 'Return the Unix timestamp for the samples in the input vector',
    type: 'none',
  },
  {
    label: 'vector',
    detail: 'function',
    info: 'Convert a scalar value into a single-element series vector',
    type: 'none',
  },
  {
    label: 'year',
    detail: 'function',
    info: 'Return the year for provided timestamps',
    type: 'none',
  },
];

export const aggregateOpTerms = [
  {
    label: 'avg',
    detail: 'aggregation',
    info: 'Calculate the average over dimensions',
    type: 'none',
  },
  {
    label: 'bottomk',
    detail: 'aggregation',
    info: 'Smallest k elements by sample value',
    type: 'none',
  },
  {
    label: 'count',
    detail: 'aggregation',
    info: 'Count number of elements in the vector',
    type: 'none',
  },
  {
    label: 'count_values',
    detail: 'aggregation',
    info: 'Count number of elements with the same value',
    type: 'none',
  },
  {
    label: 'group',
    detail: 'aggregation',
    info: 'Group series, while setting the sample value to 1',
    type: 'none',
  },
  {
    label: 'limitk',
    detail: 'aggregation',
    info: 'Sample k elements',
    type: 'none',
  },
  {
    label: 'limit_ratio',
    detail: 'aggregation',
    info: 'Sample given ratio of elements',
    type: 'none',
  },
  {
    label: 'max',
    detail: 'aggregation',
    info: 'Select maximum over dimensions',
    type: 'none',
  },
  {
    label: 'min',
    detail: 'aggregation',
    info: 'Select minimum over dimensions',
    type: 'none',
  },
  {
    label: 'quantile',
    detail: 'aggregation',
    info: 'Calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions',
    type: 'none',
  },
  {
    label: 'stddev',
    detail: 'aggregation',
    info: 'Calculate population standard deviation over dimensions',
    type: 'none',
  },
  {
    label: 'stdvar',
    detail: 'aggregation',
    info: 'Calculate population standard variance over dimensions',
    type: 'none',
  },
  {
    label: 'sum',
    detail: 'aggregation',
    info: 'Calculate sum over dimensions',
    type: 'none',
  },
  {
    label: 'topk',
    detail: 'aggregation',
    info: 'Largest k elements by sample value',
    type: 'none',
  },
];

export const aggregateOpModifierTerms = [
  {
    label: 'by',
    info: 'Keep the listed labels, remove all others.',
    type: 'none',
  },
  {
    label: 'without',
    info: 'Remove the listed labels, preserve all others.',
    type: 'none',
  },
];

export const numberTerms = [
  { label: 'nan', info: 'Floating-point NaN value', type: 'none' },
  { label: 'inf', info: 'Floating-point infinity', type: 'none' },
];

export const snippets: readonly Completion[] = [
  {
    label: 'sum(rate(__input_vector__[5m]))',
    type: 'none',
    detail: 'snippet',
    info: 'Sum over rates of increase',
    apply: snippet('sum(rate(${__input_vector__}[5m]))'),
  },
  {
    label: 'histogram_quantile(__quantile__, sum by(le) (rate(__histogram_metric__[5m])))',
    type: 'none',
    detail: 'snippet',
    info: 'Approximate a quantile value from an aggregated histogram',
    apply: snippet('histogram_quantile(${__quantile__}, sum by(le) (rate(${__histogram_metric__}[5m])))'),
  },
  {
    label: 'label_replace(__input_vector__, "__dst__", "__replacement__", "__src__", "__regex__")',
    type: 'none',
    detail: 'snippet',
    info: 'Set or replace a label value in an input vector',
    apply: snippet('label_replace(${__input_vector__}, "${__dst__}", "${__replacement__}", "${__src__}", "${__regex__}")'),
  },
  {
    label: 'topk(__rank_number__, __input_vector__)',
    type: 'none',
    detail: 'snippet',
    info: 'Largest k elements by sample value',
    apply: snippet('topk(${__rank_number__}, ${__input_vector__})'),
  },
  {
    label: 'bottomk(__rank_number__, __input_vector__)',
    type: 'none',
    detail: 'snippet',
    info: 'Smallest k elements by sample value',
    apply: snippet('bottomk(${__rank_number__}, ${__input_vector__})'),
  },
  {
    label: 'count_values("__label_name__", __input_vector__)',
    type: 'none',
    detail: 'snippet',
    info: 'Count the number of series per distinct sample value',
    apply: snippet('count_values("${__label_name__}", ${__metric__})'),
  },
];
