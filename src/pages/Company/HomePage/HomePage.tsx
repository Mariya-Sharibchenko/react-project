import React from 'react';

import { PageCover, Content } from 'templates/default';
import { SearchStudentContainer } from 'organisms';
import { FiltersArray, HomePageCompanySubtitle, HomePageCompanyTitle, IStudentDetailedDataProps } from 'context';
import { CoverWrapper, CoverTextWrapper, CoverTitle, CoverSubtitle } from './styled';


interface IHomePageProps {
  students: IStudentDetailedDataProps[],
  studentsInBookmarks: number[],
}

export const HomePage: React.FC<IHomePageProps> = ({
  students,
  studentsInBookmarks,
}) => {
  return (
    <>
      <PageCover>
        <CoverWrapper>
          <CoverTextWrapper>
            <CoverTitle>{HomePageCompanyTitle}</CoverTitle>
            <CoverSubtitle>{HomePageCompanySubtitle}</CoverSubtitle>
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
