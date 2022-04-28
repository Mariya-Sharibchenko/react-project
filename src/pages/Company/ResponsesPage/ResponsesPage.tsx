import React from 'react';

import {
  PageTitles,
  FilterByStatus,
  FilterByDate,
  IStudentDetailedDataProps,
  ICompanyDataProps,
} from 'context';
import { Content, PageCover } from 'templates/default';
import { CoverWrapper, CoverTitle } from './styled';
import { ResponsesListContainer } from 'organisms';
import { useGetResponses } from 'core';

interface IResponsesPageProps {
  user: ICompanyDataProps,
  studentsList: IStudentDetailedDataProps[],
  onInvitationStatusClick: () => void,
}

export const ResponsesPage: React.FC<IResponsesPageProps> = ({
  user,
  studentsList,
  onInvitationStatusClick
}) => {
 const responsesData = useGetResponses(user, studentsList);

  return (
    <>
      {responsesData.length &&
        <>
          <PageCover>
            <CoverWrapper>
              <CoverTitle>{PageTitles.ResponsesPageTitle}</CoverTitle>
            </CoverWrapper>
          </PageCover>

          <Content>
            <ResponsesListContainer
              filterByStatus={FilterByStatus}
              filterByDate={FilterByDate}
              responsesArray={responsesData}
              onInvitationStatusClick={onInvitationStatusClick}
            />
          </Content>
        </>
      }
    </>
  );
};
