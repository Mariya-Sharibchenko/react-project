import React from 'react';

import { FilterByStatus, FilterByDate, PageTitles } from 'context';
import { Content, PageCover } from 'templates/default';
import { CoverWrapper, CoverTitle } from './styled';
import { InvitationsListContainer } from 'organisms';
import { useInvitations } from 'core/hooks';
import { userStateVar } from 'core/state';

interface IInvitationsPageProps {
  onInvitationStatusClick: () => void,
}

export const InvitationsPage: React.FC<IInvitationsPageProps> = ({
  onInvitationStatusClick
}) => {
  const invitations = useInvitations(userStateVar());

  return (
    <>
      { invitations.length &&
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
      }
    </>
  );
};
