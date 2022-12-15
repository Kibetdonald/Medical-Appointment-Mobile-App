import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import React from "react";

const DATA = [
  {
    id: "1",
    title: "Cardiologist",
    image: require("../../assets/images/cardiologist.png"),
  },
  {
    id: "2",
    title: "Dentist",
    image: require("../../assets/images/dentist.png"),
  },
  {
    id: "3",
    title: "Nephrologist",
    image: require("../../assets/images/nephrologist.png"),
  },
  {
    id: "4",
    title: "Neurologist",
    image: require("../../assets/images/neurologist.png"),
  },
  {
    id: "5",
    title: "Pulmonologist",
    image: require("../../assets/images/pulmonologist.png"),
  },
];
const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Image source={image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function Categories() {
  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} />
  );
  return (
    <View style={styles.Categories}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.CategoriesTitle}>Categories</Text>
        <Pressable>
          <Text style={styles.CategoriesTitle}>See All</Text>
        </Pressable>
      </View>
      <FlatList
        style={{ padding: 1 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Categories: {
    padding: 15,
  },
  CategoriesTitle: {
    fontSize: 18,
  },
  item: {
    borderRadius: 10,
    backgroundColor: "#008dc9",
    marginRight: 10,
    marginTop: 10,
    padding: 12,
  },
  title:{
    color: "#fff"
  }
});
