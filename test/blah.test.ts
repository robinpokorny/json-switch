// Copyright Robin Pokorny 2021. All Rights Reserved.
// Node module: json-switch
// This file is licensed under the Apache License 2.0.
// License text available at http://www.apache.org/licenses/LICENSE-2.0

import { $switch } from '../src';

describe('with single flag', () => {
  const singleSwitch = {
    $switch: ['flag1'],
    '0': 0,
    '1': 1,
  };

  test('gets correct value for falsy flag', () => {
    const getFlagValue = () => false;

    expect($switch(singleSwitch, getFlagValue)).toBe(0);
  });

  test('gets correct value for truthy flag', () => {
    const getFlagValue = (flagName: string) => flagName === 'flag1';

    expect($switch(singleSwitch, getFlagValue)).toBe(1);
  });
});

describe('with double flag', () => {
  const singleSwitch = {
    $switch: ['flag1', 'flag2'],
    '00': 0,
    '01': 1,
    '10': 2,
    '11': 3,
  };

  test('gets correct value for falsy flag', () => {
    const getFlagValue = () => false;

    expect($switch(singleSwitch, getFlagValue)).toBe(0);
  });

  test('gets correct value for truthy flag', () => {
    const getFlagValue = () => true;

    expect($switch(singleSwitch, getFlagValue)).toBe(3);
  });

  test('gets correct value for truthy and falsy flags', () => {
    const getFlagValue = (flagName: string) => flagName === 'flag1';

    expect($switch(singleSwitch, getFlagValue)).toBe(2);
  });

  test('gets correct value for truthy and falsy flags', () => {
    const getFlagValue = (flagName: string) => flagName === 'flag2';

    expect($switch(singleSwitch, getFlagValue)).toBe(1);
  });
});
