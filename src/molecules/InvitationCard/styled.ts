import styled, { css } from 'styled-components';

import { Checkbox } from 'atoms/Checkbox';
import { Button } from 'atoms/Buttons';
import { ResponseStatus, Colors, Shadow, Media } from 'context';

const { secondaryColor, mainColor, filterBackground, borderColor, backgroundColor, mainText, secondaryText } = Colors;
const { shadow } = Shadow;

interface IButtonProps {
  status: ResponseStatus,
}

export const StyledInvitationCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${secondaryColor};
  box-shadow: ${shadow};

  ${Media.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 132px;
    padding: 24px 30px 30px;
  }

  ${Media.laptop} {
    padding: 24px 60px 28px 31px;
  }
`;

export const StatusCheckbox = styled(Checkbox)`
  padding: 0 0 0 64px;
  width: 20px;
  min-height: 0;
  height: 24px;
  font-size: 14px;
  line-height: 24px;

  ${Media.tablet} {
    padding: 0 0 0 30px;
  }

  ${Media.laptop} {
    padding: 0 0 0 42px;
    width: 200px;
  }
`;

export const MobileCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const CompanyInfoWrapper = styled.div`
  width: 190px;

  ${Media.tablet} {
    min-width: 160px;
  }
`;

export const CompanyName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const CompanyContacts = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  ${Media.tablet} {
    max-width: 216px;
  }
`;

export const AcceptButton = styled(Button)<IButtonProps>`
  min-width: 102px;
  height: 36px;
  font-size: 14px;
  ${({ status }) => {
    switch (status) {
      case ResponseStatus.Accepted :
        return css`
          color: ${secondaryText};
          background-color: ${borderColor}
        `;
      case ResponseStatus.Rejected :
        return css`
          color: ${secondaryText};
          background-color: ${filterBackground}
        `;
      default :
        return css`
          color: ${mainText};
          background-color: ${mainColor}
        `;
    }
  }};
  
  ${Media.tablet} {
    border-radius: 5px;
  }
`;

export const RejectButton = styled(Button)<IButtonProps>`
  min-width: 102px;
  height: 36px;
  font-size: 14px;
  ${({ status }) => {
    switch (status) {
      case ResponseStatus.Accepted :
        return css`
            color: ${secondaryText};
            background-color: ${filterBackground}
          `;
      case ResponseStatus.Rejected :
        return css`
            color: ${secondaryText};
            background-color: ${borderColor}
          `;
      default :
        return css`
            color: ${secondaryColor};
            background-color: ${backgroundColor}
          `;
    }
  }};
  
  ${Media.tablet} {
    border-radius: 5px;
  }
`;

export const InvitationDate = styled.div`
  display: none;

  ${Media.laptop} {
    display: unset;
    width: 140px;
    font-size: 14px;
    line-height: 24px;
  }
`;
