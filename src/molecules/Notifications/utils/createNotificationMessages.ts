import { MaxNotificationNumberToDisplay, NotificationsDataProps } from 'context';

const getNotificationCategory = (string: string): string => {
  switch (string) {
    case 'invitation':
      return 'приглашений';
    case 'response':
      return 'ответов';
    default:
      return 'отказов';
  }
}

const formatNotificationNumber = (number: number): string => {
  switch (true) {
    case number > MaxNotificationNumberToDisplay:
      return `${MaxNotificationNumberToDisplay}+`;
    default:
      return `${number}`;
  }
}

export const createNotificationMessages = (notifications: NotificationsDataProps): string[] => {
  const entries = Object.entries(notifications).filter(([key, value]) => value !== 0)

  return entries.length > 0
    ? entries.map(([key, value]) => `"У вас ${formatNotificationNumber(value)} новых ${getNotificationCategory(key)}"`)
    : [`"У вас нет новых уведомлений"`]
}