import styled from 'styled-components';

import { Colors, Shadow } from 'context';

const { mainColor, secondaryColor } = Colors;
const { shadow } = Shadow;

interface IUserImgProps {
  userImg?: string
}

export const StyledUserImage = styled.div<IUserImgProps>`
  cursor: pointer;
  background: ${({userImg}) => userImg 
                               ? `center / cover no-repeat ${`url(${userImg})`} ${mainColor}`
                               : `${mainColor}`};
  border-radius: 50%;
  border: 1.5px solid ${secondaryColor};
  box-shadow: ${shadow};
  margin: 18px 0;
  width: 48px;
  height: 48px;
`;

export const UserInitials = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;
