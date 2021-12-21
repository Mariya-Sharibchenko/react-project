import React from 'react';

import styled from 'styled-components';

import {
  CityTitle,
  IStudentContactsProps,
  OtherContactsTitle,
  SocialMediaTitle,
  Colors
} from 'context';

import facebook from 'public/facebook-icon.svg';
import vk from 'public/vk-icon.svg';
import instagram from 'public/instagram-icon.svg';
import linkedin from 'public/linkedin-icon.svg';

import { StyledInfoWrapper, StyledInfoItem, StyledTitle, StyledText } from './styled';

const { mainColor } = Colors;

interface ISocialMediaName {
  name: string,
}

const SocialMediaList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const SocialMediaItem = styled.li`
  margin: 0 12px 0 0;
`;

const SocialMediaBtn = styled.a<ISocialMediaName>`
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-color: ${mainColor};
  
  &:after {
    position: absolute;
    content: ${({name}) => {
      switch (name) {
        case 'facebook' :
          return `url(${facebook})`;
        case 'linkedin' :
          return `url(${linkedin})`;
        case 'vk' :
          return `url(${vk})`;
        default :
          return `url(${instagram})`;
      }
    }};
    width: 36px;
    height: 36px;
  }
`;

export const ContactsInfoForStudentCV: React.FC<IStudentContactsProps> = ({city, tel, eMail, socialMedia}) => {
  return (
    <StyledInfoWrapper>
      <StyledInfoItem>
        <StyledTitle>{CityTitle}</StyledTitle>

        <StyledText>{city}</StyledText>
      </StyledInfoItem>

      <StyledInfoItem>
        <StyledTitle>{OtherContactsTitle}</StyledTitle>

        <StyledText>{tel}</StyledText>
        <StyledText>{eMail}</StyledText>
      </StyledInfoItem>

      { socialMedia &&
        <StyledInfoItem>
          <StyledTitle>{SocialMediaTitle}</StyledTitle>

          <SocialMediaList>
            { Object.entries(socialMedia).map(([name, link]) =>
              <SocialMediaItem key={name}>
                <SocialMediaBtn href={link} name={name}/>
              </SocialMediaItem>
            )}
          </SocialMediaList>
        </StyledInfoItem>
      }
    </StyledInfoWrapper>
  )
};
