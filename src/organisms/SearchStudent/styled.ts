import styled from 'styled-components';

import { Media } from 'context';

export const SearchStudentWrapper = styled.div``;

export const SearchBlockWrapper = styled.div`
  margin-bottom: 20px;
`;

export const FilterTagsWrapper = styled.ul`
  padding: 0;
  margin: 0 0 48px 0;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  
  ${Media.tablet} {
    min-height: 108px;
    margin-bottom: 84px;
  }
  
  ${Media.laptop} {
    min-height: 72px;
    margin-bottom: 108px;
  }
`;

export const FilterTagWrapper = styled.li`
  &:not(:last-child) {
    margin: 0 12px 12px 0;
  }
`;
