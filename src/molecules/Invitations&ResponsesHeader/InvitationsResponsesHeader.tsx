import React from 'react';

import { HeaderWrapper, ColumnHeaderText, DeleteAllButton } from './styled';
import { DeleteButton, FilterContainer } from 'atoms';
import { DeleteAll, IFilterProps, WindowSize } from 'context';
import { useWindowSize } from 'utils/getWindowSize';

const { tablet, laptop } = WindowSize;

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
  const windowSize = useWindowSize();

  return (
    <HeaderWrapper>
      { windowSize && windowSize.width > tablet ?
        <>
          <FilterContainer
            filterData={filterStatusData}
            getOptions={setFilterStatusOption}
          />

          { windowSize && windowSize.width > laptop && <ColumnHeaderText>{senderColumnTitle}</ColumnHeaderText> }
          <ColumnHeaderText>{actionColumnTitle}</ColumnHeaderText>

          <FilterContainer
            filterData={filterDateData}
            getOptions={setFilterDateOption}
          />
        </> :

        <FilterContainer
          filterData={filterStatusData}
          getOptions={setFilterStatusOption}
        />
      }

      {windowSize && windowSize.width > tablet ?
       <DeleteAllButton
         text={DeleteAll}
         onClick={onDeleteAllClick}
       /> :

       <DeleteButton onClick={onDeleteAllClick} />
      }
    </HeaderWrapper>
  );
};
