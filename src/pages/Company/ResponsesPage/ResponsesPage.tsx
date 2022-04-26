import React from 'react';

import { PageTitles, FilterByStatus, FilterByDate, IResponseDataProps } from 'context';
import { Content, PageCover } from 'templates/default';
import { CoverWrapper, CoverTitle } from './styled';
import { ResponsesListContainer } from 'organisms';

interface IResponsesPageProps {
  responses: IResponseDataProps[],
  onInvitationStatusClick: () => void,
}

export const ResponsesPage: React.FC<IResponsesPageProps> = ({
  responses,
  onInvitationStatusClick
}) => {
  return (
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
          responsesArray={responses}
          onInvitationStatusClick={onInvitationStatusClick}
        />
      </Content>
    </>
  );
};
