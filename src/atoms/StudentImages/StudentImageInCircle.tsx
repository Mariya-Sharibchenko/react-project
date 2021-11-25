import styled from 'styled-components';

import { Colors, Shadow } from 'context';

import { StudentImage } from './StudentImage';

const { mainColor, secondaryColor } = Colors;
const { shadow } = Shadow;

export const StudentImageInCircle = styled(StudentImage)`
  padding: 10px 0;
  width: 72px;
  height: 72px;
  background: ${({userPicture}) => userPicture
    ? `center / cover no-repeat ${`url(${userPicture})`} ${mainColor}` 
    : `${mainColor}`};
  border-radius: 50%;
  border: 1.5px solid ${secondaryColor};
  box-shadow: ${shadow};
`;
