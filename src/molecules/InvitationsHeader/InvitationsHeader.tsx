import React from 'react';

import { InvitationsHeaderWrapper, ColumnHeaderText, DeleteAllInvitationsButton } from './styled';
import { FilterContainer } from 'atoms';
import { DeleteAll, IFilterProps, InvitationsHeaderText } from 'context';

export interface IInvitationHeaderProps {
  filterStatusData: IFilterProps,
  setFilterStatusOption: (options: IFilterProps) => void,
  filterDateData: IFilterProps,
  setFilterDateOption: (options: IFilterProps) => void,
  onDeleteAllInvitationsClick: () => void,
}

export const InvitationsHeader: React.FC<IInvitationHeaderProps> = ({
  filterStatusData,
  setFilterStatusOption,
  filterDateData,
  setFilterDateOption,
  onDeleteAllInvitationsClick
}) => {
  return (
    <InvitationsHeaderWrapper>
      <FilterContainer filterData={filterStatusData} getOptions={setFilterStatusOption} />

      <ColumnHeaderText>{InvitationsHeaderText.company}</ColumnHeaderText>
      <ColumnHeaderText>{InvitationsHeaderText.action}</ColumnHeaderText>

      <FilterContainer filterData={filterDateData} getOptions={setFilterDateOption} />

      <DeleteAllInvitationsButton text={DeleteAll} onClick={onDeleteAllInvitationsClick} />
    </InvitationsHeaderWrapper>
  );
};
