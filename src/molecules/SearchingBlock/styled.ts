import styled from 'styled-components';

import { Shadow, Colors, Media } from 'context';
import { Button } from 'atoms/Buttons';

const { shadow } = Shadow;
const { mainColor, mainText, borderColor, secondaryColor } = Colors;

export interface IOpenFiltersProps {
  isFiltersBlockOpened: boolean,
}

export const StyledSearchBlock = styled.div`
  width: 100%;
  display: flex;
  background-color: ${secondaryColor};
  flex-direction: column;
  box-shadow: ${shadow};
`;

export const StyledSearchWrapper = styled.div<IOpenFiltersProps>`
  width: 100%;
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 1px 1px 0 0;
  border-bottom: 2px solid ${borderColor};

  ${Media.tablet} {
    flex-direction: row;
    align-items: center;
    border-bottom: ${({isFiltersBlockOpened}) => isFiltersBlockOpened ? `2px solid ${borderColor}` : 'none' };
  }
`;

export const StyledFiltersWrapper = styled.div`
  width: 100%;
  min-height: 216px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 1px 1px;
`;

export const StyledFiltersListWrapper = styled.ul`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 100%;
  grid-gap: 24px 0;
  padding: 0;
  margin: 0;

  ${Media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
  }

  ${Media.laptop} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100%;
    grid-gap: 0 20px;
  }
`;

export const StyledFilterItemWrapper = styled.li``;


export const OpenFiltersBtn = styled(Button)<IOpenFiltersProps>`
  height: 36px;
  width: 92px;
  margin: 21px auto 21px;
  background-color: transparent;
  border-bottom: 2px solid ${mainColor};
  color: ${({isFiltersBlockOpened}) => isFiltersBlockOpened ? mainColor : mainText };
  
  &:hover {
    color: ${mainColor};
  }

  ${Media.tablet} {
    margin: 0 30px 0 0;
  }
`;

export const CloseFiltersBtn = styled(OpenFiltersBtn)`
  color: ${({isFiltersBlockOpened}) => isFiltersBlockOpened && mainText };
  width: 166px;
`;

export const SearchButton = styled(Button)`
  min-width: 100%;
  margin-top: 12px;
  
  ${Media.tablet} {
    margin: 0;
    min-width: 236px;
  }
`;
