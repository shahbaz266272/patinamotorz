import { Image, StatusBar, View } from "react-native";
import React from "react";
import BottomSheetMenu from "./BottomNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HeaderComp = () => {
  return (
      <View>
        <StatusBar backgroundColor="#1C3039" />
        <View>
          <View style={{ backgroundColor: "#1C3039", height: 140 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
                    {/* <GestureHandlerRootView>

              <BottomSheetMenu />
              </GestureHandlerRootView> */}
              <Image
                source={require("@/assets/images/menubar.png")}
                style={{ marginTop: 60 }}
              />
              <Image
                source={require("@/assets/images/logo.png")}
                style={{ marginTop: 60 }}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  gap: 15,
                }}
              >
                <Image
                  source={require("@/assets/images/search.png")}
                  style={{ marginTop: 60 }}
                />
                <Image
                  source={require("@/assets/images/bell.png")}
                  style={{ marginTop: 60 }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
   );
};

export default HeaderComp;
