export interface ButtonProp {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
