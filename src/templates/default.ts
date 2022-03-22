import styled from 'styled-components';

import { Media } from 'context';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
`;

export const Footer = styled.footer`
  width: 100%;
`;

export const PageCover = styled.div`
  margin-top: 84px;
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
    max-width: 1170px;
    padding-bottom: 120px;
  }
`;
