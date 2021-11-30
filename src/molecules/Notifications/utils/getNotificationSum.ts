import { NotificationsDataProps } from 'context';

export const getNotificationSum = (notifications: NotificationsDataProps): number =>
  Object.values(notifications).reduce((acc, el) => acc + el, 0);
