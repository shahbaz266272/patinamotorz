import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Modal,
  Dimensions,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CarItemProps } from "./types";

const { width } = Dimensions.get("window");

const GridViewCard: React.FC<CarItemProps> = ({ item, isGridView }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0, alignLeft: false });
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const toggleLike = () => {
    setIsLiked(!isLiked);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  const handleOptionSelect = (option:any) => {
    console.log(`${option} selected`);
    toggleMenu();
  };

  const showMenu = (event:any) => {
    const { pageX, pageY } = event.nativeEvent;
    const isLeftColumn = pageX < width / 2; // Determine if icon is in the left column
    setMenuPosition({ x: pageX, y: pageY, alignLeft: !isLeftColumn });
    toggleMenu();
  };

  const styles = StyleSheet.create({
    gridCard: {
      width: isGridView ? width / 2 - 20 : width - 30,
      margin: 10,
      padding: 10,
      backgroundColor: "#fff",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    imageContainer: {
      position: "relative",
      borderRadius: 8,
      overflow: "hidden",
    },
    carImage: {
      width: "100%",
      height: 120,
      borderRadius: 8,
    },
    heartIconContainer: {
      position: "absolute",
      top: 8,
      right: 8,
      zIndex: 1,
    },
    carInfo: {
      flex: 1,
      marginTop: 10,
      justifyContent: "flex-start",
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: 4,
    },
    carTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
    location: {
      fontSize: 12,
      fontWeight: "500",
      color: "#A5A7A8",
      marginBottom: 8,
      flexShrink: 1,
    },
    priceContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    },
    carPrice: {
      fontSize: 14,
      color: "#333",
      fontWeight: "bold",
    },
    currencyCode: {
      color: "#F3B97F",
      fontSize: 12,
    },
    menuIcon: {
      marginLeft: 10,
    },
    menuContainer: {
      position: "absolute",
      top: Platform.OS === "android" ? menuPosition.y - 30 : menuPosition.y + 5,
      left: menuPosition.alignLeft ? menuPosition.x - 150 : menuPosition.x + 10,
      backgroundColor: "#fff",
      borderRadius: 8,
      width: 150,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
    },
    menuItemText: {
      fontSize: 16,
      marginLeft: 10,
      color: "#333",
    },
  });

  return (
    <View style={styles.gridCard}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.carImage} />

        <TouchableOpacity onPress={toggleLike} style={styles.heartIconContainer}>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <FontAwesome
              name={isLiked ? "heart" : "heart-o"}
              size={24}
              color={isLiked ? "red" : "grey"}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View style={styles.carInfo}>
        <View style={styles.titleContainer}>
          <Text style={styles.carTitle}>{item.title}</Text>
        </View>
        <Text style={styles.location}>
          A Premium Crossover SUV That Does it All!
        </Text>
        <View style={styles.priceContainer}>
          <TouchableOpacity onPress={showMenu}>
            <FontAwesome
              name="ellipsis-h"
              size={20}
              color="#888"
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <Text style={styles.carPrice}>
            <Text style={styles.currencyCode}>{item.price.split(" ")[0]} </Text>
            <Text>{item.price.split(" ")[1]}</Text>
          </Text>
        </View>
      </View>

      {/* Modal for menu options */}
      <Modal
        visible={isMenuVisible}
        transparent
        animationType="none"
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={toggleMenu}>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleOptionSelect("Sold")}
            >
              <FontAwesome name="check" size={20} color="#4CAF50" />
              <Text style={styles.menuItemText}>Sold</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleOptionSelect("Edit")}
            >
              <FontAwesome name="edit" size={20} color="#FF9800" />
              <Text style={styles.menuItemText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleOptionSelect("Delete")}
            >
              <FontAwesome name="trash" size={20} color="#F44336" />
              <Text style={styles.menuItemText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default GridViewCard;
