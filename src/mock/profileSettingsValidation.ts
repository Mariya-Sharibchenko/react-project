import { PasswordDataValidationTypes, ProfileDataValidationTypes } from 'context';

export const PasswordValidation: PasswordDataValidationTypes = {
  currentPassword: true,
  newPassword: true
};

export const ProfileDataValidation: ProfileDataValidationTypes = {
  name: true,
  education: true,
  birthDate: true,
  city: true,
  phone: true,
  email: true,
  english: true,
  additionalEducation: true,
  skills: true,
  about: true,
  facebook: true,
  instagram: true,
  linkedin: true,
  vk: true,
};
