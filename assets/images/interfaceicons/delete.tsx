import Svg, { Path } from "react-native-svg";

type IconDeleteProps = {
  width: number;
  height: number;
  color?: string;
};

const IconDelete = ({
  width = 16,
  height = 16,
  color = "#ffff",
}: IconDeleteProps) => {
  return (
    <>
      <Svg width={width} height={height} stroke={color} viewBox="0 0 32 32">
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m7 7 18 18M7 25 25 7"
        />
      </Svg>
    </>
  );
};
export default IconDelete;
