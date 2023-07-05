import Svg, { Path } from "react-native-svg";
import { StyleProps } from "./Style.props";

export const TwitterIcon = ({ color = "#687684", size = 22 }: StyleProps) => {
  return (
    <Svg width="27" height="22" viewBox="0 0 27 22" fill="none">
      <Path
        d="M8.49314 22C5.48199 22.0029 2.53361 21.1373 0 19.5067C0.438874 19.5577 0.880351 19.583 1.32217 19.5824C3.81686 19.5864 6.24044 18.7497 8.20342 17.207C7.04711 17.1849 5.92659 16.8012 4.99851 16.1097C4.07043 15.4182 3.38118 14.4533 3.02712 13.35C3.37022 13.4166 3.71888 13.4502 4.06835 13.4503C4.5618 13.4504 5.05306 13.3847 5.52923 13.255C4.27504 13.0012 3.1471 12.3204 2.33676 11.3281C1.52642 10.3358 1.08358 9.09317 1.08337 7.81097C1.08337 7.78634 1.08337 7.76346 1.08337 7.74059C1.85242 8.16958 2.71277 8.40789 3.59251 8.43561C2.41938 7.65031 1.58919 6.44632 1.2711 5.06896C0.953014 3.69161 1.17096 2.24454 1.88054 1.02262C3.27055 2.73802 5.00492 4.1414 6.97113 5.14173C8.93733 6.14205 11.0914 6.71695 13.2937 6.82914C13.0133 5.63696 13.134 4.38535 13.637 3.26903C14.1399 2.15271 14.997 1.23427 16.0748 0.656603C17.1526 0.0789393 18.3907 -0.125558 19.5965 0.0749264C20.8023 0.275411 21.9081 0.869635 22.742 1.76515C23.9803 1.51846 25.1678 1.0627 26.2538 0.417335C25.84 1.70316 24.9747 2.79481 23.8184 3.48951C24.9167 3.35649 25.989 3.05996 27 2.60974C26.2558 3.72503 25.3194 4.69859 24.2345 5.48484C24.2468 5.72238 24.2521 5.96168 24.2521 6.20274C24.2521 13.5383 18.6772 22 8.48612 22"
        fill="#4C9EEB"
      />
    </Svg>
  );
};
