import React from 'react';

import { BookmarkedListWrapper, SearchBlockWrapper, StyledSearchInput, SearchButton } from './styled';
import { StudentListContainer } from 'organisms';
import { IStudentDetailedDataProps, SearchButtonText, SearchInputPlaceholder } from 'context';

export interface IBookmarkedListProps {
  studentList: IStudentDetailedDataProps[],
  CVInBookmarks: number[],
  onSendInvitationClick: (studentId: number) => void,
  onSearchClick: () => void,
  getSearchInputText: (value: string) => void
}

export const BookmarkedList: React.FC<IBookmarkedListProps> = ({
  studentList,
  CVInBookmarks,
  onSendInvitationClick,
  onSearchClick,
  getSearchInputText
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
        onSendInvitationClick={onSendInvitationClick}
      />
    </BookmarkedListWrapper>
  );
};
