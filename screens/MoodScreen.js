import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import StatusContext from "../StatusContext";

export default function MoodScreen() {
  return (
    <StatusContext.Consumer>
      {({ statuses, setStatus }) => (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <OptionButton
            icon="md-sad"
            label="Sad"
            onPress={() =>
              setStatus({
                date: "2020-05-30",
                mood: "happy",
                exercise: "lots",
              })
            }
          />
          <OptionButton
            icon="md-happy"
            label="Happy"
            onPress={() => WebBrowser.openBrowserAsync("https://docs.expo.io")}
          />
          <OptionButton
            icon="md-neutral"
            label="Neutral"
            onPress={() => WebBrowser.openBrowserAsync("https://docs.expo.io")}
          />
          <View>
            <Text>"test" {JSON.stringify(statuses)}</Text>
          </View>
        </ScrollView>
      )}
    </StatusContext.Consumer>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
  },
});
