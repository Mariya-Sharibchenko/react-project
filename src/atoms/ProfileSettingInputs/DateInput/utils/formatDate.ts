import React from 'react';

import { DateInputPlaceholderText } from 'context';

export const formatDate = (prevInputState: string, evt: React.KeyboardEvent<HTMLInputElement>): string => {
  if (48 <= evt.which && evt.which <= 57) {
    switch (true) {
      case prevInputState.length === 1 || prevInputState.length === 4:
        return `${prevInputState}${evt.key}.`;
      case prevInputState.length >= DateInputPlaceholderText.length:
        return prevInputState;
      default:
        return `${prevInputState}${evt.key}`
    }
  }

  if (evt.key === 'Backspace') {
    return prevInputState.slice(0, -1)
  }

  return prevInputState
};

// export const formatDate = (prevInputState: string, key: string): string => {
//   switch (true) {
//     case prevInputState.length === 1 || prevInputState.length === 4:
//       return `${prevInputState}${key}.`;
//     case prevInputState.length >= DateInputPlaceholderText.length:
//       return `${prevInputState}`;
//     default:
//       return `${prevInputState}${key}`
//   }
// };
