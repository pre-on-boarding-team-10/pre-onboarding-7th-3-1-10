export interface IFlexStyle {
  flexDirection?: 'column';
  justifyContent?:
    | 'space-between'
    | 'center'
    | 'space-around'
    | 'space-evenly'
    | 'flex-end';
  alignItems?:
    | 'space-between'
    | 'center'
    | 'space-around'
    | 'space-evenly'
    | 'flex-end';
  gap?: string;
  margin?: string;
}
