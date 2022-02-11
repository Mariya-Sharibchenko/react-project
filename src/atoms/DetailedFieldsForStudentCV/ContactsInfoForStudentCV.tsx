import React from 'react';

import styled from 'styled-components';

import { TitleTextField } from './EducationInfoForStudentCV';
import {
  IStudentContactsProps,
  Colors,
  SocialMedia,
  TitlesForStudentCV,
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
        case SocialMedia.facebook :
          return `url(${facebook})`;
        case SocialMedia.linkedin :
          return `url(${linkedin})`;
        case SocialMedia.vk :
          return `url(${vk})`;
        default :
          return `url(${instagram})`;
      }
    }};
    width: 36px;
    height: 36px;
  }
`;

export const ContactsInfoForStudentCV: React.FC<IStudentContactsProps> = ({
  city,
  tel,
  eMail,
  socialMedia
}) => {

  return (
    <StyledInfoWrapper>
      <TitleTextField title={TitlesForStudentCV.City} text={city} />

      <StyledInfoItem>
        <StyledTitle>{TitlesForStudentCV.OtherContacts}</StyledTitle>

        <StyledText>{tel}</StyledText>
        <StyledText>{eMail}</StyledText>
      </StyledInfoItem>

      { socialMedia &&
        <StyledInfoItem>
          <StyledTitle>{TitlesForStudentCV.SocialMedia}</StyledTitle>

          <SocialMediaList>
            { Object.entries(socialMedia).map(([name, link]) =>
              <SocialMediaItem key={name}>
                <SocialMediaBtn href={link} name={name} />
              </SocialMediaItem>
            )}
          </SocialMediaList>
        </StyledInfoItem>
      }
    </StyledInfoWrapper>
  );
};
