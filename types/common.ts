import { FC } from 'react';
import { ACTION_TYPES, ICON_TYPES } from 'variables';

export interface ITabHeader {
  name: string;
  id: string;
  active?: boolean;
}

export interface ITabBody {
  [tabId: string]: FC;
}

export type TAction = typeof ACTION_TYPES.delete | typeof ACTION_TYPES.markAsRead;

export type TIcon =
  | typeof ICON_TYPES.delete
  | typeof ICON_TYPES.save
  | typeof ICON_TYPES.home
  | typeof ICON_TYPES.user
  | typeof ICON_TYPES.menuList
  | typeof ICON_TYPES.notification
  | typeof ICON_TYPES.pen;

export interface IIcon {
  [name: TIcon]: FC<{ color?: string }>;
}

export type TClassName = string | undefined;
