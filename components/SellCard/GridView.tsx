import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Platform,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CarItemProps } from "./types";

const { width } = Dimensions.get("window");

const GridViewCard: React.FC<CarItemProps> = ({ item, isGridView }) => {
  const [isLiked, setIsLiked] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const toggleLike = () => {
    setIsLiked(!isLiked);

    // Animate the heart icon when toggled
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

  const styles = StyleSheet.create({
    card: {
      backgroundColor: "#000",
      borderRadius: 8,
      paddingVertical: 1,
      margin: 8,
      alignItems: "flex-start",
    },
    gridCard: {
      width: isGridView ? width / 2 - 20 : width - 30, // Adjust width for grid vs list view
      margin: 10,
      padding: 10,
      backgroundColor: "#fff",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5, // For Android shadow
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
          <Text style={styles.carPrice}>
            <Text style={styles.currencyCode}>{item.price.split(" ")[0]} </Text>
            <Text>{item.price.split(" ")[1]}</Text>
          </Text>

          <FontAwesome
            name="ellipsis-h"
            size={20}
            color="#888"
            style={styles.menuIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default GridViewCard;
