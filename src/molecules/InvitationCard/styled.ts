import styled, { css } from 'styled-components';

import { Checkbox } from 'atoms/Checkbox';
import { Button } from 'atoms/Buttons';
import { ResponseStatus, Colors, Shadow } from 'context';

const { secondaryColor, mainColor, filterBackground, borderColor, backgroundColor, mainText, secondaryText } = Colors;
const { shadow } = Shadow;

interface IButtonProps {
  status: ResponseStatus,
}

export const StyledInvitationCard = styled.div`
  padding: 24px 60px 28px 31px;
  max-width: 1170px;
  max-height: 132px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${secondaryColor};
  box-shadow: ${shadow};
`;

export const StatusCheckbox = styled(Checkbox)`
  padding: 0 0 0 42px;
  max-width: 200px;
  min-height: 0;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
`;

export const CompanyInfoWrapper = styled.div`
  height: 100%;
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
  height: 100%;
  max-width: 216px;
  display: flex;
  justify-content: space-between;
`;

export const AcceptButton = styled(Button)<IButtonProps>`
  min-width: 102px;
  min-height: 36px;
  border-radius: 5px;
  font-size: 14px;
  ${({ status }) => {
    switch (status) {
      case ResponseStatus.accepted :
        return css`
          color: ${secondaryText};
          background-color: ${borderColor}
        `;
      case ResponseStatus.rejected :
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
`;

export const RejectButton = styled(Button)<IButtonProps>`
  min-width: 102px;
  min-height: 36px;
  border-radius: 5px;
  font-size: 14px;
  ${({ status }) => {
    switch (status) {
      case ResponseStatus.accepted :
        return css`
            color: ${secondaryText};
            background-color: ${filterBackground}
          `;
      case ResponseStatus.rejected :
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
`;

export const InvitationDate = styled.div`
  font-size: 14px;
  line-height: 24px;
`;
