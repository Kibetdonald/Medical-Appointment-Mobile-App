import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Dimensions
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Feather, EvilIcons } from "@expo/vector-icons";

const {height} = Dimensions.get("window")
export default function SignUpScreen() {
  const navigation = useNavigation();
  const signUpNavigate = () => {
    navigation.navigate("Dashboard");
  };
  const loginNavigate = () => {
    navigation.navigate("signin");
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
        <Text style={styles.started}>Create Account</Text>
        <TextInput style={styles.input} placeholder="Enter username" />
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Enter Password" />
        <Pressable style={styles.btn} onPress={signUpNavigate}>
          <Text>Sign Up</Text>
        </Pressable>

        <Pressable style={styles.btnGoogle} onPress={signUpNavigate}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.googleImage}
              source={require("../assets/images/google.png")}
            />
            <Text style={styles.googleText}>Sign Up With Google</Text>
          </View>
        </Pressable>
        <View style={styles.alreadyHaveAccount}>
          <Text>Already have an account?</Text>
          <Pressable style={styles.btnQuestion} onPress={loginNavigate}>
            <Text style={{ color: "#008dc9" }}> Sign In</Text>
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
  topWrapper: {
    height: 40,
    width: "100%",
    backgroundColor: "#92E3A9",
  },
  started: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },

  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: "5%",
    borderRadius: 5,
    borderColor: "grey",
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
  btnGoogle: {
    padding: 15,
    width: "90%",
    borderWidth: 1,
    borderColor: "#008dc9",
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
    marginTop: 10,
  },
  googleText: {
    fontSize: 16,
    paddingLeft: 5,
  },
  alreadyHaveAccount: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  btnQuestion: {
    width: "10%",
  },
});
