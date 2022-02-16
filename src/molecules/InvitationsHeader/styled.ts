import styled from 'styled-components';

import { Button } from 'atoms';
import { Colors } from 'context';

export const InvitationsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ColumnHeaderText = styled.p`
  margin: 0;
  padding: 0;
`;

export const DeleteAllInvitationsButton = styled(Button)`
  background-color: transparent;
  min-height: 30px;
  min-width: 124px;
  border-bottom: 2px solid ${Colors.mainColor};
`;
