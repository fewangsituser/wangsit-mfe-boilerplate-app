export interface Member {
  _id: string;
  key: number;
  profilePictureBig?: string;
  profilePictureMedium?: string;
  profilePictureSmall?: string;
  nickName: string;
  teams: string[];
  email: string;
}
