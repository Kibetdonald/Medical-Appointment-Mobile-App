import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./Components/SearchBar";
import Categories from "./Components/Categories";
import ListofDoctors from "./Components/ListofDoctors";

export default function Dashboard() {
  return (
    <View>
      <View style={styles.topWrapper} />
      <Text style={styles.Username}>Hey Susan</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <Text style={styles.FindDoctor}>Find Your Suitable Doctor Here</Text>
        <Ionicons name="notifications" size={26} color="black" />
      </View>
      {/* External Components */}
      <SearchBar />
      <Categories />

      <ListofDoctors />
    </View>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    height: 40,
    backgroundColor: "#008dc9",
    width: "100%",
  },
  Username: {
    fontSize: 20,
    paddingTop: 30,
    paddingLeft: 20,
  },
  FindDoctor: {
    fontSize: 20,
    color: "grey",
    fontWeight: "bold",
  },
});
