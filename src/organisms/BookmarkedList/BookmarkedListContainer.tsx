import React, { useCallback, useMemo, useState } from 'react';

import { BookmarkedList } from './BookmarkedList';
import { IStudentDetailedDataProps } from 'context';
import { searchStudent } from 'utils/searchStudent';

export interface IBookmarkedListContainerProps {
  studentsArray: IStudentDetailedDataProps[],
  CVInBookmarks: number[],
}

export const BookmarkedListContainer: React.FC<IBookmarkedListContainerProps> = ({
  studentsArray,
  CVInBookmarks
}) => {
  const [ searchInputValue, setSearchInputValue ] = useState<string>('');
  const studentsList = useMemo(() =>
    studentsArray.filter(student => CVInBookmarks.includes(student.id)), [studentsArray, CVInBookmarks]
  );

  const setSearchInputText = useCallback((inputValue) => {
    setSearchInputValue(inputValue);
  }, []);

  const onSearchStudentClick = useCallback(() => {
    searchStudent(searchInputValue, studentsList);
  }, []);

  const onSendInvitationClick = useCallback(() => {
  //  todo: add function
  }, []);

  return (
    <BookmarkedList
      studentList={studentsList}
      CVInBookmarks={CVInBookmarks}
      onSendInvitationClick={onSendInvitationClick}
      onSearchClick={onSearchStudentClick}
      getSearchInputText={setSearchInputText}
    />
  );
};
