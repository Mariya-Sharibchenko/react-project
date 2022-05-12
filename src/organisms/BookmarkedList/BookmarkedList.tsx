import React from 'react';

import { BookmarkedListWrapper, SearchBlockWrapper, StyledSearchInput, SearchButton } from './styled';
import { StudentListContainer } from 'organisms';
import { IStudentDetailedDataProps, SearchButtonText, SearchInputPlaceholder } from 'context';

export interface IBookmarkedListProps {
  studentList: IStudentDetailedDataProps[],
  CVInBookmarks: string[],
  onSearchClick: () => void,
  getSearchInputText: (value: string) => void,
  deleteStudentFromList: (studentId: string) => void,
}

export const BookmarkedList: React.FC<IBookmarkedListProps> = ({
  studentList,
  CVInBookmarks,
  onSearchClick,
  getSearchInputText,
  deleteStudentFromList
}) => {
  return (
    <BookmarkedListWrapper>
      <SearchBlockWrapper>
        <StyledSearchInput
          placeholderText={SearchInputPlaceholder}
          getSearchInputText={getSearchInputText}
        />

        <SearchButton
          text={SearchButtonText}
          onClick={onSearchClick}
        />
      </SearchBlockWrapper>

      <StudentListContainer
        studentList={studentList}
        CVInBookmarks={CVInBookmarks}
        onAddToBookmarks={deleteStudentFromList}
      />
    </BookmarkedListWrapper>
  );
};
