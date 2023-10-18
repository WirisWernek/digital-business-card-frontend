export class UserModel {
  username: string;
  subtitle: string;
  profileImage: string;

  constructor() {
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
