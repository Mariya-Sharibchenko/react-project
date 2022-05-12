import React from 'react';

import { ResponsesArrayWrapper, ResponsesListHeader, ResponsesListWrapper, ResponsesCardWrapper } from './styled';
import { InvitationsResponsesHeader, ResponseCard } from 'molecules';
import {
  AllResponseStatusType,
  IFilterProps,
  ResponseStatus,
  IResponseDataProps,
  AllResponseStatus,
  ResponsesHeaderText
} from 'context';

export interface IResponsesListProps {
  responsesList: IResponseDataProps[],
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  filterByStatus: IFilterProps,
  filterByDate: IFilterProps,
  selectedStatus: ResponseStatus | AllResponseStatusType,
  onDeleteClick: (studentId: string) => void,
  onDeleteAllResponsesClick: () => void,
  setFilterStatusOption: (options: IFilterProps) => void,
  setFilterDateOption: (options: IFilterProps) => void,
}

export const ResponsesList: React.FC<IResponsesListProps> = ({
  responsesList,
  filterByDate,
  filterByStatus,
  setFilterDateOption,
  setFilterStatusOption,
  onDeleteClick,
  onDeleteAllResponsesClick,
  onStatusCheckboxClick,
  selectedStatus
}) => {
  return (
    <ResponsesListWrapper>
      <ResponsesListHeader>
        <InvitationsResponsesHeader
          filterStatusData={filterByStatus}
          setFilterStatusOption={setFilterStatusOption}
          filterDateData={filterByDate}
          setFilterDateOption={setFilterDateOption}
          onDeleteAllClick={onDeleteAllResponsesClick}
          senderColumnTitle={ResponsesHeaderText.student}
          actionColumnTitle={ResponsesHeaderText.action}
        />
      </ResponsesListHeader>

      <ResponsesArrayWrapper>
        {responsesList.map(({student, status, invitationDate}) =>
          <ResponsesCardWrapper key={student.id}>
            <ResponseCard
              student={student}
              status={status}
              invitationDate={invitationDate}
              onStatusCheckboxClick={onStatusCheckboxClick}
              isStatusChecked={selectedStatus === AllResponseStatus || status === selectedStatus}
              onDeleteClick={onDeleteClick}
            />
          </ResponsesCardWrapper>
        )}
      </ResponsesArrayWrapper>
    </ResponsesListWrapper>
  );
};
