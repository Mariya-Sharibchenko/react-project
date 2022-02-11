import React, { useState } from 'react';

import { SearchStudent } from './SearchStudent';
import { IMultiFilterProps, IStudentDetailedDataProps } from 'context';
import { findStudent, IFindStudentProps } from './utils/findStudent';

export interface ISearchStudentContainer {
  filters: IMultiFilterProps[],
  studentsArray: IStudentDetailedDataProps[],
  studentsInBookmarks: number[],
  onSendInvitationClick: (studentId: number) => void,
}

export const SearchStudentContainer: React.FC<ISearchStudentContainer> = ({
  filters,
  studentsArray,
  studentsInBookmarks,
  onSendInvitationClick
}) => {
  const [ studentList, setStudentList ] = useState<IStudentDetailedDataProps[]>(studentsArray);

  const onSearchClick = (searchInputValue: string, filtersData: IMultiFilterProps[] | undefined) => {
    const props: IFindStudentProps = {studentList, searchInputValue, filtersData};
    setStudentList(findStudent(props));
  };

  return (
    <SearchStudent
      CVInBookmarks={studentsInBookmarks}
      studentList={studentList}
      onSendInvitationClick={onSendInvitationClick}
      onSearchClick={onSearchClick}
      filters={filters}
    />
  )
};
