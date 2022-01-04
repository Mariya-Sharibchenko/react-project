import styled from 'styled-components';

export const StyledInfoWrapper = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.7;
`;

export const StyledInfoItem = styled.li`
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const StyledTitle = styled.p`
  margin: 0;
  font-weight: 600;
`;

export const StyledText = styled.p`
  margin: 0;
`;
