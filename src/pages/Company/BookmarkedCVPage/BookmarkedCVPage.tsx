import React from 'react';

import { CoverTitle, CoverWrapper } from './styled';
import { IStudentDetailedDataProps, PageTitles } from 'context';
import { Content, PageCover } from 'templates/default';
import { BookmarkedListContainer } from 'organisms';
import { useBookmarkedStudents } from 'core/hooks';
import { userStateVar } from 'core/state';

export interface IBookmarkedCVPageProps {
  students: IStudentDetailedDataProps[],
}

export const BookmarkedCVPage: React.FC<IBookmarkedCVPageProps> = ({
  students,
}) => {
  const studentsInBookmarks = useBookmarkedStudents(userStateVar().company!.id);

  return (
    <>
      <PageCover>
        <CoverWrapper>
          <CoverTitle>{PageTitles.BookmarkedCVPageTitle}</CoverTitle>
        </CoverWrapper>
      </PageCover>

      <Content>
        <BookmarkedListContainer
          studentsArray={students}
          CVInBookmarks={studentsInBookmarks}
        />
      </Content>
    </>
  );
};
