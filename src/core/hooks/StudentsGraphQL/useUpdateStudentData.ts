import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

import { updateStudentMutation } from 'core/operations';

export type UpdateStudentDataType = {
  aboutStudent: string,
};

export const useUpdateStudentData = (studentId: number, inputData: UpdateStudentDataType) => {
  const [ updateStudent, { data, loading, error }] = useMutation(updateStudentMutation, {
    variables: {
      id: studentId,
      input : inputData.aboutStudent,
    }
  });

  useEffect(() => {
    if (!loading) {
      //todo: add what to do with data
      !error && console.log(data);
    }
  }, [loading, data]);

  return [
    updateStudent
  ];
};
