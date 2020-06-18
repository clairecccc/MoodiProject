import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ProfileSummary />
    </ScrollView>
  );
}

const ProfileSummary = () => (
  <View>
    <Text style={styles.name}>Joanna Smith </Text>
    <Text style={styles.email}>j.smith@gmail.com </Text>
    <Button style={styles.button} title="button"></Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  name: {
    fontSize: 15,
  },
  email: {
    fontSize: 15,
  },
  button: {
    color: "hotpink",
  },
});
