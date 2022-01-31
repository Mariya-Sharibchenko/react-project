import styled from 'styled-components';

import { Colors, Shadow } from 'context';

const { secondaryColor } = Colors;
const { shadow } = Shadow;

export const ProfileSettingsFormWrapper = styled.form`
  max-width: 600px;
  background-color: ${secondaryColor};
  padding: 39px 30px 64px;
  border-radius: 1px;
  box-shadow: ${shadow};
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin: 0 0 64px;
`;

export const Legend = styled.legend`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 34px;
`;

export const ItemWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;
