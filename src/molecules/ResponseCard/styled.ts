import styled from 'styled-components';

import { Checkbox } from 'atoms/Checkbox';
import { StudentData } from 'atoms/StudentData';
import { Colors, Media, Shadow } from 'context';
import { StudentImageInCircle } from 'atoms';

const { secondaryColor } = Colors;
const { shadow } = Shadow;

export const StyledResponseCard = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${secondaryColor};
  box-shadow: ${shadow};
  
  ${Media.tablet} {
    max-height: 132px;
    padding: 24px 30px 30px;
  }
  
  ${Media.laptop} {
    padding: 24px 60px 28px 31px;
  }
`;

export const StatusCheckbox = styled(Checkbox)`
  padding: 0 0 0 64px;
  width: 20px;
  min-height: 0;
  height: 24px;
  font-size: 14px;
  line-height: 24px;

  ${Media.tablet} {
    padding: 0 0 0 30px;
  }
  
  ${Media.laptop} {
    padding: 0 0 0 42px;
    width: 200px;
  }
`;

export const MobileResponseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const StudentInfoWrapper = styled.div`
  width: 240px;
  display: flex;
  align-items: center;

  ${Media.tablet} {
    height: 100%;
    width: 280px;
  }
`;

export const StyledStudentImg = styled(StudentImageInCircle)`
  display: none;
  
  ${Media.tablet} {
    display: unset;
  }
`;

export const StyledStudentData = styled(StudentData)`
  padding: 0;
  margin-bottom: 24px;
  
  ${Media.tablet} {
    padding: 30px 0 30px 18px;
    margin-bottom: 0;
  }
`;

export const CommunicationWay = styled.div`
  width: 140px;
  font-size: 14px;
  line-height: 24px;
`;

export const InvitationDate = styled.div`
  display: none;
  
  ${Media.laptop} {
    display: unset;
    width: 140px;
    font-size: 14px;
    line-height: 24px;
  }
`;
