export interface IFilterProps {
  label: string,
  value: string,
  isChecked: boolean,
}

export interface IStudentDataProps {
  id: number,
  img?: string,
  firstName: string,
  lastName: string,
  position: string,
  age?: number,
  course: string,
  bestStudentMark: boolean
}

export interface IInputProps {
  placeholderText: string,
  labelText: string,
  type: 'email' | 'text' | 'password',
}
