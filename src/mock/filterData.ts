export interface IFilterProps {
  label: string,
  value: string,
  isChecked: boolean,
}

export const FilterByCourse: IFilterProps[] = [
  {
    label: 'Front end',
    value: 'Front end',
    isChecked: true,
  },
  {
    label: 'Java',
    value: 'Java',
    isChecked: true,
  },
  {
    label: 'Python',
    value: 'Python',
    isChecked: true,
  },
  {
    label: 'iOS',
    value: 'iOS',
    isChecked: true,
  }
];

export const FilterByAge: IFilterProps[] = [
  {
    label: 'меньше 18',
    value: 'меньше 18',
    isChecked: true,
  },
  {
    label: '18-30',
    value: '18-30',
    isChecked: false,
  },
  {
    label: '30-45',
    value: '30-45',
    isChecked: false,
  },
  {
    label: 'больше 45',
    value: 'больше 45',
    isChecked: true,
  }
];
