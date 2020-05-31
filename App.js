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
      console.warn("setting status");
      this.setState({ statuses: this.state.statuses.append(status) });
      // this.setState((state) => ({
      //   theme: state.theme === themes.dark ? themes.light : themes.dark,
      // }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      setStatus: this.setStatus,
      statuses: [
        {
          date: "2020-06-30",
          mood: "happy",
        },
        { date: "2020-06-29", mood: "sad" },
      ],
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
