import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, FeGaussianBlur,Filter } from "react-native-svg";

interface CardBgSvgProps {
  style?: object; // Add a style prop to accept styles
}

const CardBgSvg: React.FC<CardBgSvgProps> = ({ style, ...props }) => {
  return (
    <Svg
      width={390}
      height={358}
      viewBox="20 20 350 300"
      fill="none"

      style={style} 
      {...props}
    >
      <G filter="url(#blurEffect)" shapeRendering="crispEdges">
        
        <Path
          d="M20 60c0-11.046 8.954-20 20-20h310c11.046 0 20 8.954 20 20v162.156c0 10.167-7.628 18.716-17.729 19.87l-310 35.429C30.403 278.811 20 269.529 20 257.584V60z"
          fill="url(#paint0_linear_1_2449)"
          fillOpacity={0.87}
        />
        <Path
          d="M40 41h310c10.493 0 19 8.507 19 19v162.156c0 9.658-7.246 17.78-16.843 18.877l-310 35.428C30.883 277.75 21 268.932 21 257.584V60c0-10.493 8.507-19 19-19z"
          stroke="url(#paint1_linear_1_2449)"
          strokeOpacity={0.2}
          strokeWidth={2}
        />
      </G>
      <Defs>
      
        <LinearGradient
          id="paint0_linear_1_2449"
          x1={146.212}
          y1={103.734}
          x2={164.149}
          y2={251.851}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#353F54" />
          <Stop offset={1} stopColor="#222834" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_2449"
          x1={59.2424}
          y1={48.9627}
          x2={191.249}
          y2={237.494}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={0.844522} />
          <Stop offset={1} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default CardBgSvg;
