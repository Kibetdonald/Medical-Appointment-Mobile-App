import { View, Text, StyleSheet, TextInput} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function SearchBar() {
  return (
    <View>
      {/* Search bar */}
      <View style={styles.searchBar}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <TextInput style={styles.input} placeholder="Search here" />
      </View>
      {/* End of search bar */}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "90%",
  },
});
