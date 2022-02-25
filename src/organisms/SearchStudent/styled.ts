import styled from 'styled-components';

import { Media } from 'context';

export const SearchStudentWrapper = styled.div``;

export const SearchBlockWrapper = styled.div`
  margin-bottom: 20px;
`;

export const FilterTagsWrapper = styled.div`
  min-height: 72px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  
  ${Media.tablet} {
    margin-bottom: 84px;
  }
  
  ${Media.laptop} {
    margin-bottom: 108px;
  }
`;
