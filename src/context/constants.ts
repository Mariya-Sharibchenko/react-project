import { IFilterOptionsProps } from './interfaces';

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