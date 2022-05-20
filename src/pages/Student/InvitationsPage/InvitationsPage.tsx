import React from 'react';

import { FilterByStatus, FilterByDate, PageTitles } from 'context';
import { Content, PageCover } from 'templates/default';
import { CoverWrapper, CoverTitle } from './styled';
import { InvitationsListContainer } from 'organisms';

interface IInvitationsPageProps {
  onInvitationStatusClick: () => void,
}

export const InvitationsPage: React.FC<IInvitationsPageProps> = ({
  onInvitationStatusClick
}) => {

  return (
    <>
      <>
        <PageCover>
          <CoverWrapper>
            <CoverTitle>{PageTitles.InvitationsPageTitle}</CoverTitle>
          </CoverWrapper>
        </PageCover>

        <Content>
          <InvitationsListContainer
            filterByStatus={FilterByStatus}
            filterByDate={FilterByDate}
            onInvitationStatusClick={onInvitationStatusClick}
          />
        </Content>
      </>
    </>
  );
};
