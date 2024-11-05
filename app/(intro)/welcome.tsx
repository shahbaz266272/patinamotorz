import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import logo from "@/assets/images/intrologo.png";
import backIcin from "@/assets/images/backison.png";
import circleButon from "@/assets/images/Circle.png";
import p1 from "@/assets/images/p1.png";
import p2 from "@/assets/images/p2.png";
import p3 from "@/assets/images/p3.png";
import { useColorScheme } from '@/hooks/useColorScheme';


import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const colorScheme = useColorScheme();
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;
  const styles = StyleSheet.create({
    button: {
      width: "100%",
  
      padding: 12,
  
      // shadowOffset: { width: 0, height: 2 },
      // shadowOpacity: 0.3,
      // shadowRadius: 2,
      // elevation: 5,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      // backgroundColor: "#fff",
      color: "black",
    },
  
    skipButton: {
      width: "100%",
      padding: 20,
      alignItems: "flex-start",
    },
    skipText: {
      color: "#000",
      fontSize: 16,
    },
    dot: {
      width: 7,
      height: 5,
      marginHorizontal: 4,
      backgroundColor: "#1C3039",
      borderRadius: 15,
    },
    activeDot: {
      width: 32,
      height: 5,
      marginHorizontal: 4,
      backgroundColor: "#1C3039",
      borderRadius: 4,
    },
    slideContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    image: {
      width: "100%",
      height: 300,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      marginTop: 20,
    },
    title: {
      color: colorScheme === "light" ? "#000" : "#fff", 
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
    description: {
      fontSize: 16,
  
      textAlign: "center",
      color: "#858585",
      marginHorizontal: 20,
      marginTop: 10,
    },
    customButton: {
      width: "90%",
      marginTop: 20,
      marginBottom: 10,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
 
      <TouchableOpacity
        disabled={activeIndex === 0}
        // onPress={() => {
        //   router.replace("/(tabs)/index" as any);
        // }}
        onPress={() => swiperRef.current?.scrollBy(-1)}
        style={styles.skipButton}
      >
        {activeIndex !== 0 ? (
          <Image source={backIcin} resizeMode="contain" />
        ) : (
          <View
            style={{ width: 24, height: 24, backgroundColor: "tranparent" }}
          ></View>
        )}
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.slideContainer}>
            <Image
              source={logo}
              // style={styles.image}
              resizeMode="contain"
            />
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            isLastSlide
              ? router.replace("(root)/(tabs)/home" as any)
              : swiperRef.current?.scrollBy(1)
          }
        >
          <Image
            source={activeIndex === 0 ? p1 : activeIndex === 1 ? p2 : p3}
            // style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {/* <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(tabs)/index" as any)
            : swiperRef.current?.scrollBy(1)
        }
        style={styles.customButton}
      /> */}
    </SafeAreaView>
  );
};



export default Home;
