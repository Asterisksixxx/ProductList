import Svg, { Path } from "react-native-svg";

type IconFilterProps = {
  width: number;
  height: number;
  color?: string;
};

const IconFilter = ({
  width = 16,
  height = 16,
  color = "#ffff",
}: IconFilterProps) => {
  return (
    <Svg
      width={width}
      height={height}
      stroke={color}
      fill={color}
      viewBox="0 0 24 24"
    >
      <Path d="M22,4.5a1,1,0,0,1-1,1H12a1,1,0,0,1,0-2h9A1,1,0,0,1,22,4.5Zm-1,4H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm0,5H16a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm0,5H18a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2ZM6,2A1,1,0,0,0,5,3V18.586L3.707,17.293a1,1,0,0,0-1.414,1.414l3,3a1,1,0,0,0,1.416,0l3-3a1,1,0,0,0-1.414-1.414L7,18.586V3A1,1,0,0,0,6,2Z" />
    </Svg>
  );
};
export default IconFilter;
