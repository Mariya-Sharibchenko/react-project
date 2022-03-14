import React from 'react';

import { PageCover, Content } from 'templates/default';
import { CoverWrapper } from './styled';
import { SearchStudentContainer } from 'organisms';
import { IMultiFilterProps, IStudentDetailedDataProps } from 'context';

interface IHomePageProps {
  filters: IMultiFilterProps[],
  students: IStudentDetailedDataProps[],
  studentsInBookmarks: number[],
  onSendInvitationClick: (studentId: number) => void,
}

export const HomePage: React.FC<IHomePageProps> = ({
  filters,
  students,
  studentsInBookmarks,
  onSendInvitationClick
}) => {
  return (
    <>
      <PageCover>
        <CoverWrapper />
      </PageCover>

      <Content>
        <SearchStudentContainer
          filters={filters}
          studentsArray={students}
          studentsInBookmarks={studentsInBookmarks}
          onSendInvitationClick={onSendInvitationClick}
        />
      </Content>
    </>
  );
};
