import React, { useCallback, useRef, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

// Sample menu items
const MENU_ITEMS = [
  { id: "1", title: "Home" },
  { id: "2", title: "Profile" },
  { id: "3", title: "Settings" },
  { id: "4", title: "Logout" },
];

const BottomSheetMenu = () => {
  // Reference for the bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Snap points for bottom sheet
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // Handle opening the bottom sheet
  const handleOpen = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  // Handle closing the bottom sheet
  const handleClose = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // Render each menu item
  const renderMenuItem = useCallback(
    ({ item }: { item: any }) => (
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => alert(`Navigating to ${item.title}`)}
      >
        <Text style={styles.menuText}>{item.title}</Text>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <View style={styles.container}>
      {/* Menu button to open bottom sheet */}
      <TouchableOpacity style={styles.menuButton} onPress={handleOpen}>
        <Image
          source={require("@/assets/images/menubar.png")}
          style={styles.menuIcon}
        />
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onClose={handleClose}
        enablePanDownToClose={true}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.sheetTitle}>Menu</Text>
          <BottomSheetFlatList
            data={MENU_ITEMS}
            keyExtractor={(item) => item.id}
            renderItem={renderMenuItem}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    padding: 10,
    backgroundColor: "#1C3039",
    borderRadius: 5,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  menuText: {
    fontSize: 16,
  },
});

export default BottomSheetMenu;
