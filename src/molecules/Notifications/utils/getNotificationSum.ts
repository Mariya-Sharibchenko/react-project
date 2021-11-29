import { NotificationsDataProps } from 'context';

export const getNotificationSum = (notifications: NotificationsDataProps): number => {
  return Object.values(notifications).reduce((item, sum) => sum + item, 0)
}