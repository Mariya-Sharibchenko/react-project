import { IResponseDataProps, ResponseStatus } from 'context';
import { StudentArray } from './studentData';

export const ResponseRomanShashkov: IResponseDataProps = {
  student: StudentArray[1],
  invitationDate: '2020-02-19',
  status: ResponseStatus.accepted,
};

export const ResponseIvanIvanov: IResponseDataProps = {
  student: StudentArray[0],
  invitationDate: '2020-02-28',
  status: ResponseStatus.rejected,
};

export const ResponseEllaSysoeva: IResponseDataProps = {
  student: StudentArray[4],
  invitationDate: '2020-06-03',
  status: ResponseStatus.accepted,
};

export const ResponseZoyaFomina: IResponseDataProps = {
  student: StudentArray[5],
  invitationDate: '2020-11-29',
  status: ResponseStatus.considering,
};

export const ResponseArcadiNikonov: IResponseDataProps = {
  student: StudentArray[2],
  invitationDate: '2020-04-06',
  status: ResponseStatus.considering,
};

export const ResponseLeonidCvetkov: IResponseDataProps = {
  student: StudentArray[3],
  invitationDate: '2020-03-16',
  status: ResponseStatus.rejected,
};

export const ResponsesArray: IResponseDataProps[] = [ResponseIvanIvanov, ResponseRomanShashkov, ResponseEllaSysoeva, ResponseLeonidCvetkov, ResponseZoyaFomina, ResponseArcadiNikonov,];
