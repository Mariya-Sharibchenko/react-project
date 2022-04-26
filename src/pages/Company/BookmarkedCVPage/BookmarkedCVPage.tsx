import React from 'react';

import { CoverTitle, CoverWrapper } from './styled';
import { IStudentDetailedDataProps, PageTitles } from 'context';
import { Content, PageCover } from 'templates/default';
import { BookmarkedListContainer } from 'organisms';

export interface IBookmarkedCVPageProps {
  students: IStudentDetailedDataProps[],
  CVInBookmarks: number[],
}

export const BookmarkedCVPage: React.FC<IBookmarkedCVPageProps> = ({
  students,
  CVInBookmarks
}) => {
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
          CVInBookmarks={CVInBookmarks}
        />
      </Content>
    </>
  );
};
