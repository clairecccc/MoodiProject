import * as React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const iconsMap = {
  happy: "emoji-happy",
  sad: "emoji-sad",
  neutral: "emoji-neutral",
  drink: "drink",
  noDrink: "cross",
};

const Icon = ({ name, color, size }) => (
  <Entypo name={iconsMap[name]} size={22} color="rgba(0,0,0,0.35)" />
);

export default Icon;
