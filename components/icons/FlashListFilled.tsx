import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  size?: number;
  color?: string;
}

const FlashListFilled: React.FC<IconProps> = ({
  size = 24,
  color = "#292D32",
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
    <Path
      d="M9.31994 13.2814H12.4099V20.4814C12.4099 21.5414 13.7299 22.0414 14.4299 21.2414L21.9999 12.6414C22.6599 11.8914 22.1299 10.7214 21.1299 10.7214H18.0399V3.52143C18.0399 2.46143 16.7199 1.96143 16.0199 2.76143L8.44994 11.3614C7.79994 12.1114 8.32994 13.2814 9.31994 13.2814Z"
      fill={color}
    />
    <Path
      d="M8.5 4.75H1.5C1.09 4.75 0.75 4.41 0.75 4C0.75 3.59 1.09 3.25 1.5 3.25H8.5C8.91 3.25 9.25 3.59 9.25 4C9.25 4.41 8.91 4.75 8.5 4.75Z"
      fill={color}
    />
    <Path
      d="M7.5 20.75H1.5C1.09 20.75 0.75 20.41 0.75 20C0.75 19.59 1.09 19.25 1.5 19.25H7.5C7.91 19.25 8.25 19.59 8.25 20C8.25 20.41 7.91 20.75 7.5 20.75Z"
      fill={color}
    />
    <Path
      d="M4.5 12.75H1.5C1.09 12.75 0.75 12.41 0.75 12C0.75 11.59 1.09 11.25 1.5 11.25H4.5C4.91 11.25 5.25 11.59 5.25 12C5.25 12.41 4.91 12.75 4.5 12.75Z"
      fill={color}
    />
  </Svg>
);

export default FlashListFilled;
