import React, { useCallback, useEffect, useState } from 'react';

import { BookmarkedList } from './BookmarkedList';
import { IStudentDetailedDataProps } from 'context';
import { searchStudent } from 'utils/searchStudent';

export interface IBookmarkedListContainerProps {
  studentsArray: IStudentDetailedDataProps[],
  CVInBookmarks: string[],
}

export const BookmarkedListContainer: React.FC<IBookmarkedListContainerProps> = ({
  studentsArray,
  CVInBookmarks
}) => {
  const [ searchInputValue, setSearchInputValue ] = useState<string>('');
  const [ studentsList, setStudentList ] = useState<IStudentDetailedDataProps[]>([]);

  useEffect(() => {
    setStudentList(studentsArray.filter(student => CVInBookmarks.includes(student.id)));
  }, [studentsArray, CVInBookmarks]);

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

  return (
    <BookmarkedList
      studentList={studentsList}
      CVInBookmarks={CVInBookmarks}
      onSearchClick={onSearchStudentClick}
      getSearchInputText={setSearchInputText}
      deleteStudentFromList={deleteStudentFromList}
    />
  );
};
