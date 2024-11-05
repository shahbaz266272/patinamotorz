 import BottomSheetProvider from "@/components/BottomNavigation";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  return (
     <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="allUsersMenu" options={{ headerShown: false }} />
    </Stack>
   );
};

export default Layout;
