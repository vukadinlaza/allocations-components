export interface IAvatarProps {
  email?: string;
  menuItems?: IMenuItem[];
  className?: string;
}

export interface IMenuItem {
  title: string;
  action: Function;
}
