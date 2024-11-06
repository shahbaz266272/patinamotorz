import { Tabs } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Svg, Path } from "react-native-svg";
import { height, scale } from "react-native-size-scaling";
import { getPathDown } from "@/components/curve";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetProvider from "@/components/BottomNavigation";
 
export default function TabLayout() {

const screenWidth = Dimensions.get('window').width
  const [maxWidth, setMaxWidth] = useState(Dimensions.get("window").width + 20);
  const colorScheme = useColorScheme();
  const translation = useRef(new Animated.Value(0)).current;
  const returnpathDown = getPathDown(maxWidth, 60, 50);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translation, {
          toValue: 60,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(translation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    );
    animation.start();

    return () => animation.stop();
  }, [translation]);

  return (
       <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#1c3039",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0,
            position: "absolute",
            elevation: 0,
            ...(Platform.OS === "android" && { paddingBottom: 13 }), // Only add paddingBottom on Android
            // paddingBottom: Platform.OS === "android" ? 13 : 0,
          },
          tabBarShowLabel: true,
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ alignItems: "flex-start" }}>
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color="white"
                  style={{
                    position: "relative",
                    bottom: Platform.OS === "android" ? 5 : 0,
                  }}
                />
                {focused && (
                  <AntDesign
                    name="minus"
                    size={24}
                    color="white"
                    style={{
                      position: "absolute",
                      top: Platform.OS === "android" ? 30 : 33,
                    }}
                  />
                )}
              </View>
            ),
          }}
        />

        {/* Notification Tab */}
        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ alignItems: "center" }}>
                <Ionicons
                  name={focused ? "notifications" : "notifications-outline"}
                  size={24}
                  color="white"
                  style={{
                    position: "relative",
                    bottom: Platform.OS === "android" ? 5 : 0,
                  }}
                />
                {focused && (
                  <AntDesign
                    name="minus"
                    size={24}
                    color="white"
                    style={{
                      position: "absolute",
                      top: Platform.OS === "android" ? 30 : 33,
                    }}
                  />
                )}
              </View>
            ),
          }}
        />

        {/* Sell Car Tab */}
        <Tabs.Screen
          name="sellcar"
          options={{
            headerShown: false,
            unmountOnBlur: false,
            tabBarItemStyle: {
              margin: 0,
              backgroundColor: "white",
              zIndex: -50,
            },
            title: "Sell Car",
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  width: 50,
                  backgroundColor: "#1c3039",
                  borderRadius: 30,
                  overflow: "hidden",
                  marginTop: 60,
                }}
              >
                {/* <AntDesign name="qrcode" size={30} color="white" /> */}
                <Image source={require("@/assets/images/car.png")} />

                {focused && (
                  <AntDesign
                    name="minus"
                    size={24}
                    color="white"
                    style={{
                      position: "absolute",
                      top: Platform.OS === "android" ? 30 : 33,
                    }}
                  />
                )}

                <Animated.View
                  style={[
                    {
                      position: "absolute",
                      right: 0,
                      width: 60,
                      height: 1,
                      backgroundColor: "white",
                    },
                    { top: translation },
                  ]}
                ></Animated.View>
              </View>
            ),
            tabBarLabel: () => (
              <View style={{ borderTopLeftRadius: 30 }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    marginTop: 5,
                    position: "relative",
                    left: screenWidth * 0.47,
                    // left: Platform.OS === "android" ? 170 : 178,
                    top: 70,
                    zIndex: 1000,
                  }}
                >
                  Sell Car
                </Text>
                <Svg
                  width={maxWidth}
                  height={scale(60)}
                  style={{ borderTopLeftRadius: 90 }}
                >
                  <Path fill={"#1c3039"} {...{ d: returnpathDown }} />
                </Svg>
              </View>
            ),
          }}
        />

        {/* Favourite Tab */}
        <Tabs.Screen
          name="favourite"
          options={{
            title: "Favourite",
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{ alignItems: "center" }}>
                <FontAwesome
                  name={focused ? "heart" : "heart-o"}
                  size={24}
                  color="white"
                  style={{
                    position: "relative",
                    bottom: Platform.OS === "android" ? 5 : 0,
                  }}
                />
                {focused && (
                  <AntDesign
                    name="minus"
                    size={24}
                    color="white"
                    style={{
                      position: "absolute",
                      top: Platform.OS === "android" ? 30 : 33,
                    }}
                  />
                )}
              </View>
            ),
          }}
        />

        {/* Profile Tab */}
        <Tabs.Screen
          name="explore"
          options={{
            title: " ",
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: Platform.OS === "ios" ? 15 : 0,
                }}
              >
                <Image
                  // source={{ uri: "https://via.placeholder.com/40" }}
                  source={require("@/assets/images/salmon.png")}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 15,
                    borderColor: focused ? "transparent" : "transparent",
                    borderWidth: focused ? 2 : 0,
                  }}
                />
              </View>
            ),
          }}
        />
      </Tabs>
   );
}
