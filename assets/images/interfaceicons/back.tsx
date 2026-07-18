import Svg, { Path } from "react-native-svg";

type IconBackProps = {
  width: number;
  height: number;
  color?: string;
  onPress?: () => void;
};

const IconBack = ({
  width = 16,
  height = 16,
  color = "#ffff",
  onPress,
}: IconBackProps) => {
  return (
    <>
      <Svg width={width} height={height} viewBox="0 0 14 14">
        <Path
          fill={color}
          d="m10.938 3 2.983-3H4.973v9l2.982-3c1.492 1 1.988 2 1.988 3 0 1.5-.993 3-2.982 3C4.973 12 2.983 11.5 0 9c0 .5 1.492 5 6.961 5 4.475 0 6.464-2 6.961-5 .497-2.5-1.49-5-2.984-6"
        />
      </Svg>
    </>
  );
};
export default IconBack;
