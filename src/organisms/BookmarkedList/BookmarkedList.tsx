import React, { useMemo } from 'react';

import { BookmarkedListWrapper, SearchBlockWrapper, StyledSearchInput, SearchButton } from './styled';
import { StudentListContainer } from 'organisms';
import { IStudentDetailedDataProps, SearchButtonText, SearchInputPlaceholder } from 'context';

export interface IBookmarkedListProps {
  studentList: IStudentDetailedDataProps[],
  CVInBookmarks: number[],
  onSendInvitationClick: (studentId: number) => void,
  onSearchClick: () => void,
  searchInputValue: string,
  onSearchInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

export const BookmarkedList: React.FC<IBookmarkedListProps> = ({
  studentList,
  CVInBookmarks,
  onSendInvitationClick,
  onSearchClick,
  onSearchInputChange,
  searchInputValue
}) => {
  return (
    <BookmarkedListWrapper>
      <SearchBlockWrapper>
        <StyledSearchInput
          placeholderText={SearchInputPlaceholder}
          onChange={onSearchInputChange}
          inputValue={searchInputValue}
        />

        <SearchButton
          text={SearchButtonText}
          onClick={onSearchClick}
        />
      </SearchBlockWrapper>

      <StudentListContainer
        studentList={studentList}
        CVInBookmarks={CVInBookmarks}
        onSendInvitationClick={onSendInvitationClick}
      />
    </BookmarkedListWrapper>
  );
};
