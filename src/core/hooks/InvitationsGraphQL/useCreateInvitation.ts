import { useCallback, useEffect, useState } from 'react';

import { useAddNewInvitationMutation, ResponseStatus, CompanyInput } from 'core/graphql';
import { allInvitationsQuery } from 'core/operations';
import { userStateVar } from 'core/state';
import { IResponseDataProps, IStudentDetailedDataProps } from 'context';
import { useResponses } from '../ResponsesGraphQL';

export const useCreateInvitation = (currentStudent: IStudentDetailedDataProps): [() => void, boolean] => {
  const company: CompanyInput = {...userStateVar().company!};
  const date = new Date().toISOString().substr(0, 10);
  const companyResponses = useResponses(userStateVar().company!);

  const isInResponses = useCallback((): boolean => {
    return Boolean(companyResponses.find((response: IResponseDataProps) => response.student.id === currentStudent.id));
  }, [companyResponses, currentStudent]);

  const [ isInvitationSent, setIsInvitationSent ] = useState<boolean>(false);

  useEffect(() => {
    setIsInvitationSent(isInResponses());
  }, [companyResponses, currentStudent]);

  const [ createInvitation ] = useAddNewInvitationMutation({
    variables: {
      company: company,
      student: currentStudent,
      status: ResponseStatus.Considering,
      invitationDate: date,
    },
    refetchQueries: [{
      query: allInvitationsQuery
    }]
  });

  const onSendInvitation = useCallback(async () => {
    if (!isInResponses()) {
      const response = await createInvitation();

      response.data && setIsInvitationSent(isInResponses());
    }

  }, [isInResponses(), createInvitation]);

  return [
    onSendInvitation,
    isInvitationSent
  ];
};
