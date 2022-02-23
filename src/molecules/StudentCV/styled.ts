import styled from 'styled-components';

import { Colors, Media, Shadow } from 'context';
import { Button, BookmarkButton } from 'atoms';

const { mainColor, backgroundColor, secondaryColor } = Colors;
const { shadow } = Shadow;

interface IStudentImage {
  img?: string,
}

export const StudentCVWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${shadow};
  
  ${Media.laptop} {
    max-width: 770px;
  }
`;

export const StudentCVHeaderWrapper = styled.div`
  position: relative;
  border-bottom: 4px solid ${mainColor};
`;

export const StudentCVHeader = styled.div<IStudentImage>`
  min-height: 132px;
  padding: 31px;
  display: flex;
  flex-direction: column;
  align-items: start;

  ${Media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${({img}) => img && `left center no-repeat url(${img})`};
  }
`;

export const HeaderBackgroundMask = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${backgroundColor};
  
  ${Media.tablet} {
    background: linear-gradient(270deg, ${backgroundColor} 80%, rgba(25, 25, 25, 0.5) 100%);
  }
`;

export const StudentCVHeaderInfoWrapper = styled.div`
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  ${Media.tablet} {
    margin-bottom: 0;
  }
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
  ${Media.laptop} {
    margin-right: 31px;
  }
`;

export const AddToBookmarksButton = styled(BookmarkButton)`
  display: none;
  
  ${Media.laptop} {
    display: unset;
  }
`;

export const StudentCVBody = styled.ul`
  width: 100%;
  padding: 42px 31px 72px;
  margin: 0;
`;

export const StudentCVInfoItem = styled.li`
  margin: 0;
  padding: 0;
  
  &:not(:last-child) {
    margin-bottom: 48px;
  }
  
  ${Media.tablet} {
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
`;
