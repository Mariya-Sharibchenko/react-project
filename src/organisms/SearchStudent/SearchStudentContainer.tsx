import React, { useCallback, useState } from 'react';

import { SearchStudent } from 'organisms';
import { IMultiFilterProps, IStudentDetailedDataProps } from 'context';
import { findStudent, IFindStudentProps } from './utils/findStudent';

export interface ISearchStudentContainer {
  filters: IMultiFilterProps[],
  studentsArray: IStudentDetailedDataProps[],
  studentsInBookmarks: number[],
}

export const SearchStudentContainer: React.FC<ISearchStudentContainer> = ({
  filters,
  studentsArray,
  studentsInBookmarks,
}) => {
  const [ studentList, setStudentList ] = useState<IStudentDetailedDataProps[]>(studentsArray);
  const [ filtersOptions, setFiltersOptions ] = useState(filters);

  const onSearchClick = useCallback((searchInputValue: string, filtersData: IMultiFilterProps[]) => {
    const props: IFindStudentProps = {studentsArray, searchInputValue, filtersData};
    setStudentList(findStudent(props));
  }, []);

  const setFilters = useCallback((filtersData: IMultiFilterProps[]) => {
    setFiltersOptions(filtersData);
  }, []);

  const onTagClick = useCallback((tagName: string) => {
    setFiltersOptions(prevState =>
      prevState.map((filter) => {
        return {
          ...filter,
          optionsArray: filter.optionsArray.map((el) => el.label === tagName ? {...el, isChecked: !el.isChecked} : el)
        };
      })
    );
  }, []);

  return (
    <SearchStudent
      CVInBookmarks={studentsInBookmarks}
      studentList={studentList}
      onSearchClick={onSearchClick}
      filters={filtersOptions}
      setFilters={setFilters}
      onTagClick={onTagClick}
    />
  );
};
