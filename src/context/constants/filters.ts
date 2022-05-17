import { AllResponseStatus, DateFilter, FiltersId, IFilterProps, IMultiFilterProps, ResponseStatus } from 'context/interfaces';

export const ShowFiltersButtonText = 'ФИЛЬТРЫ';

export const HideFiltersButtonText = 'СКРЫТЬ ФИЛЬТРЫ';

export const FilterLabel = 'СОРТИРОВАТЬ ПО';

export const FilterForStudentList: IFilterProps = {
  id: 'student list',
  optionsArray: [{
    label: 'НОВИЗНЕ',
    value: 'НОВИЗНЕ',
    isChecked: true,
  },
    {
      label: 'ВОЗРАСТАНИЮ',
      value: 'ВОЗРАСТАНИЮ',
      isChecked: false,
    },
    {
      label: 'УБЫВАНИЮ',
      value: 'УБЫВАНИЮ',
      isChecked: false,
    }]
};

export const FilterByStatus: IFilterProps  = {
  id: FiltersId.status,
  filterTitle: 'ПО СТАТУСУ',
  optionsArray: [{
    label: 'Все',
    value: AllResponseStatus,
    isChecked: true,
  },
    {
      label: 'На рассмотрении',
      value: ResponseStatus.Considering,
      isChecked: false,
    },
    {
      label: 'Отказано',
      value: ResponseStatus.Rejected,
      isChecked: false,
    },
    {
      label: 'Принято',
      value: ResponseStatus.Accepted,
      isChecked: false,
    }]
};

export const FilterByCourse: IMultiFilterProps = {
  id: FiltersId.course,
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
  id: FiltersId.age,
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
  id: FiltersId.score,
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
  id: FiltersId.english,
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

export const FilterByDate: IFilterProps = {
  id: FiltersId.invitation_date,
  filterTitle: 'ПО ДАТЕ',
  optionsArray: [{
    label: 'Сначала новые',
    value: DateFilter.new_first,
    isChecked: true,
  },
    {
      label: 'Сначала старые',
      value: DateFilter.old_first,
      isChecked: false,
    }]
};
