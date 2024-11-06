import {
  Image,
  Modal,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import HeaderComp from "@/components/Header";
import RideLayout from "@/components/BottomSheetLayout";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const AllUsersMenu = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    code: "EN",
    flag: require("@/assets/images/filag.png"),
  }); // Default language
  const [isToggled, setIsToggled] = useState(false); // Toggle state

  const languages = [
    { name: "English", code: "EN", flag: require("@/assets/images/filag.png") },
  ];

  const handleLanguageSelect = (language: any) => {
    setSelectedLanguage(language);
    setModalVisible(false); // Close modal after selection
  };

  return (
    <RideLayout>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Image
              // source={{ uri: "https://via.placeholder.com/40" }}
              source={require("@/assets/images/salmon76.png")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 15,
                borderColor: "#fff",
                borderWidth: 1,
              }}
            />
            <View style={{ marginTop: 4 }}>
              <Text style={{ color: "#000", fontWeight: "bold", marginTop: 8 }}>
                Ranashah Baz
              </Text>
              <Text style={{ color: "#4d4d4d", marginTop: 0, fontSize: 10 }}>
                Manager, My Company
              </Text>
              <Text
                style={{ color: "#4d4d4d", marginTop: 0, fontWeight: "bold" }}
              >
                Manager
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => setModalVisible(true)}
            >
              <Image source={selectedLanguage.flag} style={styles.flagImage} />
              <Text style={styles.languageButtonText}>
                {" "}
                {selectedLanguage.code}
              </Text>
              <Entypo name="chevron-down" size={24} color="#1C3039" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              borderBottomColor: "#F1F1F1",
              borderBottomWidth: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <Feather
                name="moon"
                size={20}
                color="black"
                style={{ marginTop: 10 }}
              />
              <Text style={{ color: "#000", fontWeight: "bold", marginTop: 8 }}>
                Light Mode
              </Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: "#C7C7C7", true: "#C7C7C7" }}
                thumbColor={isToggled ? "#81b0ff" : "#fff"}
                ios_backgroundColor="#C7C7C7"
                onValueChange={() =>
                  setIsToggled((previousState) => !previousState)
                }
                value={isToggled}
              />
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#F1F1F1",
              borderBottomWidth: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",

              gap: 5,
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 20,
            }}
          >
            <MaterialIcons
              name="person-outline"
              size={20}
              color="black"
              style={{ marginTop: 1 }}
            />

            <Text style={{ color: "#000", fontWeight: "normal", marginTop: 0 }}>
              My Profile
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#F1F1F1",
              borderBottomWidth: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",

              gap: 5,
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 20,
            }}
          >
            <MaterialIcons
              name="star-border"
              size={20}
              color="black"
              style={{ marginTop: 1 }}
            />

            <Text style={{ color: "#000", fontWeight: "normal", marginTop: 0 }}>
              My Plan/Pakages{" "}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#F1F1F1",
              borderBottomWidth: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",

              gap: 5,
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 20,
            }}
          >
            <Ionicons
              name="chatbubbles-outline"
              size={20}
              color="black"
              style={{ marginTop: 1 }}
            />

            <Text style={{ color: "#000", fontWeight: "normal", marginTop: 0 }}>
              FAQ’s
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#F1F1F1",
              borderBottomWidth: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",

              gap: 5,
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 20,
            }}
          >
            <Ionicons
              name="chatbubbles-outline"
              size={20}
              color="black"
              style={{ marginTop: 1 }}
            />
            <Text style={{ color: "#000", fontWeight: "normal", marginTop: 0 }}>
              My Ads
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#F1F1F1",
              borderBottomWidth: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",

              gap: 5,
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 20,
            }}
          >
            <SimpleLineIcons
              name="phone"
              size={20}
              color="black"
              style={{ marginTop: 1 }}
            />

            <Text style={{ color: "#000", fontWeight: "normal", marginTop: 0 }}>
              Contact Us{" "}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: "#F1F1F1",
              borderBottomWidth: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",

              gap: 5,
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 20,
            }}
          >
            <AntDesign
              name="lock1"
              size={20}
              color="black"
              style={{ marginTop: 1 }}
            />

            <Text style={{ color: "#000", fontWeight: "normal", marginTop: 0 }}>
              Update Password
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#1C3039",
              borderRadius: 10,
              paddingHorizontal: 35,
              paddingVertical: 10,
            }}
          >
            <Image
              // source={{ uri: "https://via.placeholder.com/40" }}
              source={require("@/assets/images/logouticon.png")}
              style={{
                width: 18,
                height: 18,
              }}
            />
            <Text
              style={{ color: "#fff", fontSize: 16, fontWeight: "semibold" }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Language</Text>
            {languages.map((language) => (
              <TouchableOpacity
                key={language.code}
                style={styles.languageOption}
                onPress={() => handleLanguageSelect(language)}
              >
                <Image source={language.flag} style={styles.optionFlag} />
                <Text style={styles.languageOptionText}>
                  {language.name} ({language.code})
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </RideLayout>
  );
};

export default AllUsersMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: "white",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 1,
  },
  userTextContainer: {
    marginLeft: 8,
    marginTop: 4,
  },
  userName: {
    color: "#000",
    fontWeight: "bold",
    marginTop: 8,
  },
  userRole: {
    color: "#4d4d4d",
    fontSize: 10,
  },
  userPosition: {
    color: "#4d4d4d",
    fontWeight: "bold",
  },
  languageButton: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#E8EAEB",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  languageButtonText: {
    color: "#1C3039",
    fontWeight: "bold",
    marginRight: 8,
  },
  flagImage: {
    width: 30,
    height: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalContainer: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  languageOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  optionFlag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  languageOptionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FF5722",
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
