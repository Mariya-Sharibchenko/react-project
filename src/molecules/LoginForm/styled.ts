import styled from 'styled-components';

import { Checkbox } from 'atoms/Checkbox';
import { InputContainer } from 'atoms/Input/InputContainer';
import Logo from 'public/Logo.png';
import { Colors, Shadow } from 'context';

const { secondaryText } = Colors;
const { shadow } = Shadow;

export const LoginFormWrapper = styled.div`
  width: 416px;
  height: 524px;
  padding: 0 31px 48px;
  box-shadow: ${shadow};
  border-radius: 1px;
`;

export const LogoWrapper = styled.div`
  width: 66px;
  height: 84px;
  margin-bottom: 36px;
  background: center no-repeat url(${Logo});
`;

export const ContentWrapper = styled.div``;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 24px;
`;

export const LoginInput = styled(InputContainer)`
  margin-bottom: 12px;
`;

export const LoginCheckbox = styled(Checkbox)`
  display: inline-block;
  min-height: unset;
  padding: 0 32px;
  margin-bottom: 24px;
  font-size: 12px;
  color: ${secondaryText};
`;


