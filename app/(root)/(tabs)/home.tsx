import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { cars } from "@/components/SellCard/constant";
import CarItem from "@/components/SellCard";
import { StatusBar } from "expo-status-bar";
import HeaderComp from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";

export default function HomeScreen() {
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <View style={styles.container}>
      <HeaderComp />

      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Image source={require("@/assets/images/add.png")} />
          <Text style={styles.headerTitle}>Add Car</Text>
        </View>
        <TouchableOpacity onPress={toggleView}>
          {isGridView ? (
            <Image source={require("@/assets/images/list.png")} />
          ) : (
            <Image source={require("@/assets/images/Grid.png")} />
          )}
          {/* <FontAwesome
              name={isGridView ? "list" : "th"}
              size={24}
              color="black"
            />  */}
        </TouchableOpacity>
      </View>

      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <CarItem item={item} isGridView={isGridView} />
        )}
        keyExtractor={(item) => item.id}
        key={isGridView ? "grid" : "list"}
        numColumns={isGridView ? 2 : 1}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    justifyContent: "space-between",
    padding: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  listContent: {
    paddingBottom: 80, // Adds padding to the bottom to prevent overlap with bottom tab
  },
});
