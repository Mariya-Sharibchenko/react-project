import styled from 'styled-components';

import backIcon from 'public/arrow-back-icon.svg';

export const StudentCVPageHeader = styled.div`
  padding: 144px 100px 96px;
  display: flex;
  justify-content: space-between;
`;

export const BackToAllCVButton = styled.button`
  border: none;
  position: relative;
  background-color: transparent;
  padding-left: 36px;
  min-width: 100px;
  height: 100%;
  
  &:before {
    position: absolute;
    content: url(${backIcon});
    width: 24px;
    height: 24px;
    top: 6px;
    left: 0;
  }
`;
