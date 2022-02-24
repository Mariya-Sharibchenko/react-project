import styled from 'styled-components';

import { Colors, Media, Shadow } from 'context';
import { BookmarkButton, Button } from 'atoms';

const { mainColor } = Colors;
const { shadow } = Shadow;

interface IStudentCardProps {
  active: boolean,
}

export const StudentPreviewCardWrapper = styled.div<IStudentCardProps>`
  cursor: pointer;
  max-height: 132px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: ${({active}) => active 
          ? `4px solid ${mainColor}` 
          : `none`};
  box-shadow: ${shadow};
  overflow: hidden;
  margin-bottom: 12px;
  
  ${Media.laptop} {
    max-width: 369px;
  }
`;

export const ButtonsWrapper = styled.div`
  ${Media.tablet} {
    display: flex;
    min-width: 226px;
    margin: 0 31px 0 auto;
  }
  
  ${Media.laptop} {
    display: none;
  }
`;

export const ShowCVButton = styled(Button)`
  width: 170px;
  height: 36px;
  border-radius: 5px;
  margin-right: 12px;
  display: none;
  
  ${Media.tablet} {
    display: block;
  }
  
  ${Media.laptop} {
    display: none;
  }
`;

export const Bookmark = styled(BookmarkButton)`
  position: absolute;
  top: 0;
  right: 0;
  
  ${Media.tablet} {
    position: relative;
  }
  ${Media.laptop} {
    display: none;
  }
`;
