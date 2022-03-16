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

export const ProfileSettingInputLabels: ProfileSettingInputTypes = {
  name: 'Фио',
  birthDate: 'Дата рождения',
  city: 'Город',
  phone: 'Телефон',
  email: 'Email',
  english: 'Английский',
  education: 'Уровень',
  additionalEducation: 'Дополнительное',
  skills: 'Навыки',
  about: 'О себе',
};

export const ProfileSettingInputPlaceholders: ProfileSettingInputTypes = {
  name: 'Введите имя',
  birthDate: 'DD.MM.YYYY',
  city: 'Минск',
  phone: '+375 (XX) XXX-XX-XX',
  email: 'ivan@teachmeskills.com',
  english: 'Beginner/Elementary',
  education: 'Среднее',
  additionalEducation: 'Пройденные курсы',
  skills: 'Введите навык',
  about: 'Все, что вы считаете нужным',
};

export const ProfileSettingSocialMediaLabels: SocialMediaTypes = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  vk: 'Вконтакте',
};

export const ProfileSettingSocialMediaPlaceholder = 'https://';

export enum ProfileSettingsHeaders {
  mainInfo = 'ОСНОВНАЯ ИНФОРМАЦИЯ',
  contactInfo = 'КОНТАКТНЫЕ ДАННЫЕ',
  educationInfo = 'ОБРАЗОВАНИЕ',
  personalInfo = 'ЛИЧНЫЕ ДАННЫЕ',
  socialMedia = 'СОЦИАЛЬНЫЕ СЕТИ'
}

export const ProfileSettingSubmitButtonText = 'Сохранить';

export const ProfileSettingSubmitInfoMessage = 'Cum sociis natoque penatibus et magnis dis parturient montes.';

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
