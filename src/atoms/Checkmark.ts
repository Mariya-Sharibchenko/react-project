import styled from 'styled-components';

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
    /*content: url('/public/check-mark-icon.svg');*/
    content: '';
    display: block;
    border: solid #FFFFFF;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 3px;
    top: 1px;
    width: 4px;
    height: 6px;
  }
`;