import { useEffect, useState } from 'react';

import { ICompanyDataProps, IResponseDataProps, IResponseProps, IStudentDetailedDataProps } from 'context';

export const useGetResponses = (user: ICompanyDataProps, studentsList: IStudentDetailedDataProps[]): IResponseDataProps[] => {
  const [ responsesData, setResponsesData ] = useState<IResponseDataProps[]>([]);

  const fetchResponses = async () => {
    const response = await fetch(`http://localhost:3002/responses?userId=${user.id}`);
    const responseJson = await response.json();

    const responsesArray: IResponseProps[] = Object.values(responseJson);

    setResponsesData(responsesArray.map((response) => {
      return {
        ...response,
        student: studentsList.find(student => student.id === response.student)!
      };
    }));
  };

  useEffect(() => {
    fetchResponses().catch(console.error);
  }, [ studentsList ]);

  return responsesData;
};
