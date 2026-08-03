import Svg, { Circle, Path } from "react-native-svg";

type IconSettingProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconSetting = ({
  width = 15,
  height = 15,
  color = "#0000",
}: IconSettingProps) => {
  return (
    <Svg viewBox="0 0 256 256" fill={color}>
      <Circle cx="128" cy="128" r="24" opacity=".1" />
      <Circle cx="48" cy="128" r="24" opacity=".1" />
      <Circle cx="208" cy="128" r="24" opacity=".1" />
      <Path d="M128 96a32 32 0 1 0 32 32 32.036 32.036 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16.02 16.02 0 0 1-16 16M48 96a32 32 0 1 0 32 32 32.036 32.036 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16.02 16.02 0 0 1-16 16m160-48a32 32 0 1 0 32 32 32.036 32.036 0 0 0-32-32m0 48a16 16 0 1 1 16-16 16.02 16.02 0 0 1-16 16" />
    </Svg>
  );
};
export default IconSetting;
