import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import StatusContext from "../StatusContext";

export default function HomeScreen() {
  return (
    <StatusContext.Consumer>
      {({ statuses }) => (
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>
                {JSON.stringify(statuses)}
              </Text>
            </View>
            <Greeting />
            <TableContainer />
            <HelpLine />
          </ScrollView>
        </View>
      )}
    </StatusContext.Consumer>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const Greeting = () => (
  <View style={styles.helpContainer}>
    <Text>Greeting</Text>
  </View>
);

const TableContainer = () => (
  <View>
    <TableDescription />
    <Table />
  </View>
);

const TableDescription = () => (
  <View style={styles.helpContainer}>
    <Text>Table Description </Text>
  </View>
);

const Table = () => (
  <View style={styles.helpContainer}>
    <Text>Table </Text>
  </View>
);

const HelpLine = () => (
  <View style={styles.helpContainer}>
    <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
      <Text style={styles.helpLinkText}>
        Need to talk to someone now - Don't hesitate contact the Samaritans
      </Text>
    </TouchableOpacity>
  </View>
);

function handleHelpPress() {
  WebBrowser.openBrowserAsync("https://www.samaritans.org/");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
