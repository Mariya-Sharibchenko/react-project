import styled from 'styled-components';

import checkMarkIcon from 'public/check-mark-icon.svg';

export const Checkmark = styled.div`
  position: absolute;
  top: calc(50% - 6px);
  left: 15px;
  height: 12px;
  width: 12px;
  background-color: #191919;
  border: 0;
  border-radius: 1px;
  box-sizing: border-box;
  
  &:after {
    position: absolute;
    content: url(${checkMarkIcon});
    display: block;
    left: 2px;
    top: -9px;
    width: 12px;
    height: 12px;
  }
`;
