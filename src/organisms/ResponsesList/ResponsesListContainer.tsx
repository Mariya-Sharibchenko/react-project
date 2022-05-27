import React, { useCallback, useMemo, useState } from 'react';

import { ResponsesList } from './ResponsesList';
import { sortByInvitationDate } from 'utils/sortByInvitationDate';
import {
  AllResponseStatusType,
  DateFilter,
  IFilterProps,
  IResponseDataProps,
  ResponseStatus
} from 'context';
import { IRemoveResponse, useRemoveResponse, useResponses } from 'core/hooks';
import { userStateVar } from 'core/state';

export interface IResponsesListContainerProps {
  filterByStatus: IFilterProps,
  filterByDate: IFilterProps,
  onInvitationStatusClick: () => void,
}

export const ResponsesListContainer: React.FC<IResponsesListContainerProps> = ({
  filterByStatus,
  filterByDate,
  onInvitationStatusClick
}) => {
  const responses = useResponses(userStateVar().company!);

  const firstStatusValue = filterByStatus.optionsArray.find(option => option.isChecked)?.value as AllResponseStatusType | ResponseStatus;
  const firstDateValue = filterByDate.optionsArray.find(option => option.isChecked)?.value as DateFilter;

  const [ onDeleteResponse, onDeleteAllResponses ] = useRemoveResponse();

  const [ selectedStatusValue, setFilteredStatusValue ] = useState<AllResponseStatusType | ResponseStatus>(firstStatusValue);
  const [ selectedDateValue, setFilteredDateValue ] = useState<DateFilter>(firstDateValue);

  const sortedResponsesList = useMemo(() =>
    sortByInvitationDate<IResponseDataProps>(responses, selectedDateValue), [responses, selectedDateValue]
  );

  const setFilterStatus = useCallback((filterData: IFilterProps) => {
    const statusValue = filterData.optionsArray.find(option => option.isChecked)?.value as AllResponseStatusType | ResponseStatus;
    setFilteredStatusValue(statusValue);
  }, []);

  const setFilterDate = useCallback((filterData: IFilterProps) => {
    const dateValue = filterData.optionsArray.find(option => option.isChecked)?.value as DateFilter;
    setFilteredDateValue(dateValue);
  }, []);

  const onDeleteResponseClick = useCallback((studentId: string) => {
    const props: IRemoveResponse = { responses, studentId };
    onDeleteResponse(props);
  }, [ responses ]);

  const onDeleteAllClick = useCallback(() => {
    onDeleteAllResponses(responses);
  }, [ responses ]);

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
