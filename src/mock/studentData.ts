import { IStudentDetailedDataProps } from 'context';

import userRomanShashkov from 'public/user-picture_Roman-Shashkov.png';
import userEllaSysoeva from 'public/user-picture_Ella-Sysoeva.png';
import userArcadiNikonov from 'public/user-picture_Arcadi-Nikonov.png';

export const StudentArray: IStudentDetailedDataProps[] = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    position: 'Java Developer',
    course: 'Front End',
    bestStudentMark: true,
    score: 9,
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
    age: 22,
    course: 'Back End',
    bestStudentMark: false,
    score: 7,
    diplomaLink: 'https://Lorem ipsum dolor sit amet-consectetuer adipiscing elit/Aenean commodo ligula eget dolor0Aenean massa-Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus /',
    schoolRecommendation: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    skills: ['Django', 'Python', 'MySQL', 'NPM', 'Webpack'],
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
    id: 3,
    img: userArcadiNikonov,
    firstName: 'Аркадий',
    lastName: 'Никонов',
    position: 'Java Developer',
    course: 'Front End',
    age: 19,
    bestStudentMark: true,
    score: 9,
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
  {
    id: 4,
    firstName: 'Леонид',
    lastName: 'Цветков',
    position: 'React Developer',
    course: 'Front End',
    age: 21,
    bestStudentMark: false,
    score: 8,
    diplomaLink: 'https://Lorem ipsum dolor sit amet-consectetuer adipiscing elit/Aenean commodo ligula eget dolor0Aenean massa-Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus /',
    schoolRecommendation: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    skills: ['HTML', 'CSS', 'SPA', 'React', 'NPM', 'Webpack'],
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
    showContacts: false,
  },
  {
    id: 5,
    img: userEllaSysoeva,
    firstName: 'Элла',
    lastName: 'Сысоева',
    position: 'Python Developer',
    course: 'Back End',
    age: 20,
    bestStudentMark: true,
    score: 10,
    diplomaLink: 'https://Lorem ipsum dolor sit amet-consectetuer adipiscing elit/Aenean commodo ligula eget dolor0Aenean massa-Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus /',
    schoolRecommendation: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    skills: ['Python', 'Django', 'MongoDB', 'MySQL', 'Docker'],
    education: {
      english: 'Pre intermediate',
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
  {
    id: 6,
    firstName: 'Зоя',
    lastName: 'Фомина',
    position: 'React Developer',
    course: 'Front End',
    bestStudentMark: true,
    score: 10,
    diplomaLink: 'https://Lorem ipsum dolor sit amet-consectetuer adipiscing elit/Aenean commodo ligula eget dolor0Aenean massa-Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus /',
    schoolRecommendation: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
    skills: ['HTML', 'CSS', 'SPA', 'React', 'NPM', 'Webpack', 'Python'],
    education: {
      english: 'Advanced',
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
    showContacts: false,
  },
];
