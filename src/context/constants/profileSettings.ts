import { IFilterOptionsProps, ProfileSettingInputTypes, SocialMediaTypes } from 'context/interfaces';

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

export const EducationSettings: IFilterOptionsProps[] = [
  {
    label: 'Среднее',
    value: 'Среднее',
    isChecked: false
  },
  {
    label: 'Среднее специальное',
    value: 'Среднее специальное',
    isChecked: false
  },
  {
    label: 'Высшее',
    value: 'Высшее',
    isChecked: false
  },
];

export const EnglishSettings: IFilterOptionsProps[] = [
  {
    label: 'Beginner/Elementary',
    value: 'Beginner/Elementary',
    isChecked: false
  },
  {
    label: 'Pre-intermediate',
    value: 'Pre-intermediate',
    isChecked: false
  },
  {
    label: 'Intermediate',
    value: 'Intermediate',
    isChecked: false
  },
  {
    label: 'Upper-intermediate',
    value: 'Upper-intermediate',
    isChecked: false
  },
  {
    label: 'Advanced',
    value: 'Advanced',
    isChecked: false
  },
];
