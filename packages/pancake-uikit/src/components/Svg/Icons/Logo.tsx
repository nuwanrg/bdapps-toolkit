import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        fill="#22B573"
        d="M305.02,427.9H188.07c-9.39,0-17.08-7.68-17.08-17.08V293.87c0-9.39,7.69-17.08,17.08-17.08h116.95
			c9.39,0,17.08,7.69,17.08,17.08v116.95C322.1,420.21,314.42,427.9,305.02,427.9z"
      />
      <path
        fill="#29ABE2"
        d="M244.08,365.77H124.79c-8.75,0-15.9-7.16-15.9-15.9V230.57c0-8.75,7.16-15.9,15.9-15.9h119.29
			c8.75,0,15.9,7.16,15.9,15.9v119.29C259.99,358.61,252.83,365.77,244.08,365.77z"
      />
      <path
        fill="#FCEE21"
        d="M306.05,266.21H187.04c-8.83,0-16.05-7.22-16.05-16.05V131.15c0-8.83,7.22-16.05,16.05-16.05h119.01
			c8.83,0,16.05,7.22,16.05,16.05v119.01C322.1,258.99,314.88,266.21,306.05,266.21z"
      />
    </Svg>
  );
};

export default Icon;
