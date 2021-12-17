import styled from 'styled-components';

import { Colors, Shadow } from 'context';
import { Button } from 'atoms/Button';

const { mainColor, backgroundColor, secondaryColor } = Colors;
const { shadow } = Shadow;

interface IStudentImage {
  img?: string,
}

export const StudentCVWrapper = styled.div`
  max-width: 770px;
  display: flex;
  flex-direction: column;
  box-shadow: ${shadow};
`;

export const StudentCVHeader = styled.div<IStudentImage>`
  min-height: 132px;
  padding: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid ${mainColor};
  // background-image: ${({img}) => img && `left center no-repeat url(${img}) ${backgroundColor}`};
  background: ${({img}) => img ? `left center no-repeat url(${img}) ${backgroundColor}` : `${backgroundColor}`};
`;

export const StudentCVMainInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StudentName = styled.h2`
  color: ${secondaryColor};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const StudentCourseAndAge = styled.p`
  color: ${secondaryColor};
  font-size: 16px;
  margin: 0;
`;

export const StudentCVMainBtnsWrapper = styled.div`
  height: 100%;
  align-items: center;
`;

export const ButtonInvite = styled(Button)`
  margin-right: 31px;
`;

export const StudentCVBody = styled.div`
  width: 100%;
  padding: 42px 31px 72px;
`;
