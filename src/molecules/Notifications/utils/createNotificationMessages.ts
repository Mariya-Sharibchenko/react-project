import { MaxNotificationNumberToDisplay, INotificationsDataProps } from 'context';

const getNotificationCategory = (notificationCategory: string): string => {
  switch (notificationCategory) {
    case 'invitation':
      return 'приглашений';
    case 'response':
      return 'ответов';
    default:
      return 'отказов';
  }
}

const formatNotificationNumber = (notificationAmount: number): string =>
  notificationAmount > MaxNotificationNumberToDisplay ? `${MaxNotificationNumberToDisplay}+` : `${notificationAmount}`;

export const createNotificationMessages = (notifications: INotificationsDataProps): string[] => {
  const notificationsWithValueArray = Object.entries(notifications).filter(([key, value]) => value !== 0);

  return notificationsWithValueArray.length > 0
    ? notificationsWithValueArray.map(([key, value]) => `"У вас ${formatNotificationNumber(value)} новых ${getNotificationCategory(key)}"`)
    : [`"У вас нет новых уведомлений"`]
}
