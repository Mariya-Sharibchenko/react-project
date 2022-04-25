import styled from 'styled-components';

import backIcon from 'public/arrow-back-icon.svg';
import { Media } from 'context';

export const StudentCVPageHeader = styled.div`
  padding: 144px 100px 96px;
  display: flex;
  justify-content: space-between;

  ${Media.laptop} {
    display: none;
  }
`;

export const BackToAllCVButton = styled.button`
  border: none;
  position: relative;
  background-color: transparent;
  padding-left: 36px;
  min-width: 100px;
  
  &:before {
    position: absolute;
    content: url(${backIcon});
    width: 24px;
    height: 24px;
    top: 6px;
    left: 0;
  }
`;

export const Content = styled.div`
  max-width: 350px;
  padding-bottom: 72px;
  margin: -48px auto 0;
  
  ${Media.tablet} {
    max-width: 666px;
    padding-bottom: 108px;
  }
 
  ${Media.laptop} {
    margin: 0;
    max-width: 1170px;
  }
`;
