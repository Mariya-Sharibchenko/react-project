import { ResponseStatusType } from 'context/interfaces';

export const InvitationIsOnConsideringText = 'Скрыт до согласия';

export const InvitationWasRejectedText = 'Скрыт из-за отказа';

export const ResponseStatusLabels: ResponseStatusType = {
  rejected: 'Получен отказ',
  accepted: 'Приглашение принято',
  considering: 'На рассмотрении'
};

export const InvitationStatusLabels: ResponseStatusType = {
  rejected: 'Отказано',
  accepted: 'Принято',
  considering: 'На рассмотрении'
};

export enum InvitationCardActionsButtons {
  RejectButtonText = 'Отказать',
  AcceptButtonText = 'Принять'
}

export enum InvitationsHeaderText {
  company = 'КАНДИДАТ',
  action = 'ДЕЙСТВИЕ'
}

export enum ResponsesHeaderText {
  student = 'КАНДИДАТ',
  action = 'СПОСОБ СВЯЗИ'
}
