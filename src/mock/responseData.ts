import { IResponseDataProps, ResponseStatus } from 'context';
import { StudentArray } from './studentData';

export const ResponseRomanShashkov: IResponseDataProps = {
  id: '5',
  student: StudentArray[1],
  invitationDate: '2020-02-19',
  status: ResponseStatus.Accepted,
};

export const ResponseIvanIvanov: IResponseDataProps = {
  id: '4',
  student: StudentArray[0],
  invitationDate: '2020-02-28',
  status: ResponseStatus.Rejected,
};

export const ResponseEllaSysoeva: IResponseDataProps = {
  id: '3',
  student: StudentArray[4],
  invitationDate: '2020-06-03',
  status: ResponseStatus.Accepted,
};

export const ResponseZoyaFomina: IResponseDataProps = {
  id: '2',
  student: StudentArray[5],
  invitationDate: '2020-11-29',
  status: ResponseStatus.Considering,
};

export const ResponseArcadiNikonov: IResponseDataProps = {
  id: '1',
  student: StudentArray[2],
  invitationDate: '2020-04-06',
  status: ResponseStatus.Considering,
};

export const ResponseLeonidCvetkov: IResponseDataProps = {
  id: '6',
  student: StudentArray[3],
  invitationDate: '2020-03-16',
  status: ResponseStatus.Rejected,
};

export const ResponsesArray: IResponseDataProps[] = [ResponseIvanIvanov, ResponseRomanShashkov, ResponseEllaSysoeva, ResponseLeonidCvetkov, ResponseZoyaFomina, ResponseArcadiNikonov,];
