import Svg, { Path } from "react-native-svg";
import { StyleProps } from "./Style.props";

export const MessageIcon = ({ color = "#687684", size = 22 }: StyleProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 18" fill="none">
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V16C20 17.1046 19.1046 18 18 18H2C0.895431 18 0 17.1046 0 16V2ZM2 1.5H18C18.2761 1.5 18.5 1.72386 18.5 2V2.93195L10.1387 8.50616C10.0547 8.56215 9.9453 8.56215 9.86133 8.50616L1.5 2.93195V2C1.5 1.72386 1.72386 1.5 2 1.5ZM1.5 4.73472V16C1.5 16.2761 1.72386 16.5 2 16.5H18C18.2761 16.5 18.5 16.2761 18.5 16V4.73472L10.9707 9.75424C10.3829 10.1461 9.6171 10.1461 9.02927 9.75424L1.5 4.73472Z"
        fill={color}
      />
    </Svg>
  );
};
