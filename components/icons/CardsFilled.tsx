import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  size?: number;
  color?: string;
}

const CardsFilled: React.FC<IconProps> = ({
  size = 24,
  color = "#292D32",
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
    <Path
      d="M13.89 2.87819L9.19999 2.13819C5.28999 1.52819 3.47999 2.84819 2.85999 6.75819L2.11999 11.4482C1.71999 14.0082 2.13999 15.6682 3.58999 16.6782C4.34999 17.2182 5.38999 17.5782 6.73999 17.7882L11.43 18.5282C15.34 19.1382 17.15 17.8182 17.77 13.9082L18.5 9.21819C18.62 8.44819 18.67 7.75819 18.63 7.14819C18.5 4.64819 17.03 3.36819 13.89 2.87819ZM8.23999 9.34819C7.06999 9.34819 6.11999 8.39819 6.11999 7.23819C6.11999 6.06819 7.06999 5.11819 8.23999 5.11819C9.39999 5.11819 10.35 6.06819 10.35 7.23819C10.35 8.39819 9.39999 9.34819 8.23999 9.34819Z"
      fill={color}
    />
    <Path
      d="M20.5006 13.4686L19.0006 17.9786C17.7506 21.7386 15.7506 22.7386 11.9906 21.4886L7.48063 19.9886C6.07063 19.5186 5.05063 18.9386 4.39062 18.2086C5.02062 18.4586 5.75063 18.6486 6.58063 18.7786L11.2806 19.5186C11.9206 19.6186 12.5206 19.6686 13.0806 19.6686C16.3806 19.6686 18.1506 17.8886 18.7606 14.0586L19.4906 9.36859C19.5906 8.78859 19.6306 8.27859 19.6306 7.80859C21.1506 9.05859 21.3706 10.8386 20.5006 13.4686Z"
      fill={color}
    />
  </Svg>
);

export default CardsFilled;