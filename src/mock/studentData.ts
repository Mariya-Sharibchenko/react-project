import { IStudentDetailedDataProps } from 'context';

import userRomanShashkov from 'public/user-picture_Roman-Shashkov.png';

export const StudentArray: IStudentDetailedDataProps[] = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    position: 'Java Developer',
    course: 'Front End',
    bestStudentMark: true,
    score: 10,
    diplomaLink: 'https://Lorem ipsum dolor sit amet-consectetuer adipiscing elit/Aenean commodo ligula eget dolor0Aenean massa-Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus /',
    schoolRecommendation: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    skills: ['HTML', 'CSS', 'SPA', 'React', 'NPM', 'Webpack', 'Java SE', 'My SQL'],
    education: {
      english: 'Upper intermediate',
      formal: 'Неоконченное высшее образование \n БГУИР ИИТ. Компьютерных технологий, Вычислительные машины, системы и сети',
      additional: 'Школа программирования <TeachMeSkills/>',
    },
    aboutStudent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    contacts: {
      city: 'Минск',
      tel: '375 29 000-00-00',
      eMail: 'ivan@teachmeskills@com',
      social: {
        facebook: 'https://dfg'
      }
    },
    showContacts: false,
  },
  {
    id: 2,
    img: userRomanShashkov,
    firstName: 'Роман',
    lastName: 'Шашков',
    position: 'Python Developer',
    age: 25,
    course: 'Back End',
    bestStudentMark: false,
    score: 8,
    diplomaLink: 'https://Lorem ipsum dolor sit amet-consectetuer adipiscing elit/Aenean commodo ligula eget dolor0Aenean massa-Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus /',
    schoolRecommendation: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    skills: ['HTML', 'CSS', 'SPA', 'React', 'NPM', 'Webpack'],
    education: {
      english: 'Intermediate',
      formal: 'Неоконченное высшее образование \n БГУИР ИИТ. Компьютерных технологий, Вычислительные машины, системы и сети',
      additional: 'Школа программирования <TeachMeSkills/>',
    },
    aboutStudent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    contacts: {
      city: 'Минск',
      tel: '375 29 000-00-00',
      eMail: 'ivan@teachmeskills@com',
    },
    showContacts: true,
  },
  {
    id: 3,
    firstName: 'Зоя',
    lastName: 'Фомина',
    position: 'React Developer',
    course: 'Front End',
    bestStudentMark: true,
    score: 10,
    diplomaLink: 'https://Lorem ipsum dolor sit amet-consectetuer adipiscing elit/Aenean commodo ligula eget dolor0Aenean massa-Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus /',
    schoolRecommendation: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    skills: ['HTML', 'CSS', 'SPA', 'NPM', 'Webpack'],
    education: {
      english: 'Upper intermediate',
      formal: 'Неоконченное высшее образование \n БГУИР ИИТ. Компьютерных технологий, Вычислительные машины, системы и сети',
    },
    aboutStudent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    contacts: {
      city: 'Минск',
      tel: '375 29 000-00-00',
      eMail: 'ivan@teachmeskills@com',
      social: {
        facebook: 'https://dfg',
        instagram: 'https://dfg',
        linkedin: 'https://dfg',
        vk: 'https://dfg',
      }
    },
    showContacts: true,
  },
];
