import React from 'react';

import { SearchBlockWrapper, SearchStudentWrapper } from './styled';
import { SearchBlockContainer } from 'molecules';
import { StudentListContainer } from 'organisms';
import { IMultiFilterProps, IStudentDetailedDataProps } from 'context';

export interface ISearchStudentProps {
  filters: IMultiFilterProps[],
  onSearchClick: (searchInputValue: string, filtersData: IMultiFilterProps[] | undefined) => void,
  CVInBookmarks: number[],
  onSendInvitationClick: (studentId: number) => void,
  studentList: IStudentDetailedDataProps[]
}

export const SearchStudent: React.FC<ISearchStudentProps> = ({
  filters,
  onSearchClick,
  CVInBookmarks,
  onSendInvitationClick,
  studentList
}) => {
  return (
    <SearchStudentWrapper>
      <SearchBlockWrapper>
        <SearchBlockContainer
          filtersArray={filters}
          onSearch={onSearchClick}
        />
      </SearchBlockWrapper>

      <StudentListContainer
        studentList={studentList}
        CVInBookmarks={CVInBookmarks}
        onSendInvitationClick={onSendInvitationClick}
      />
    </SearchStudentWrapper>
  );
};
