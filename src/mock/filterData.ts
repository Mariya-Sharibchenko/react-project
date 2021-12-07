import { FilterTitleAge, FilterTitleCourse, FilterTitleEnglishLevel, FilterTitleMark, IFilterProps } from 'context';

export const FilterByCourse: IFilterProps = {
  filterTitle: FilterTitleCourse,
  optionsArray: [{
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
  }]
};

export const FilterByAge: IFilterProps = {
  filterTitle: FilterTitleAge,
  optionsArray: [{
    label: 'меньше 18',
    value: 'меньше 18',
    isChecked: true,
  },
  {
    label: '18-30',
    value: '18-30',
    isChecked: true,
  },
  {
    label: '30-45',
    value: '30-45',
    isChecked: true,
  },
  {
    label: 'больше 45',
    value: 'больше 45',
    isChecked: true,
  }]
};

export const FilterByMark: IFilterProps = {
  filterTitle: FilterTitleMark,
  optionsArray: [{
    label: '9-10',
    value: '9-10',
    isChecked: true,
  },
  {
    label: '7-8',
    value: '7-8',
    isChecked: true,
  },
  {
    label: '5-6',
    value: '5-6',
    isChecked: true,
  }]
};

export const FilterByEnglishLevel: IFilterProps = {
  filterTitle: FilterTitleEnglishLevel,
  optionsArray: [{
    label: 'Advanced',
    value: 'Advanced',
    isChecked: true,
  },
    {
    label: 'Upper intermediate',
    value: 'Upper intermediate',
    isChecked: true,
  },
  {
    label: 'Intermediate',
    value: 'Intermediate',
    isChecked: true,
  },
  {
    label: 'Elementary',
    value: 'Elementary',
    isChecked: true,
  }]
};

export const FiltersArray: IFilterProps[] = [FilterByCourse, FilterByMark, FilterByAge, FilterByEnglishLevel];
