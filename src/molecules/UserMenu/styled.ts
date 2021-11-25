import styled from 'styled-components';

import { DropDownWindow } from 'atoms/DropDownWindow';
import { Colors } from 'context';

const { mainText, borderColor } = Colors;

export const DropDownWindowWrapper = styled(DropDownWindow)`
  min-width: 375px;
`

export const UserMenuTitle = styled.div`
  width: 100%;
  padding: 36px 24px;
  color: ${mainText};
  font-weight: 700;
  font-size: 24px;
`;

export const UserMenuItemsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const UserMenuItemWrapper = styled.li`
  padding: 24px;
  margin: 0;
  border-top: 1px solid ${borderColor};
`;