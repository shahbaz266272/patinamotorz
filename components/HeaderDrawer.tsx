import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";
// import { useBottomSheet } from "./BottomNavigation";

const HeaderCompDrawer = () => {
  // const { openBottomSheet } = useBottomSheet();

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
            <TouchableOpacity onPress={() => router.push("/(root)/(tabs)/home")}>
              <Image
                source={require("@/assets/images/cross.png")}
                style={{ marginTop: 60 }}
              />
            </TouchableOpacity>
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

export default HeaderCompDrawer;
