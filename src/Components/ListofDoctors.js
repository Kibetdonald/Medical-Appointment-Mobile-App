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
    name: "Dr. James Githinji",
    location: "Kenyatta Hospital",
    title: "Cardiologist",
    image: require("../../assets/images/Profile.jpg"),
  },
  {
    id: "2",
    name: "Dr. James Githinji",
    location: "Kenyatta Hospital",
    title: "Dentist",
    image: require("../../assets/images/Profile2.jpg"),
  },
  {
    id: "3",
    name: "Dr. James Githinji",
    location: "Kenyatta Hospital",
    title: "Nephrologist",
    image: require("../../assets/images/Profile3.png"),
  },
  {
    id: "4",
    name: "Dr. James Githinji",
    location: "Kenyatta Hospital",
    title: "Neurologist",
    image: require("../../assets/images/Profile4.png"),
  },
  {
    id: "5",
    name: "Dr. James Githinji",
    location: "Kenyatta Hospital",
    title: "Pulmonologist",
    image: require("../../assets/images/Profile.jpg"),
  },
  {
    id: "6",
    name: "Dr. James Githinji",
    location: "Kenyatta Hospital",
    title: "Pulmonologist",
    image: require("../../assets/images/Profile.jpg"),
  },
];
const Item = ({ title, image, name, location }) => (
  <View style={styles.doctorlist}>
    <Image source={image} style={{ width: 100, height: 100, marginLeft: 15 }} />
    <View style={{ marginLeft: 50 }}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.location}>{location}</Text>
      <Pressable style={styles.BookAppointment}>
        <Text style={{ color: "#fff" }}>Book Appointment</Text>
      </Pressable>
    </View>
  </View>
);
export default function ListofDoctors() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      image={item.image}
      name={item.name}
      location={item.location}
    />
  );
  return (
    <View style={styles.Categories}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.CategoriesTitle}>Nearest Specialist</Text>
        <Pressable>
          <Text style={styles.CategoriesTitle}>See All</Text>
        </Pressable>
      </View>
      <View style={{ height: "100%" }}>
        <FlatList
          style={{ padding: 1 }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Categories: {
    padding: 15,
  },
  CategoriesTitle: {
    fontSize: 17,
  },
  doctorlist: {
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 10,
    marginTop: 10,
    padding: 12,
    flexDirection: "row",
    width: "100%"
  },
  BookAppointment: {
    backgroundColor: "#008dc9",
    padding: 12,
    marginTop: 15,
  },
  name: {
    fontSize: 17,
  },
  title: {
    fontSize: 15,
    marginTop: 5,
  },
  location: {
    color: "grey",
    marginTop: 5,
  },
});
