import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import StatusContext from "./StatusContext";

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setStatus = (status) => {
      //set date as current date
      //if today's data already exisits update don't append
      const today = new Date().toISOString().substr(0, 10);

      const newState = Object.assign({}, this.state.statuses);

      if (!newState[today]) {
        newState[today] = {
          date: today,
        };
      }

      newState[today] = Object.assign(newState[today], status);

      this.setState({ statuses: newState });
    };

    // if object already exists replace object, can't have undefined

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      setStatus: this.setStatus,
      statuses: {
        "2020-06-18": {
          date: "2020-06-18",
          mood: "happy",
          alcohol: "noDrink",
        },
        "2020-05-29": {
          date: "2020-05-29",
          mood: "sad",
          social: "noFriend",
        },
        "2020-05-28": {
          date: "2020-05-28",
          mood: "sad",
          social: "noFriend",
        },
        "2020-05-27": {
          date: "2020-05-27",
          mood: "sad",
          social: "noFriend",
        },
        "2020-05-26": {
          date: "2020-05-26",
          mood: "sad",
          social: "noFriend",
        },
        "2020-05-25": {
          date: "2020-05-25",
          mood: "sad",
          social: "noFriend",
        },
        "2020-05-24": {
          date: "2020-05-24",
          mood: "sad",
          social: "noFriend",
        },
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <StatusContext.Provider value={this.state}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </StatusContext.Provider>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default function AppWrapper() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return <App />;
  }
}
