import styled from 'styled-components';

import { Media, Colors } from 'context';
import coverImg from 'public/cv-page-cover.png';
import partnerLogos from 'public/our-partners.png';

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

export const CVPageContentWrapper = styled.div`
  ${Media.laptop} {
    display: flex;
    justify-content: space-between;
  }
`;

export const AdvertisingBlock = styled.div`
  display: none;
  
  ${Media.laptop} {
    width: 470px;
    margin-top: 94px;
    display: flex;
    flex-direction: column;
  }
`;

export const BannerWrapper = styled.div`
  width: 450px;
  height: 450px;
  border: 1px solid ${backgroundColor};
  margin-bottom: 70px;
`;

export const PartnerLogosWrapper = styled.div`
  width: 100%;
  height: 1500px;
  background: center no-repeat url(${partnerLogos});
`;
