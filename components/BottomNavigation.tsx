// // BottomSheetContext.js
// import React, { createContext, useContext, useRef, useCallback } from 'react';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { View, Text } from 'react-native';

// // Define the context type
// interface BottomSheetContextType {
//   openBottomSheet: () => void;
//   closeBottomSheet: () => void;
// }

// // Create the context with the correct type
// const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

// export const BottomSheetProvider = ({ children }:{children:any}) => {
//   const bottomSheetRef:any = useRef(null);

//   const openBottomSheet = useCallback(() => {
//     bottomSheetRef.current?.expand();
//   }, []);

//   const closeBottomSheet = useCallback(() => {
//     bottomSheetRef.current?.close();
//   }, []);

//   return (
//     <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
//       {children}
//       <BottomSheet
//         ref={bottomSheetRef}
//         snapPoints={['25%', '50%', '90%']}
//         index={0}
//         style={{ borderColor: 'red', borderWidth: 2 }} // Visual aid

//       >
//         <View style={{ padding: 20 }}>
//           <Text>Bottom Sheet Content</Text>
//         </View>
//       </BottomSheet>
//     </BottomSheetContext.Provider>
//   );
// };

// export const useBottomSheet = () => {
//   const context = useContext(BottomSheetContext);
//   if (!context) {
//     throw new Error('useBottomSheet must be used within a BottomSheetProvider');
//   }
//   return context;
// };

import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const BottomSheetProvider = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["50%","70","90"], []);

  // callbacks
  const handleSheetChange = useCallback((index:any) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index:any) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderItem = useCallback(
    (item:any) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  return (
    <GestureHandlerRootView style={styles.container}>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 390,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});

export default BottomSheetProvider;
