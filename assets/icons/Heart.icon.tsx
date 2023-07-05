import Svg, { Path } from "react-native-svg";
import { StyleProps } from "./Style.props";

export const HeartIcon = ({ color = "#687684", size = 22 }: StyleProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 14" fill="none">
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M3.301 0.116975C4.20936 -0.110107 5.16825 -0.00392529 6.00114 0.412501L6.34439 0.584118C6.75885 0.791337 7.12315 1.07457 7.42092 1.41413C7.46262 1.46168 7.53738 1.46168 7.57908 1.41413C7.87685 1.07457 8.24115 0.791337 8.65561 0.584118L8.99886 0.412501C9.83175 -0.00392529 10.7906 -0.110107 11.699 0.116975C12.572 0.335201 13.3339 0.844888 13.8627 1.54996L14.0553 1.80682C14.6706 2.62707 15 3.61989 15 4.6363V4.92317C15 5.37799 14.9442 5.83129 14.8338 6.27303L14.7666 6.54171C14.5139 7.55255 14.0612 8.50474 13.4332 9.34191L13.0419 9.86374C12.7272 10.2833 12.3829 10.6803 12.0115 11.0517L11.6146 11.4486C10.6621 12.401 9.56086 13.1951 8.35236 13.7993C7.81719 14.0669 7.18281 14.0669 6.64764 13.7993C5.43914 13.1951 4.33786 12.401 3.38544 11.4486L2.98849 11.0517C2.61709 10.6803 2.27281 10.2833 1.95814 9.86374L1.56675 9.34191C0.938842 8.50474 0.486109 7.55255 0.233388 6.54171L0.166213 6.27303C0.0557751 5.83129 0 5.37799 0 4.92317V4.6363C0 3.61989 0.329438 2.62707 0.944651 1.80682L1.1373 1.54996C1.66613 0.844888 2.42805 0.335201 3.301 0.116975ZM5.42056 1.42404C4.85999 1.14377 4.22215 1.07469 3.6191 1.22544C3.03787 1.37074 2.51507 1.71404 2.14454 2.20805L1.95189 2.46491C1.48501 3.08738 1.22951 3.84931 1.22951 4.6363V4.92317C1.22951 5.29055 1.27457 5.65634 1.36356 6.01226L1.43073 6.28095C1.64855 7.15217 2.03785 7.96901 2.57399 8.68382L2.96537 9.20565C3.24739 9.58165 3.55551 9.93686 3.88731 10.2686L4.28426 10.6656C5.14673 11.528 6.14105 12.2442 7.22822 12.7878C7.40072 12.874 7.59928 12.874 7.77178 12.7878C8.85895 12.2442 9.85327 11.528 10.7157 10.6656L11.1127 10.2686C11.4445 9.93686 11.7526 9.58165 12.0346 9.20565L12.426 8.68382C12.9621 7.96901 13.3515 7.15217 13.5693 6.28095L13.6364 6.01226C13.7254 5.65634 13.7705 5.29055 13.7705 4.92317V4.6363C13.7705 3.84931 13.515 3.08738 13.0481 2.46491L12.8555 2.20805C12.4849 1.71404 11.9621 1.37074 11.3809 1.22544C10.7779 1.07469 10.14 1.14377 9.57944 1.42404L9.23619 1.59566C8.7923 1.8176 8.42422 2.18181 8.19478 2.64068C7.78499 3.46022 7.21238 3.45495 6.80522 2.64068C6.57578 2.18181 6.2077 1.8176 5.76381 1.59566L5.42056 1.42404Z"
        fill={color}
      />
    </Svg>
  );
};
