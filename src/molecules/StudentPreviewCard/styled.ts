import styled from 'styled-components';

import { Colors, Shadow } from 'context';

const { mainColor, secondaryText } = Colors;
const { shadow } = Shadow;

interface StudentCardProps {
  active: boolean,
}

export const StudentPreviewCardWrapper = styled.div<StudentCardProps>`
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

export const StudentData = styled.div`
  padding: 29px 31px 27px;
  display: flex;
  flex-direction: column;
`;

export const StudentName = styled.h3`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

export const StudentAdditionalInfo = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${secondaryText};
  margin: 0 0 9px 0;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;