import { IFilterOptionsProps, IStudentDataProps } from './interfaces';

import userRomanShashkov from 'public/user-picture_Roman-Shashkov.png'

export const helloworld = 'helloworld';

export const SearchButtonText = 'Искать';

export const FilterByCourse: IFilterOptionsProps[] = [
  {value: 'Front end'},
  {value: 'Java'},
  {value: 'Python'},
  {value: 'iOS'}
]

export const FilterByAge: IFilterOptionsProps[] = [
  {value: 'меньше 18'},
  {value: '18-30'},
  {value: '30-45'},
  {value: 'больше 45'}
]

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