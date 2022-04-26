import styled from 'styled-components';

import coverImg from 'public/cv-page-cover.png';
import { Media, Colors } from 'context';

const { secondaryColor, backgroundColor } = Colors;

export const CoverWrapper = styled.div`
  width: 100%;
  height: 264px;
  display: flex;
  background: linear-gradient(rgba(25, 25, 25, 0.6), rgba(25, 25, 25, 0.6)), center / cover no-repeat url(${coverImg});
`;

export const CoverTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${secondaryColor};
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

export const SettingsPageContentWrapper = styled.div`
  ${Media.laptop} {
    display: flex;
    justify-content: space-between;
  }
`;

export const AdvertisingWrapper = styled.div`
  width: 450px;
  height: 450px;
  border: 1px solid ${backgroundColor};
  margin-bottom: 70px;
  
  ${Media.tablet} {
    display: none;
  }
`;
