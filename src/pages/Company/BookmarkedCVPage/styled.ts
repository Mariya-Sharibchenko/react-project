import styled from 'styled-components';

import { Media, Colors } from 'context';
import coverImg from 'public/bookmarked-cv-page-cover.png';

export const CoverWrapper = styled.div`
  width: 100%;
  height: 264px;
  display: flex;
  background: linear-gradient(rgba(25, 25, 25, 0.6), rgba(25, 25, 25, 0.6)), center / cover no-repeat url(${coverImg});
`;

export const CoverTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${Colors.secondaryColor};
  width: 350px;
  margin: 84px auto 48px;

  ${Media.tablet} {
    font-size: 36px;
    width: 666px;
  }

  ${Media.laptop} {
    width: 1170px;
  }
`;
