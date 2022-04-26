import React, { useCallback, useState } from 'react';

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
  const [ studentsList, setStudentList ] = useState(studentsArray.filter(student => CVInBookmarks.includes(student.id)));

  const deleteStudentFromList = useCallback((studentId) => {
    setStudentList(prevState => prevState.filter(student => student.id !== studentId));
  }, []);

  const setSearchInputText = useCallback((inputValue) => {
    setSearchInputValue(inputValue);
  }, []);

  const onSearchStudentClick = useCallback(() => {
   searchInputValue
    ? setStudentList(prevState => searchStudent(searchInputValue, prevState))
    : setStudentList(studentsArray.filter(student => CVInBookmarks.includes(student.id)));
  }, [searchInputValue, CVInBookmarks]);

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
      deleteStudentFromList={deleteStudentFromList}
    />
  );
};
