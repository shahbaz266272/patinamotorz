import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CarItemProps } from "./types";

const ListView: React.FC<CarItemProps> = ({ item, isGridView }) => {
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
      backgroundColor: "#fff",
      borderRadius: 8,
      paddingVertical: 1,
      paddingHorizontal: 10,
      margin: 8,
      alignItems: "center",
    },
    priceAmount: {
      color: "black",
      fontWeight: "bold",
      fontSize: 16,
    },
    currencyCode: {
      color: "#F3B97F",
      fontSize: 12,
    },
    gridCard: {
      flex: 1,
      margin: 4,
      padding: 8,
    },
    listCard: {
      flexDirection: "row",
      alignItems: "center",
    },
    imageContainer: {
      position: "relative",
    },
    carImage: {
      width: 117,
      height: 81,
      borderRadius: 8,
    },
    heartIconContainer: {
      position: "absolute",
      top: 8,
      right: 8,
      zIndex: 1,
    },
    inlineHeartIcon: {
      marginRight: 8,
      display: "flex",
      justifyContent: "flex-end",
    },
    carInfo: {
      flex: 1,
      marginLeft: 12,
      justifyContent: "space-between",
      flexGrow: 1,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 5,
    },
    carTitle: {
      fontSize: Platform.OS === "android" ? 12 : 16,
      fontWeight: "bold",
      marginBottom: 4,
    },
    location: {
      fontSize: 12,
      fontWeight: "semibold",
      marginBottom: 4,
      color: "#A5A7A8",
    },
    priceContainer: {
      flexDirection: isGridView ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 15,
    },
    carPrice: {
      fontSize: 14,
      color: "#888",
      display: "flex",
      gap: 10,
    },
    menuIcon: {
      marginRight: 10,
    },
  });
  return (
    <View style={[styles.card, isGridView ? styles.gridCard : styles.listCard]}>
      {isGridView ? (
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.carImage} />

          <TouchableOpacity
            onPress={toggleLike}
            style={styles.heartIconContainer}
          >
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <FontAwesome
                name={isLiked ? "heart" : "heart-o"}
                size={24}
                color={isLiked ? "red" : "grey"}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{position:"relative"}}>
          <View
            style={{
              backgroundColor: "#F3B97F",
              borderRadius: 10,
              paddingVertical: 3,
              paddingHorizontal: 10,
              position: "absolute",
              top: 5,
              left: 5,
              zIndex: 100
            }}
          >
            <Text style={{ fontSize: 8, fontWeight:"bold" }}>NEW</Text>
          </View>
          <Image source={item.image} style={styles.carImage} />
        </View>
      )}

      <View style={styles.carInfo}>
        <View style={styles.titleContainer}>
          <Text style={styles.carTitle}>{item.title}</Text>
          {!isGridView && (
            <TouchableOpacity
              onPress={toggleLike}
              style={styles.inlineHeartIcon}
            >
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <FontAwesome
                  name={isLiked ? "heart" : "heart-o"}
                  size={24}
                  color={isLiked ? "red" : "grey"}
                />
              </Animated.View>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.location}>Doha - Qatar</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.carPrice}>
            <Text style={styles.currencyCode}>{item.price.split(" ")[0]} </Text>
            <Text style={styles.priceAmount}>{item.price.split(" ")[1]}</Text>
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

export default ListView;
