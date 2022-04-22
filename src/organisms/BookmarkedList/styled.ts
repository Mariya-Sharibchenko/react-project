import styled from 'styled-components';

import { Media, Colors, Shadow } from 'context';
import { Button, SearchInputContainer } from 'atoms';

export const BookmarkedListWrapper = styled.div``;

export const SearchBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${Colors.secondaryColor};
  box-shadow: ${Shadow.shadow};
  padding: 24px 24px 31px;
  margin-bottom: 72px;
  
  ${Media.tablet} {
    flex-direction: row;
    padding: 20px 31px;
    margin-bottom: 104px;
  }
`;

export const StyledSearchInput = styled(SearchInputContainer)`
  margin-bottom: 14px;
  
  ${Media.tablet} {
    margin-bottom: 0;
  }
`;

export const SearchButton = styled(Button)`
  min-width: 100%;

  ${Media.tablet} {
    min-width: 220px;
  }
  
  ${Media.laptop} {
    min-width: 236px;
  }
`;
