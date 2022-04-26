import React from 'react';

import { FilterByStatus, FilterByDate, IInvitationDataProps, PageTitles } from 'context';
import { Content, PageCover } from 'templates/default';
import { CoverWrapper, CoverTitle } from './styled';
import { InvitationsListContainer } from 'organisms';

interface IInvitationsPageProps {
  invitations: IInvitationDataProps[],
  onInvitationStatusClick: () => void,
}

export const InvitationsPage: React.FC<IInvitationsPageProps> = ({
  invitations,
  onInvitationStatusClick
}) => {
  return (
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
          invitationsArray={invitations}
          onInvitationStatusClick={onInvitationStatusClick}
        />
      </Content>
    </>
  );
};
