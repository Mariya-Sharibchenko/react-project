import styled from 'styled-components';

import { Colors, Shadow } from 'context';

const { mainColor } = Colors;
const { shadow } = Shadow;

interface IStudentCardProps {
  active: boolean,
}

export const StudentPreviewCardWrapper = styled.div<IStudentCardProps>`
  cursor: pointer;
  max-height: 132px;
  max-width: 369px;
  display: flex;
  flex-direction: row;
  border-bottom: ${({active}) => active 
          ? `4px solid ${mainColor}` 
          : `none`};
  box-shadow: ${shadow};
  overflow: hidden;
`;
