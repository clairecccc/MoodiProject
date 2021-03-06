import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import StatusContext from "../StatusContext";
import Icon from "../components/Icon";

export default function HomeScreen() {
  return (
    <StatusContext.Consumer>
      {({ statuses }) => (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Greeting />
          <TableContainer statuses={statuses} />
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

const TableContainer = ({ statuses }) => (
  <View>
    <TableDescription />
    <Table statuses={statuses} />
  </View>
);

const TableDescription = () => (
  <Text style={styles.tableDescription}>Your summary for this week: </Text>
);

const Table = ({ statuses }) => {
  const data = Object.values(statuses)
    .sort((a, b) => a.date < b.date)
    .slice(0, 6);

  //sort array of inputs by date and render first 7 by date

  const dataRows = data.map((status) => {
    return <DataRow status={status} key={status.date} />;
  });
  return (
    <View style={styles.table}>
      <HeaderRow />
      {dataRows}
    </View>
  );
};

const HeaderRow = () => (
  <View style={styles.row}>
    <View style={[styles.cell, styles.headerCell]}>
      <Text>Date</Text>
    </View>
    <View style={[styles.cell, styles.headerCell]}>
      <Text>Mood</Text>
    </View>
    <View style={[styles.cell, styles.headerCell]}>
      <Text>Alcohol</Text>
    </View>
    <View style={[styles.cell, styles.headerCell]}>
      <Text>Friends</Text>
    </View>
  </View>
);

const DataRow = ({ status }) => (
  <View style={styles.row}>
    <View style={styles.cell}>
      <Text>{status.date}</Text>
    </View>
    <View style={styles.cell}>
      <Icon name={status.mood} />
    </View>
    <View style={styles.cell}>
      <Icon name={status.alcohol} />
    </View>
    <View style={styles.cell}>
      <Icon name={status.social} />
    </View>
  </View>
);

const HelpLine = () => (
  <View style={styles.helpContainer}>
    <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
      <Text style={styles.helpLinkText}>
        Need to talk to someone, don't hesitate contact the Samaritans
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
    backgroundColor: "#78B2E5",
  },
  table: {
    paddingBottom: 10,
    borderColor: "#D5DCDB",
    borderWidth: 2,
  },
  row: {
    flexDirection: "row",
    borderTopWidth: 1,
  },
  greeting: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 20,
    paddingTop: 30,
  },
  tableDescription: {
    fontSize: 20,
    paddingBottom: 15,
    paddingTop: 15,
  },
  cell: {
    padding: 3,
    flex: 1,
  },
  headerCell: {
    backgroundColor: "#D5DCDB",
    paddingTop: -10,
  },
});
