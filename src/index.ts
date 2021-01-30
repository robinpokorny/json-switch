// Copyright Robin Pokorny 2021. All Rights Reserved.
// Node module: json-switch
// This file is licensed under the Apache License 2.0.
// License text available at http://www.apache.org/licenses/LICENSE-2.0

export const $switch = (
  obj: any,
  getFlagValue: (flagName: string) => boolean
) => {
  if (
    !(
      typeof obj === 'object' &&
      '$switch' in obj &&
      Array.isArray(obj.$switch) &&
      obj.$switch.every((item: unknown) => typeof item === 'string')
    )
  ) {
    return obj;
  }

  const flags = obj.$switch
    .map(getFlagValue)
    .map((flag: boolean) => (flag ? '1' : '0'))
    .join('');

  return obj[flags];
};
