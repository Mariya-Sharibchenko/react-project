import { INotificationsDataProps } from 'context';

export const getNotificationSum = (notifications: INotificationsDataProps): number =>
  Object.values(notifications).reduce((acc, el) => acc + el, 0);
