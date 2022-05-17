import { useCallback, useEffect, useState } from 'react';

import { useAddNewInvitationMutation, ResponseStatus, CompanyInput } from 'core/graphql';
import { allInvitationsQuery } from 'core/operations';
import { userStateVar } from 'core/state';
import { IResponseDataProps, IStudentDetailedDataProps } from 'context';
import { useResponses } from '../ResponsesGraphQL';

export const useCreateInvitation = (currentStudent: IStudentDetailedDataProps): [() => void, boolean] => {
  const company: CompanyInput = Object.create(userStateVar().user!);
  const date = new Date().toISOString().substr(0, 10);
  const companyResponses = useResponses(userStateVar());
  const [ isInvitationSent, setIsInvitationSent ] = useState<boolean>(false);

  useEffect(() => {
    setIsInvitationSent(Boolean(companyResponses.find((response: IResponseDataProps) => response.student.id === currentStudent.id)));
  }, [currentStudent]);

  const [ createInvitation ] = useAddNewInvitationMutation({
    variables: {
      input: {
        company: company,
        student: currentStudent,
        status: ResponseStatus.Considering,
        invitationDate: date,
      }
    },
    refetchQueries: [allInvitationsQuery]
  });

  const onSendInvitation = useCallback(async () => {
    const response = await createInvitation();

    response.data &&
    setIsInvitationSent(Boolean(companyResponses.find((response: IResponseDataProps) =>
      response.student.id === currentStudent.id))
    );
  }, [currentStudent, companyResponses]);

  return [
    onSendInvitation,
    isInvitationSent
  ];
};
