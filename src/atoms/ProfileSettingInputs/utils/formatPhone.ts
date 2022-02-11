import React from 'react';

import { ProfileSettingInputPlaceholders } from 'context';

export const formatPhone = (prevInputState: string, evt: React.KeyboardEvent<HTMLInputElement>): string => {
  if (48 <= evt.which && evt.which <= 57) {
    switch (true) {
      case prevInputState.length === 0:
        return `+375 (${evt.key}`;
      case prevInputState.length === 7:
        return `${prevInputState}${evt.key}) `;
      case prevInputState.length === 12 || prevInputState.length === 15:
        return `${prevInputState}${evt.key}-`;
      case prevInputState.length >= ProfileSettingInputPlaceholders.phone.length:
        return prevInputState;
      default:
        return `${prevInputState}${evt.key}`;
    }
  }

  if (evt.key === 'Backspace') {
    return prevInputState.slice(0, -1);
  }

  return prevInputState;
};
