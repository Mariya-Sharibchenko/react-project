import React from 'react';

import { InvitationsPageTitle, FilterByStatus, FilterByDate, IInvitationDataProps } from 'context';
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
          <CoverTitle>{InvitationsPageTitle}</CoverTitle>
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
