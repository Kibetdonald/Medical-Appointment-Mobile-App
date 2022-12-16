import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import {
  Octicons,
  Feather,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CallScreen() {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  const HangUp = () => {
    navigation.navigate("Dashboard");
  };
  return (
   <View>
    <View style={styles.topWrapper}/>
     <View style={styles.CallScreen}>
      <ImageBackground
        source={require("../assets/images/Profile3.png")}
        style={styles.image}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <View style={styles.CallDuration}>
            <Octicons name="dot-fill" size={24} color="red" />
            <Text style={{ paddingLeft: 5 }}>00:10</Text>
          </View>
          <Image
            style={styles.CallerProfile}
            source={require("../assets/images/Pic.jpg")}
          />
        </View>
        {/* Bottom content */}
        <View style={{ top: height / 2, paddingLeft: 20 }}>
          <Text style={styles.RecieverName}>Dr Sarah Goodwin</Text>
          <Text style={styles.RecieverDuration}>00:10</Text>
        </View>
      </ImageBackground>
      {/* Bottom View */}
      <View style={styles.bottomView}>
        <View style={styles.IconBg}>
          <Feather name="volume-2" size={22} color="white" />
        </View>
        <View style={styles.IconBg}>
          <FontAwesome name="microphone-slash" size={22} color="white" />
        </View>
        <Pressable onPress={HangUp}>
          <View style={styles.CallBackground}>
            <MaterialIcons name="call-end" size={30} color="white" />
          </View>
        </Pressable>
        <View style={styles.IconBg}>
          <FontAwesome5 name="video" size={22} color="white" />
        </View>
        <View style={styles.IconBg}>
          <MaterialIcons name="message" size={22} color="white" />
        </View>
      </View>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  topWrapper:{
    backgroundColor: "#008dc9",
    height: 40
  },
  CallScreen: {
    height: "96%",
    paddingTop: 100,
  },
  image: {
    flex: 1,
    marginTop: -50
  },
  text: {
    top: 10,
  },
  CallerProfile: {
    width: 110,
    height: 140,
  },
  CallDuration: {
    height: 40,
    width: 60,
    backgroundColor: "#ddd",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  RecieverName: {
    fontSize: 24,
  },
  RecieverDuration: {
    fontSize: 18,
    color: "grey",
  },
  bottomView: {
    height: 50,
    flex: 0.1,
    paddingBottom: 10,
    backgroundColor: "#008dc9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  CallBackground: {
    backgroundColor: "red",
    width: 60,
    height: 60,
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  IconBg: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#008dc9",
    borderRadius: 12,
  },
});
