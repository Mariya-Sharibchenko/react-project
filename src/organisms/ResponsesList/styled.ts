import styled from 'styled-components';

import { Colors, Shadow } from 'context';

const { secondaryColor, borderColor } = Colors;
const { shadow } = Shadow;

export const ResponsesListWrapper = styled.div`
`;

export const ResponsesListHeader = styled.div`
  padding: 38px 31px 32px;
  background: ${secondaryColor};
  border-radius: 1px 1px 0 0;
  border-bottom: 2px solid ${borderColor};
  box-shadow: ${shadow};
`;

export const ResponsesArrayWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ResponsesCardWrapper = styled.li`
  padding: 0;
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
