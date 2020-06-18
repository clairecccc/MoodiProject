import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProfileSummary />
    </ScrollView>
  );
}

const ProfileSummary = () => (
  <View>
    <Text style={styles.intro}>
      You can view and edit your profile on this page{" "}
    </Text>
    <Text style={styles.date}>Date of your last input : 2020-19-06 </Text>
    <Text style={styles.name}>Joanna Smith </Text>
    <Text style={styles.email}>j.smith@gmail.com </Text>
    <Button color="#2E78B7" title="edit profile"></Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    padding: 40,
    alignContent: "center",
  },
  intro: {
    fontSize: 20,
    paddingTop: 20,
    textAlign: "center",
    paddingBottom: 60,
  },
  name: {
    fontSize: 20,
    paddingTop: 40,
  },
  email: {
    fontSize: 20,
    paddingTop: 40,
    paddingBottom: 60,
  },
  date: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
  },
});
