import {
  DeleteIcon,
  EyeIcon,
  GoogleIcon,
  HomeIcon,
  MenuListIcon,
  NotificationIcon,
  PenIcon,
  SaveIcon,
  SearchIcon,
  TelegramIcon,
  UserIcon,
} from 'assets';
import { IIcon } from 'types';

export const ICON_TYPES = {
  delete: 'delete',
  save: 'save',
  home: 'gome',
  user: 'user',
  notification: 'notification',
  menuList: 'menuList',
  pen: 'pen',
  search: 'search',
  eye: 'eye',
  telegram: 'telegram',
  google: 'google',
};

export const ICONS: IIcon = {
  [ICON_TYPES.delete]: DeleteIcon,
  [ICON_TYPES.save]: SaveIcon,
  [ICON_TYPES.home]: HomeIcon,
  [ICON_TYPES.user]: UserIcon,
  [ICON_TYPES.notification]: NotificationIcon,
  [ICON_TYPES.menuList]: MenuListIcon,
  [ICON_TYPES.pen]: PenIcon,
  [ICON_TYPES.search]: SearchIcon,
  [ICON_TYPES.eye]: EyeIcon,
  [ICON_TYPES.telegram]: TelegramIcon,
  [ICON_TYPES.google]: GoogleIcon,
};
