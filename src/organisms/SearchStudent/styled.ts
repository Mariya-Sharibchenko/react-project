import styled from 'styled-components';

import { Media } from 'context';

export const SearchStudentWrapper = styled.div``;

export const SearchBlockWrapper = styled.div`
  margin-bottom: 20px;
`;

export const FilterTagsWrapper = styled.div`
  margin-bottom: 48px;
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
