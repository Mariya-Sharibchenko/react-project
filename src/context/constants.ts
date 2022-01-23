import { ResponseStatusType } from './interfaces';

export const helloworld = 'helloworld';

export const SearchButtonText = 'Искать';

export const SearchInputPlaceholder = 'Поиск';

export const ShowFiltersButtonText = 'ФИЛЬТРЫ';

export const HideFiltersButtonText = 'СКРЫТЬ ФИЛЬТРЫ';

export const BestStudentTag = 'Лучший ученик';

export const LoginTitle = 'Авторизация';

export const InputEmailPlaceholder = 'Введите e-mail';

export const InputPasswordPlaceholder = 'Введите пароль';

export const InputEmailLabel = 'Email';

export const InputPasswordLabel = 'Пароль';

export const WrongLoginData = 'Неверное имя пользователя или пароль';

export const LoginEnterButton = 'Войти в систему';

export const TextForLoginCheckbox = 'Оставаться в системе на этом устройстве';

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

export enum SocialMedia {
  facebook = 'facebook',
  instagram = 'instagram',
  linkedin = 'linkedin',
  vk = 'vk'
}

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

export const DateInputPlaceholderText = 'DD.MM.YYYY';
