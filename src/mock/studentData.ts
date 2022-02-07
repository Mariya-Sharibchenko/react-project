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
      formal: {
        level: 'Неоконченное высшее образование',
        detailedInfo: ' БГУИР ИИТ. Компьютерных технологий, Вычислительные машины, системы и сети',
      },
      additional: 'Школа программирования <TeachMeSkills/>',
    },
    aboutStudent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    contacts: {
      city: 'Минск',
      tel: '375 29 000-00-00',
      eMail: 'ivan@teachmeskills@com',
      socialMedia: {
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
    score: 7,
    diplomaLink: 'https://Lorem ipsum dolor sit amet-consectetuer adipiscing elit/Aenean commodo ligula eget dolor0Aenean massa-Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus /',
    schoolRecommendation: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    skills: ['HTML', 'CSS', 'SPA', 'React', 'NPM', 'Webpack'],
    education: {
      english: 'Intermediate',
      formal: {
        level: 'Неоконченное высшее образование',
        detailedInfo: ' БГУИР ИИТ. Компьютерных технологий, Вычислительные машины, системы и сети',
      },
      additional: 'Школа программирования <TeachMeSkills/>',
    },
    aboutStudent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    contacts: {
      city: 'Минск',
      tel: '375 29 000-00-00',
      eMail: 'ivan@teachmeskills@com',
      socialMedia: {
        facebook: 'https://dfg',
        instagram: 'https://dfg',
        linkedin: 'https://dfg',
        vk: 'https://dfg',
      }
    },
    showContacts: true,
  },
  {
    id: 9,
    firstName: 'Зоя',
    lastName: 'Фомина',
    position: 'React Developer',
    course: 'Front End',
    bestStudentMark: true,
    score: 7,
    diplomaLink: 'https://Lorem ipsum dolor sit amet-consectetuer adipiscing elit/Aenean commodo ligula eget dolor0Aenean massa-Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus /',
    schoolRecommendation: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    skills: ['HTML', 'CSS', 'SPA', 'NPM', 'Webpack'],
    education: {
      english: 'Upper intermediate',
      formal: {
        level: 'Неоконченное высшее образование',
        detailedInfo: ' БГУИР ИИТ. Компьютерных технологий, Вычислительные машины, системы и сети',
      },
    },
    aboutStudent: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    contacts: {
      city: 'Минск',
      tel: '375 29 000-00-00',
      eMail: 'ivan@teachmeskills@com',
      socialMedia: {
        facebook: 'https://dfg',
        instagram: 'https://dfg',
        linkedin: 'https://dfg',
        vk: 'https://dfg',
      }
    },
    showContacts: true,
  },
];
