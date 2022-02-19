import React from 'react';

import { HeaderWrapper, ColumnHeaderText, DeleteAllButton } from './styled';
import { FilterContainer } from 'atoms';
import { DeleteAll, IFilterProps } from 'context';

export interface IInvitationHeaderProps {
  filterStatusData: IFilterProps,
  setFilterStatusOption: (options: IFilterProps) => void,
  filterDateData: IFilterProps,
  setFilterDateOption: (options: IFilterProps) => void,
  onDeleteAllClick: () => void,
  senderColumnTitle: string,
  actionColumnTitle: string,
}

export const InvitationsResponsesHeader: React.FC<IInvitationHeaderProps> = ({
  filterStatusData,
  setFilterStatusOption,
  filterDateData,
  setFilterDateOption,
  onDeleteAllClick,
  senderColumnTitle,
  actionColumnTitle
}) => {
  return (
    <HeaderWrapper>
      <FilterContainer filterData={filterStatusData} getOptions={setFilterStatusOption} />

      <ColumnHeaderText>{senderColumnTitle}</ColumnHeaderText>
      <ColumnHeaderText>{actionColumnTitle}</ColumnHeaderText>

      <FilterContainer filterData={filterDateData} getOptions={setFilterDateOption} />

      <DeleteAllButton text={DeleteAll} onClick={onDeleteAllClick} />
    </HeaderWrapper>
  );
};
