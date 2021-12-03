import styled from 'styled-components';

import { Shadow, Colors } from 'context';
import { Button } from 'atoms/Button';

const { shadow } = Shadow;
const { mainColor, mainText, borderColor } = Colors;

export interface IOpenFiltersProps {
  isFiltersBlockOpened: boolean,
}

export const StyledSearchBlock = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: column;
  box-shadow: ${shadow};
`;

export const StyledSearchWrapper = styled.div<IOpenFiltersProps>`
  width: 100%;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  border-radius: 1px 1px 0 0;
  border-bottom: ${({isFiltersBlockOpened}) => isFiltersBlockOpened ? `2px solid ${borderColor}` : 'none' };
`;

export const StyledFiltersWrapper = styled.div<IOpenFiltersProps>`
  width: 100%;
  min-height: 216px;
  padding: 32px;
  display: ${({isFiltersBlockOpened}) => isFiltersBlockOpened ? 'flex' : 'none' };
  border-radius: 0 0 1px 1px;
`;

export const StyledFiltersListWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledFilterItemWrapper = styled.li`
`;

export const OpenFiltersBtn = styled(Button)<IOpenFiltersProps>`
  min-width: 92px;
  min-height: 36px;
  background-color: transparent;
  margin-right: 30px;
  border-bottom: ${({isFiltersBlockOpened}) => isFiltersBlockOpened ? `2px solid ${mainColor}` : `2px solid ${mainText}` };
  color: ${({isFiltersBlockOpened}) => isFiltersBlockOpened ? mainColor : mainText };
`;