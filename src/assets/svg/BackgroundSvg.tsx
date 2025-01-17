import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface BackgroundSvgProps {
    style?: object;
}

const BackgroundSvg:React.FC<BackgroundSvgProps> = ({style, ...props}) => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 390 695"
    preserveAspectRatio="xMidYMid slice"
    style={style}
    {...props}
  >
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="168.5"
        y1="0.500004"
        x2="372.499"
        y2="720.5"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#37B6E9" />
        <Stop offset="1" stopColor="#4B4CED" />
      </LinearGradient>
    </Defs>
    <Path
      d="M242.5 167.5L322 0L393.5 59.5V720.5L-20 705L242.5 167.5Z"
      fill="url(#paint0_linear)"
    />
  </Svg>
);

export default BackgroundSvg;
