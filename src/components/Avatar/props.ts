export interface IAvatarProps {
  email: string;
  menuItems: IMenuItem[];
}

export interface IMenuItem {
  title: string;
  action: Function;
}
