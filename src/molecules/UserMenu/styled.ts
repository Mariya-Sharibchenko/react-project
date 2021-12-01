import styled from 'styled-components';

import { DropDownWindow } from 'atoms/DropDownWindow';
import { StudentImageInCircle } from 'atoms/StudentImages';
import { IStudentImageProps } from 'atoms/StudentImages/interfaces';
import { Colors } from 'context';

const { mainText, borderColor } = Colors;

interface IUserImage extends IStudentImageProps{
  onClick: () => void,
}

export const DropDownWindowWrapper = styled(DropDownWindow)`
  min-width: 375px;
  left: -330px;
  top: -5px;
`

export const UserMenuTitle = styled.div`
  width: 100%;
  padding: 36px 24px;
  color: ${mainText};
  font-weight: 700;
  font-size: 24px;
`;

export const UserMenuItemsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const UserMenuItemWrapper = styled.li`
  padding: 24px;
  margin: 0;
  border-top: 1px solid ${borderColor};
`;

export const UserImage = styled(StudentImageInCircle)<IUserImage>`
  cursor: pointer;
  margin: 18px 0;
  width: 48px;
  height: 48px;
`;

export const UserMenuWrapper = styled.div`
  position: relative;
  width: 48px;
  margin: 0 auto;
`;
