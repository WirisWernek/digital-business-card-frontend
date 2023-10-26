import { BaseModel } from './Base.model';

export class UserModel extends BaseModel {
  username: string;
  subtitle: string;
  profileImage: string;

  constructor() {
    super();
    this.username = '';
    this.subtitle = '';
    this.profileImage = '';
  }

  build(username: string, subtitle: string, profileImage: string) {
    this.username = username;
    this.subtitle = subtitle;
    this.profileImage = profileImage;
  }
}
