import { css } from 'styled-components';
import { IFlexStyle } from '../types/style';

const MininFlexStyle = (props: IFlexStyle) => css`
  display: flex;
  flex-direction: ${props.flexDirection};
  justify-content: ${props.justifyContent};
  align-items: ${props.alignItems};
  gap: ${props.gap};
  margin: ${props.margin};
`;

export { MininFlexStyle };
