import { IFilterProps, IMultiFilterProps } from 'context';

export const FilterByStatus: IFilterProps  = {
  id: 'status',
  filterTitle: 'ПО СТАТУСУ',
  optionsArray: [{
    label: 'Все',
    value: 'Все',
    isChecked: true,
  },
  {
    label: 'На рассмотрении',
    value: 'На рассмотрении',
    isChecked: false,
  },
  {
    label: 'Отказано',
    value: 'Отказано',
    isChecked: false,
  },
  {
    label: 'Принято',
    value: 'Принято',
    isChecked: false,
  }]
};

export const FilterByCourse: IMultiFilterProps = {
  id: 'course',
  filterTitle: 'Курс разработки',
  selectAllText: 'Все курсы',
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
    label: 'Back end',
    value: 'Back end',
    isChecked: true,
  }]
};

export const FilterByAge: IMultiFilterProps = {
  id: 'age',
  filterTitle: 'Возраст',
  selectAllText: 'Любой',
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
    isChecked: false,
  },
  {
    label: 'больше 45',
    value: 'больше 45',
    isChecked: true,
  }]
};

export const FilterByMark: IMultiFilterProps = {
  id: 'score',
  filterTitle: 'Оценка диплома',
  selectAllText: 'Все оценки',
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

export const FilterByEnglishLevel: IMultiFilterProps = {
  id: 'english',
  filterTitle: 'Английский язык',
  selectAllText: 'Любой уровень',
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
    label: 'Pre intermediate',
    value: 'Pre intermediate',
    isChecked: true,
  },
  {
    label: 'Elementary',
    value: 'Elementary',
    isChecked: true,
  }]
};

export const FiltersArray: IMultiFilterProps[] = [FilterByCourse, FilterByMark, FilterByAge, FilterByEnglishLevel];
