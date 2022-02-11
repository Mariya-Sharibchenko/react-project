import React, { useEffect, useMemo, useState } from 'react';

import { StudentList } from './StudentList';
import { IFilterProps, IStudentDetailedDataProps } from 'context';
import { sortStudentList } from './utils/sortStudentList';

export interface IStudentListContainerProps {
  studentList: IStudentDetailedDataProps[],
  onSendInvitationClick: (studentId: number) => void,
  CVInBookmarks: number[],
}

export const StudentListContainer: React.FC<IStudentListContainerProps> = ({
  studentList,
  onSendInvitationClick,
  CVInBookmarks,
}) => {
  const [ filterOption, setFilterOption ] = useState('');
  const sortedStudentList = useMemo(() => sortStudentList(filterOption, studentList), [filterOption, studentList]);
  const [ activeStudent, setActiveStudent ] = useState<IStudentDetailedDataProps>(studentList[0]);
  const [ markedCV, setMarkedCV ] = useState(CVInBookmarks);

  useEffect(() => {
    setActiveStudent(sortedStudentList[0]);
  }, [ filterOption ]);

  const setFilterData = (options: IFilterProps) => {
    const { optionsArray } = options;
    const checkedOption = optionsArray.find(({isChecked}) => isChecked);
    setFilterOption(checkedOption ? checkedOption.label : '');
  };

  const onStudentCardClick = (studentId: number) => {
    const activeStudent = sortedStudentList.find(({ id }) => id === studentId);
    setActiveStudent(activeStudent ? activeStudent : sortedStudentList[0]);
  };

  const onAddToBookmarkClick = (studentId: number) => {
    setMarkedCV(prevState => prevState.includes(studentId)
                                 ? prevState.filter(id => id !== studentId)
                                 : [...prevState, studentId]);
  };

  return (
    <StudentList
      setFilterOptions={setFilterData}
      studentList={sortedStudentList}
      onCardClick={onStudentCardClick}
      activeStudent={activeStudent}
      markedCV={markedCV}
      onAddToBookmarkClick={onAddToBookmarkClick}
      onSendInvitationClick={onSendInvitationClick}
    />
  );
};
