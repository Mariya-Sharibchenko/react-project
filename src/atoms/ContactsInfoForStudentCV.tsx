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

const { mainColor } = Colors;

interface ISocialMediaName {
  name: string,
}

const StyledContactsInfo = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.7;
`;

const ContactsInfoItem = styled.li`
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const ContactsTitle = styled.p`
  margin: 0;
  font-weight: 600;
`;

const ContactsDetailedInfo = styled.p`
  margin: 0;
`;

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
    <StyledContactsInfo>
      <ContactsInfoItem>
        <ContactsTitle>{CityTitle}</ContactsTitle>
        <ContactsDetailedInfo>{city}</ContactsDetailedInfo>
      </ContactsInfoItem>

      <ContactsInfoItem>
        <ContactsTitle>{OtherContactsTitle}</ContactsTitle>
        <ContactsDetailedInfo>{tel}</ContactsDetailedInfo>
        <ContactsDetailedInfo>{eMail}</ContactsDetailedInfo>
      </ContactsInfoItem>

      { socialMedia &&
        <ContactsInfoItem>
          <ContactsTitle>{SocialMediaTitle}</ContactsTitle>

          <SocialMediaList>
            { Object.entries(socialMedia).map(([name, link]) =>
              <SocialMediaItem key={name}>
                <SocialMediaBtn href={link} name={name}/>
              </SocialMediaItem>
            )}
          </SocialMediaList>
        </ContactsInfoItem>
      }
    </StyledContactsInfo>
  )
};
