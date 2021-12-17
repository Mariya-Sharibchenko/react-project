import styled from 'styled-components';

import { Colors, Shadow } from 'context';
import { Button } from 'atoms/Button';

const { mainText, mainColor, backgroundColor, secondaryColor } = Colors;
const { shadow } = Shadow;

interface IStudentImage {
  img?: string,
}

interface IStudentDiplomaLink {
  link: string,
}

export const StudentCVWrapper = styled.div`
  max-width: 770px;
  display: flex;
  flex-direction: column;
  box-shadow: ${shadow};
`;

export const StudentCVHeaderWrapper = styled.div`
  position: relative;
  border-bottom: 4px solid ${mainColor};
`;

export const StudentCVHeader = styled.div<IStudentImage>`
  min-height: 132px;
  padding: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({img}) => img && `left center no-repeat url(${img})`};
`;

export const HeaderBackgroundMask = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(270deg, ${backgroundColor} 80%, rgba(25, 25, 25, 0.5) 100%);
`;

export const StudentCVHeaderInfoWrapper = styled.div`
  z-index: 1;
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

export const StudentCVHeaderBtnsWrapper = styled.div`
  z-index: 1;
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

export const StudentCVInfoList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StudentCVInfoItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  &:not(:last-child) {
    margin-bottom: 60px;
  }
`;

export const StudentCVInfoTitle = styled.p`
  width: 140px;
  margin: 0;
  font-weight: 600;
  font-size: 16px;
`;

export const StudentCVInfoContent = styled.div`
  width: 538px;
  font-size: 14px;
`;

export const StudentCVDiplomaLink = styled.a`
  color: ${mainText};
  text-decoration: underline;
`;
