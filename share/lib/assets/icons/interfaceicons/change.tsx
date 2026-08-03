import Svg, { Path } from "react-native-svg";

type IconChangeProps = {
  width: number;
  height: number;
  color?: string;
};

const IconChange = ({
  width = 16,
  height = 16,
  color = "#ffffff",
}: IconChangeProps) => {
  return (
    <>
      <Svg
        width={width}
        height={height}
        fill={color}
        viewBox="0 0 386.375 386.375"
      >
        <Path d="m21.05 286.875 76.5 76.5-1.9 3.8-95.6 19.2 19.1-95.6zm13.6-14.1 77.1 77.1 216.4-216.399-77.101-77.1zm340.2-238.4-23-22.9c-15.3-15.3-38.199-15.3-53.5 0l-32.5 32.5 76.5 76.5 32.5-32.5c15.3-15.3 15.3-40.2 0-53.6" />
      </Svg>
    </>
  );
};
export default IconChange;
