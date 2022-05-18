import React from 'react';

import { PageCover, Content } from 'templates/default';
import { SearchStudentContainer } from 'organisms';
import {
  FiltersArray,
  IStudentDetailedDataProps,
  PageTitles
} from 'context';
import { CoverWrapper, CoverTextWrapper, CoverTitle, CoverSubtitle } from './styled';
import { useBookmarkedStudents } from 'core/hooks';
import { userStateVar } from 'core/state';

interface IHomePageProps {
  students: IStudentDetailedDataProps[],
}

export const HomePage: React.FC<IHomePageProps> = ({
  students,
}) => {
  const studentsInBookmarks = useBookmarkedStudents(userStateVar().company!.id);

  return (
    <>
      <PageCover>
        <CoverWrapper>
          <CoverTextWrapper>
            <CoverTitle>{PageTitles.HomePageCompanyTitle}</CoverTitle>
            <CoverSubtitle>{PageTitles.HomePageCompanySubtitle}</CoverSubtitle>
          </CoverTextWrapper>
        </CoverWrapper>
      </PageCover>

      <Content>
        <SearchStudentContainer
          filters={FiltersArray}
          studentsArray={students}
          studentsInBookmarks={studentsInBookmarks}
        />
      </Content>
    </>
  );
};
