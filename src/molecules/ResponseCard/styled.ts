import styled from 'styled-components';

import { Checkbox } from 'atoms/Checkbox';
import { StudentData } from 'atoms/StudentData';
import { Colors, Shadow } from 'context';

const { secondaryColor } = Colors;
const { shadow } = Shadow;

export const StyledResponseCard = styled.div`
  padding: 24px 60px 28px 31px;
  max-width: 1170px;
  max-height: 132px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${secondaryColor};
  box-shadow: ${shadow};
`;

export const StatusCheckbox = styled(Checkbox)`
  padding: 0 0 0 42px;
  width: 200px;
  min-height: 0;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
`;

export const StudentInfoWrapper = styled.div`
  height: 100%;
  width: 280px;
  display: flex;
  align-items: center;
`;

export const StyledStudentData = styled(StudentData)`
  padding: 30px 0 30px 18px;
`;

export const CommunicationWay = styled.div`
  width: 140px;
  font-size: 14px;
  line-height: 24px;
`;

export const InvitationDate = styled.div`
  width: 140px;
  font-size: 14px;
  line-height: 24px;
`;
