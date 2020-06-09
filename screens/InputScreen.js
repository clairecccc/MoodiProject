import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import StatusContext from "../StatusContext";
import Icon from "../components/Icon";

export default function InputScreen() {
  return (
    <StatusContext.Consumer>
      {({ statuses, setStatus }) => {
        const todayStatus = statuses["2020-06-09"] || {};

        const todayMood = todayStatus.mood;
        const todayAlcohol = todayStatus.alcohol;
        const todaySocial = todayStatus.social;

        return (
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <Text style={styles.introText}>
              Use the buttons below to record what's happening today
            </Text>
            <Text style={styles.questionText}>How are you feeling today?</Text>
            <OptionButton
              isSelected={todayMood === "happy"}
              icon="happy"
              label="Happy"
              onPress={() =>
                setStatus({
                  mood: "happy",
                })
              }
            />
            <OptionButton
              isSelected={todayMood === "neutral"}
              icon="neutral"
              label="Neutral"
              onPress={() =>
                setStatus({
                  mood: "neutral",
                })
              }
            />

            <OptionButton
              isSelected={todayMood === "sad"}
              icon="sad"
              label="Sad"
              onPress={() =>
                setStatus({
                  mood: "sad",
                })
              }
            />
            <Text style={styles.questionText}>
              {" "}
              Have you had a drink today?
            </Text>
            <OptionButton
              isSelected={todayAlcohol === "drink"}
              icon="drink"
              label="drink"
              onPress={() =>
                setStatus({
                  alcohol: "drink",
                })
              }
            />
            <OptionButton
              isSelected={todayAlcohol === "noDrink"}
              icon="noDrink"
              label="noDrink"
              onPress={() =>
                setStatus({
                  alcohol: "noDrink",
                })
              }
            />
            <Text style={styles.questionText}>Have you socialised today? </Text>
            <OptionButton
              isSelected={todaySocial === "friends"}
              icon="friends"
              label="friends"
              onPress={() =>
                setStatus({
                  social: "friends",
                })
              }
            />
            <OptionButton
              isSelected={todaySocial === "friend"}
              icon="friend"
              label="friend"
              onPress={() =>
                setStatus({
                  social: "friend",
                })
              }
            />
            <OptionButton
              isSelected={todaySocial === "noFriend"}
              icon="noFriend"
              label="noFriend"
              onPress={() =>
                setStatus({
                  social: "noFriend",
                })
              }
            />
          </ScrollView>
        );
      }}
    </StatusContext.Consumer>
  );
}

function OptionButton({ icon, label, onPress, isLastOption, isSelected }) {
  return (
    <RectButton
      style={[
        styles.option,
        isLastOption && styles.lastOption,
        isSelected && styles.selected,
      ]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Icon name={icon} size={22} color="rgba(0,0,0,0.35)" />
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
  introText: {
    textAlign: "center",
    fontSize: 20,
    padding: 25,
  },
  questionText: {
    fontSize: 15,
    fontWeight: "bold",
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
  selected: {
    backgroundColor: "hotpink",
  },
});
