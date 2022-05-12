import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { StudentList } from './StudentList';
import { IFilterProps, IStudentDetailedDataProps } from 'context';
import { sortStudentList } from './utils/sortStudentList';

export interface IStudentListContainerProps {
  studentList: IStudentDetailedDataProps[],
  CVInBookmarks: string[],
  onAddToBookmarks?: (studentId: string) => void,
}

export const StudentListContainer: React.FC<IStudentListContainerProps> = ({
  studentList,
  CVInBookmarks,
  onAddToBookmarks
}) => {
  const [ filterOption, setFilterOption ] = useState('');
  const sortedStudentList = useMemo(() => sortStudentList(filterOption, studentList), [filterOption, studentList]);
  const [ activeStudent, setActiveStudent ] = useState<IStudentDetailedDataProps | null>(studentList[0]);
  const [ markedCV, setMarkedCV ] = useState(CVInBookmarks);

  useEffect(() => {
    setActiveStudent(sortedStudentList.length ? sortedStudentList[0] : null);
  }, [ filterOption, studentList ]);

  const setFilterData = useCallback((options: IFilterProps) => {
    const { optionsArray } = options;
    const checkedOption = optionsArray.find(({isChecked}) => isChecked);
    setFilterOption(checkedOption ? checkedOption.label : '');
  }, []);

  const onStudentCardClick = useCallback((studentId: string) => {
    const activeStudent = sortedStudentList.find(({ id }) => id === studentId);
    setActiveStudent(activeStudent ? activeStudent : sortedStudentList[0]);
  }, [sortedStudentList]);

  const onAddToBookmarkClick = useCallback((studentId: string) => {
    onAddToBookmarks ? onAddToBookmarks(studentId) :
    setMarkedCV(prevState => prevState.includes(studentId)
                                 ? prevState.filter(id => id !== studentId)
                                 : [...prevState, studentId]
    );
  }, []);

  return (
    <StudentList
      setFilterOptions={setFilterData}
      studentList={sortedStudentList}
      onCardClick={onStudentCardClick}
      activeStudent={activeStudent}
      markedCV={markedCV}
      onAddToBookmarkClick={onAddToBookmarkClick}
    />
  );
};
