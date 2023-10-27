import { ActionButtonModel } from './ActionButton.model';
import { BaseModel } from './Base.model';
import { LinkModel } from './Link.model';
import { OptionalButtonsModel } from './OptionalButtons.model';

export interface UserModel extends BaseModel {
  username: string;
  subtitle: string;
  profileImage: string;

  actionsButtons: ActionButtonModel[];
  socialLinks: LinkModel[];
  projectsLinks: LinkModel[];
  optionalButtons: OptionalButtonsModel[];
}
