import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

// son rôle de renvoyer les couleurs mais qui corresponds au thème qui choisis par les utilisateurs
export function useThemeColors() {
  const theme = useColorScheme() ?? "light"; // useColorScheme va nous donner de la valeur soit light soit dark
  return Colors[theme];
}
