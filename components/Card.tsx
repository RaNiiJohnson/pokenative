import { useThemeColors } from "@/hooks/useThemeColors";
import { View, ViewProps, ViewStyle } from "react-native";
import { Shadows } from "../constants/Shadows";

type Props = ViewProps;

export default function Card({ style, ...rest }: Props) {
  // on peut utiliser {...rest} pour passer les props à la vue
  const colors = useThemeColors();
  return (
    <View
      style={[style, styles, { backgroundColor: colors.grayWhite }]}
      {...rest}
    />
  );
}

const styles = {
  borderRadius: 8,
  ...Shadows.dp2,
} satisfies ViewStyle;
