import React, { useEffect, useState } from 'react';

import {
  ResponsesPageTitle,
  FilterByStatus,
  FilterByDate,
  IResponseDataProps,
  IStudentDetailedDataProps,
  IResponseProps
} from 'context';
import { Content, PageCover } from 'templates/default';
import { CoverWrapper, CoverTitle } from './styled';
import { ResponsesListContainer } from 'organisms';

interface IResponsesPageProps {
  studentsList: IStudentDetailedDataProps[],
  onInvitationStatusClick: () => void,
}

export const ResponsesPage: React.FC<IResponsesPageProps> = ({
  studentsList,
  onInvitationStatusClick
}) => {
  const [ responsesData, setResponsesData ] = useState<IResponseDataProps[]>([]);

  useEffect(() => {
    const fetchResponses = async () => {
      const response = await fetch('https://69dd40e2-488f-4731-b0e0-b4671a6138ae.mock.pstmn.io/responses');
      const responseJson = await response.json();

      const responsesArray: IResponseProps[] = Object.values(responseJson);

      setResponsesData(responsesArray.map((response) => {
        return {
          ...response,
          student: studentsList.find(student => student.id === response.student)!
        };
      }));
    };

    fetchResponses().catch(console.error);
  }, [ studentsList ]);

  return (
    <>
      {responsesData.length !== 0 &&
        <>
          <PageCover>
            <CoverWrapper>
              <CoverTitle>{ResponsesPageTitle}</CoverTitle>
            </CoverWrapper>
          </PageCover>

          <Content>
            <ResponsesListContainer
              filterByStatus={FilterByStatus}
              filterByDate={FilterByDate}
              responsesArray={responsesData}
              onInvitationStatusClick={onInvitationStatusClick}
            />
          </Content>
        </>
      }
    </>
  );
};
