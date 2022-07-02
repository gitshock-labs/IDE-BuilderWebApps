import * as React from "react";

import { IconProps } from "..";
import "../index.css";

export const Muted: React.FunctionComponent<IconProps> = props => {
  const color = props.color ? props.color : "#F24822";

  return (
    <svg width="9" height="11" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.33307 1.25234C5.0948 1.09295 4.80831 1 4.50012 1C3.67169 1 3.00012 1.67157 3.00012 2.5V3.58529L3.40343 3.18198L5.33307 1.25234ZM2.47388 8.35417L3.19521 7.63284C3.57506 7.86573 4.02191 8 4.50012 8C5.88083 8.00001 7.00012 6.88074 7.00012 5.50003V5H8.00012V5.50003C8.00012 7.26326 6.69626 8.72196 5.00012 8.96456V10H6.00012V11H4.50012H3.00012V10H4.00012V8.96456C3.43702 8.88401 2.91715 8.66943 2.47388 8.35417ZM3.93724 6.89081L6.00012 4.82793V5.5C6.00012 6.32843 5.32855 7 4.50012 7C4.30105 7 4.11105 6.96122 3.93724 6.89081Z"
        fill={color}
      ></path>
    </svg>
  );
};
