import styled from 'styled-components';

import { Button } from 'atoms';
import { Colors } from 'context';

const { mainColor } = Colors;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ColumnHeaderText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
  width: 150px;
`;

export const DeleteAllButton = styled(Button)`
  background-color: transparent;
  min-height: 30px;
  width: 124px;
  border-bottom: 2px solid ${mainColor};
`;
