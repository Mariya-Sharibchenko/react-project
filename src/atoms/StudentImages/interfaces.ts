export interface IStudentImageProps {
  userPicture?: string | null | undefined,
  firstName: string,
  lastName: string,
  className?: string,
  onImageClick?: () => void,
}
