import styled from 'styled-components';

import coverImg from 'public/company-home-page-cover.png';
import { Colors, Media } from 'context';

export const CoverWrapper = styled.div`
  width: 100%;
  height: 556px;
  display: flex;
  justify-content: center;
  background: linear-gradient(rgba(25, 25, 25, 0.6), rgba(25, 25, 25, 0.6)), center / cover no-repeat url(${coverImg});
`;

export const CoverTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: ${Colors.secondaryColor};
  margin: 120px 36px 48px;
  
  ${Media.tablet} {
    margin: 210px 0 48px;
  }
`;

export const CoverTitle = styled.h1`
  vertical-align: middle;
  font-size: 24px;
  font-weight: 700;

  ${Media.tablet} {
    font-size: 36px;
  }
`;

export const CoverSubtitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 12px;
  
  ${Media.tablet} {
    line-height: 48px;
  }
`;
