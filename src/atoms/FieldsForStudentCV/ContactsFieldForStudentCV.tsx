import React from 'react';

import { ContactsInfoForStudentCV } from 'atoms/DetailedFieldsForStudentCV';
import { ContactsAreHiddenText, IStudentContactsProps } from 'context';

import { WrapperFieldForStudentCV, StudentCVInfoTitle, StudentCVInfoContent } from './styled';

interface IContactsFieldForStudentCVProps {
  title: string,
  isShowed: boolean,
  contacts: IStudentContactsProps,
}

export const ContactsFieldForStudentCV: React.FC<IContactsFieldForStudentCVProps> = ({title, isShowed, contacts}) => {
  const { city, tel, eMail, socialMedia} = contacts;

  return (
    <WrapperFieldForStudentCV>
      <StudentCVInfoTitle>{title}</StudentCVInfoTitle>

      <StudentCVInfoContent>
        { isShowed
          ? <ContactsInfoForStudentCV
              city={city}
              tel={tel}
              eMail={eMail}
              socialMedia={socialMedia}
            />
          : ContactsAreHiddenText}
      </StudentCVInfoContent>
    </WrapperFieldForStudentCV>
  );
};
