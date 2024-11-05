import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetView,
  } from "@gorhom/bottom-sheet";
  import { router } from "expo-router";
  import React, { useRef } from "react";
  import { Image, Text, TouchableOpacity, View } from "react-native";
  import { GestureHandlerRootView } from "react-native-gesture-handler";
  
  // Assuming you have icons defined somewhere in your code
 import HeaderCompDrawer from "./HeaderDrawer";
  
  const RideLayout = ({
     
    children,
  }: {
    
    children: React.ReactNode;
  }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
  
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'column', height: '100%', backgroundColor: '#fff' }}>
            
            <HeaderCompDrawer />

            {/* Assuming you have a Map component */}
            {/* <Map /> */}
          </View>
  
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={["85%", "90%"]}
            index={1}
          >
            
              <BottomSheetScrollView
                style={{
                  flex: 1,
                  // padding: 20,
                }}
              >
                {children}
              </BottomSheetScrollView>
         
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    );
  };
  
  export default RideLayout;
  