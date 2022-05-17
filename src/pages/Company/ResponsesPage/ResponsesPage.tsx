import React from 'react';

import {
  PageTitles,
  FilterByStatus,
  FilterByDate,
} from 'context';
import { Content, PageCover } from 'templates/default';
import { CoverWrapper, CoverTitle } from './styled';
import { ResponsesListContainer } from 'organisms';
import { useResponses } from 'core/hooks';
import { userStateVar } from 'core/state';

interface IResponsesPageProps {
  onInvitationStatusClick: () => void,
}

export const ResponsesPage: React.FC<IResponsesPageProps> = ({
  onInvitationStatusClick
}) => {
 const responsesData = useResponses(userStateVar());

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
