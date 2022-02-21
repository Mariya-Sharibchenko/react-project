import React, { useMemo, useState } from 'react';

import { ResponsesList } from './ResponsesList';
import { sortByInvitationDate } from 'utils/sortByInvitationDate';
import {
  AllResponseStatusType,
  DateFilter,
  IFilterProps,
  IResponseDataProps,
  ResponseStatus
} from 'context';

export interface IResponsesListContainerProps {
  filterByStatus: IFilterProps,
  filterByDate: IFilterProps,
  responsesArray: IResponseDataProps[],
  onInvitationStatusClick: () => void,
}

export const ResponsesListContainer: React.FC<IResponsesListContainerProps> = ({
  filterByStatus,
  filterByDate,
  responsesArray,
  onInvitationStatusClick
}) => {
  const firstStatusValue = filterByStatus.optionsArray.find(option => option.isChecked)?.value as AllResponseStatusType | ResponseStatus;
  const firstDateValue = filterByDate.optionsArray.find(option => option.isChecked)?.value as DateFilter;

  const [ responsesList, setResponsesList ] = useState<IResponseDataProps[]>(responsesArray);
  const [ selectedStatusValue, setFilteredStatusValue ] = useState<AllResponseStatusType | ResponseStatus>(firstStatusValue);
  const [ selectedDateValue, setFilteredDateValue ] = useState<DateFilter>(firstDateValue);

  const sortedResponsesList = useMemo(() =>
    sortByInvitationDate<IResponseDataProps>(responsesList, selectedDateValue), [responsesList, selectedDateValue]
  );

  const setFilterStatus = (filterData: IFilterProps) => {
    const statusValue = filterData.optionsArray.find(option => option.isChecked)?.value as AllResponseStatusType | ResponseStatus;
    setFilteredStatusValue(statusValue);
  };

  const setFilterDate = (filterData: IFilterProps) => {
    const dateValue = filterData.optionsArray.find(option => option.isChecked)?.value as DateFilter;
    setFilteredDateValue(dateValue);
  };

  const onDeleteResponseClick = (studentId: number) => {
    setResponsesList(prevState => prevState.filter((response) =>
      response.student.id !== studentId
    ));
  };

  const onDeleteAllClick = () => {
    setResponsesList([]);
  };

  return (
    <ResponsesList
      filterByDate={filterByDate}
      filterByStatus={filterByStatus}
      responsesList={sortedResponsesList}
      onStatusCheckboxClick={onInvitationStatusClick}
      selectedStatus={selectedStatusValue}
      onDeleteClick={onDeleteResponseClick}
      onDeleteAllResponsesClick={onDeleteAllClick}
      setFilterStatusOption={setFilterStatus}
      setFilterDateOption={setFilterDate}
    />
  );
};
