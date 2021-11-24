import { IStudentDataProps } from 'context';

import userRomanShashkov from 'public/user-picture_Roman-Shashkov.png';

export const StudentArray: IStudentDataProps[] = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    position: 'Java Developer',
    course: 'Front End',
    bestStudentMark: true,
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
  },
  {
    id: 3,
    firstName: 'Зоя',
    lastName: 'Фомина',
    position: 'React Developer',
    course: 'Front End',
    bestStudentMark: true,
  },
]