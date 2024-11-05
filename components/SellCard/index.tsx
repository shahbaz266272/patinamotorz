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
import GridViewCard from "./GridView";
import ListView from "./ListView";

const CarItem: React.FC<CarItemProps> = ({ item, isGridView }) => {
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
  
  return (
    <View style={{backgroundColor:"#eaeaea"}}>
      {isGridView ? (
        <GridViewCard item={item} isGridView={isGridView} />
      ) : (
        <ListView item={item} isGridView={isGridView} />
      )}
    </View>
  );
};

export default CarItem;
