import { IStudentDataProps } from './interfaces';

import userRomanShashkov from 'public/user-picture_Roman-Shashkov.png';

export const helloworld = 'helloworld';

export const SearchButtonText = 'Искать';

export const StudentArray: IStudentDataProps[] = [
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    position: 'Java Developer',
    age: 22,
    course: 'Front End',
    bestStudentMark: true,
  },
  {
    img: userRomanShashkov,
    firstName: 'Роман',
    lastName: 'Шашков',
    position: 'Python Developer',
    age: 25,
    course: 'Back End',
    bestStudentMark: false,
  },
  {
    firstName: 'Зоя',
    lastName: 'Фомина',
    position: 'React Developer',
    course: 'Front End',
    bestStudentMark: true,
  },
]
