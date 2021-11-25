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

const formatNotificationCount = (number: number): string => {
  switch (true) {
    case number > MaxNotificationNumberToDisplay:
      return `${MaxNotificationNumberToDisplay}+`;
    default:
      return `${number}`;
  }
}

export const createNotificationMessages = (notifications: NotificationsDataProps): string[] => {
  const entries = Object.entries(notifications)
    .filter(item => item[1] !== 0)

  return entries.length > 0
    ? entries.map(item => `"У вас ${formatNotificationCount(item[1])} новых ${getNotificationCategory(item[0])}"`)
    : [`"У вас нет новых уведомлений"`]
}