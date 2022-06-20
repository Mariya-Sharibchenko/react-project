import React from 'react';

import {
  PageTitles,
  FilterByStatus,
  FilterByDate,
} from 'context';
import { Content, PageCover } from 'templates/default';
import { CoverWrapper, CoverTitle } from './styled';
import { ResponsesListContainer } from 'organisms';

interface IResponsesPageProps {
  onInvitationStatusClick: () => void,
}

export const ResponsesPage: React.FC<IResponsesPageProps> = ({
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
          onInvitationStatusClick={onInvitationStatusClick}
        />
      </Content>
    </>
  );
};
