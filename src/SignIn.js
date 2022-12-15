import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
import { Entypo, Feather, EvilIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SignIn() {
  const navigation = useNavigation();
  const signUpNavigate = () => {
    navigation.navigate("signup");
  };
  const dashboardNavigate = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View>
      <View style={styles.ImageView}>
        <Image
          style={styles.signupImage}
          source={require("../assets/images/Doctor4.jpg")}
        />
        <Entypo
          style={styles.Location}
          name="location"
          size={36}
          color="black"
        />
        <Text style={styles.FindDoctor}>Find a doctor for you now</Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.started}>Login</Text>
        {/* Enter email */}
        <View style={styles.InputView}>
          <EvilIcons
            name="user"
            size={28}
            color="#ddd"
            style={{ marginLeft: 10 }}
          />
          <TextInput style={styles.input} placeholder="Enter email" />
        </View>
        {/* Enter password */}
        <View style={styles.InputView}>
          <Feather
            name="lock"
            size={20}
            color="#ddd"
            style={{ marginLeft: 10 }}
          />
          <TextInput style={styles.input} placeholder="Enter password" />
          <Feather
            name="eye-off"
            size={20}
            color="#ddd"
            style={{ marginLeft: 10 }}
          />
        </View>

        <View style={{ height: "2%" }} />
        <Pressable style={styles.btn} onPress={dashboardNavigate}>
          <Text style={{color: "#fff"}}>Login</Text>
        </Pressable>
        <View style={styles.alreadyHaveAccount}>
          <Text>Don't have an account?</Text>
          <Pressable style={styles.btnQuestion} onPress={signUpNavigate}>
            <Text style={{ color: "#008dc9" }}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  started: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },
  InputView: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "76%",
  },
  ImageView: {
    height: height / 2.2,
  },
  signupImage: {
    width: "100%",
    resizeMode: "cover",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Location: {
    // color: "#fff",
    marginTop: -height / 6,
    marginLeft: 30,
  },
  FindDoctor: {
    color: "#333",
    marginTop: 10,
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 30,
    maxWidth: 150,
  },
  bottomSection: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    marginTop: -10,
    backgroundColor: "#fff",
  },
  googleImage: {
    width: 20,
    height: 20,
  },
  btn: {
    backgroundColor: "#008dc9",
    padding: 15,
    width: "90%",
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
  },
  alreadyHaveAccount: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  btnQuestion: {
    width: "15%",
  },
});
