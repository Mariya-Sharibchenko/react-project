import React from 'react';

import { SearchBlockWrapper, SearchStudentWrapper, FilterTagsWrapper, FilterTagWrapper } from './styled';
import { FilterTag } from 'atoms';
import { SearchBlockContainer } from 'molecules';
import { StudentListContainer } from 'organisms';
import { IMultiFilterProps, IStudentDetailedDataProps } from 'context';

export interface ISearchStudentProps {
  filters: IMultiFilterProps[],
  setFilters: (filtersData: IMultiFilterProps[]) => void,
  onSearchClick: (searchInputValue: string, filtersData: IMultiFilterProps[]) => void,
  CVInBookmarks: number[],
  onSendInvitationClick: (studentId: number) => void,
  studentList: IStudentDetailedDataProps[],
  onTagClick: (tagName: string) => void
}

export const SearchStudent: React.FC<ISearchStudentProps> = ({
  filters,
  setFilters,
  onSearchClick,
  CVInBookmarks,
  onSendInvitationClick,
  studentList,
  onTagClick
}) => {
  return (
    <SearchStudentWrapper>
      <SearchBlockWrapper>
        <SearchBlockContainer
          filtersArray={filters}
          setOptions={setFilters}
          onSearch={onSearchClick}
        />
      </SearchBlockWrapper>

      <FilterTagsWrapper>
        {filters.map(({optionsArray}) =>
          optionsArray.filter(({isChecked}) => isChecked).map(({label}) =>
            <FilterTagWrapper key={label}>
              <FilterTag text={label} onClick={onTagClick} />
            </FilterTagWrapper>
          )
        )}
      </FilterTagsWrapper>

      <StudentListContainer
        studentList={studentList}
        CVInBookmarks={CVInBookmarks}
        onSendInvitationClick={onSendInvitationClick}
      />
    </SearchStudentWrapper>
  );
};
