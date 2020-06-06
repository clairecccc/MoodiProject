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
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {/* <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>
                {JSON.stringify(statuses)}
              </Text>
            </View> */}
          <Greeting />
          <TableContainer />
          <HelpLine />
        </ScrollView>
      )}
    </StatusContext.Consumer>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const Greeting = () => (
  <Text style={styles.greeting}>
    Welcome back to Moodi. Make sure to input your mood daily to make the most
    of the App!
  </Text>
);

const TableContainer = () => (
  <View>
    <TableDescription />
    <Table />
  </View>
);

const TableDescription = () => (
  <Text style={styles.tableDescription}>Your summary for this week: </Text>
);

const Table = () => (
  <View style={styles.table}>
    <HeaderRow />
    <DataRow />
    <DataRow />
    <DataRow />
  </View>
);

const HeaderRow = () => <View style={styles.row}></View>;

const DataRow = () => (
  <View style={styles.row}>
    <Cell>
      <Text>Date</Text>
    </Cell>
    <Cell>
      <Text>Mood</Text>
    </Cell>
    <Cell>
      <Text>Booze</Text>
    </Cell>
  </View>
);

const Cell = () => <Text>Cell</Text>;

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
    padding: 10,
  },
  contentContainer: {
    paddingTop: 5,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 20,
    color: "#2e78b7",
    textAlign: "center",
    backgroundColor: "hotpink",
  },
  table: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "hotpink",
    borderWidth: 3,
  },
  greeting: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 20,
  },
  tableDescription: {
    fontSize: 20,
    paddingBottom: 15,
  },
});
