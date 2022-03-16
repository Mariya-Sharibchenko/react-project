import { ProfileSettingInputTypes, ResponseStatusType, SocialMediaTypes } from '../interfaces';

export const helloworld = 'helloworld';

export const SearchButtonText = 'Искать';

export const SearchInputPlaceholder = 'Поиск';

export const DeleteAll = 'УДАЛИТЬ ВСЕ';

export const ShowCVButtonText = 'Посмотреть';

export const BestStudentTag = 'Лучший ученик';

export const WrongInputData = 'Некорректный';

export const MaxNotificationNumberToDisplay = 99;

export const InviteButtonText = 'Пригласить';

export enum TitlesForStudentCV {
  CourseAndScore = 'КУРС | ОЦЕНКА',
  Diploma = 'ДИПЛОМ',
  SchoolRecommendation = 'ОТ ШКОЛЫ',
  Skills = 'НАВЫКИ',
  Education = 'ОБРАЗОВАНИЕ',
  Language = 'Английский язык',
  AdditionalEducation = 'Дополнительное образование',
  AboutStudent = 'О СТУДЕНТЕ',
  Contacts = 'КОНТАКТЫ',
  City = 'Город',
  SocialMedia = 'Социальные сети',
  OtherContacts = 'Способ связи',
}

export const ContactsAreHiddenText = 'Контакты студента станут вам доступны после принятия вашего приглашения.';

export const DeleteButtonText = 'Удалить';

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

export const AmountOfFoundCVText = 'НАЙДЕНО';

export enum InvitationsHeaderText {
  company = 'КАНДИДАТ',
  action = 'ДЕЙСТВИЕ'
}

export enum ResponsesHeaderText {
  student = 'КАНДИДАТ',
  action = 'СПОСОБ СВЯЗИ'
}

export const HomePageCompanyTitle = 'Найдите своего нового разработчика ';

export const HomePageCompanySubtitle = 'Более 1,000 разработчиков в одной базе. Последнее обновление 12 января 2019';
