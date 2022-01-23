import { DateInputPlaceholderText } from 'context';

export const formatDate = (prevInputState: string, key: string): string => {
  switch (true) {
    case prevInputState.length === 1 || prevInputState.length === 4:
      return `${prevInputState}${key}.`;
    case prevInputState.length >= DateInputPlaceholderText.length:
      return `${prevInputState}`;
    default:
      return `${prevInputState}${key}`
  }
};
