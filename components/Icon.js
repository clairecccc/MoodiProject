import * as React from "react";
import { Entypo } from "@expo/vector-icons";

const iconsMap = {
  happy: "emoji-happy",
  sad: "emoji-sad",
  neutral: "emoji-neutral",
  drink: "drink",
  noDrink: "cross",
  friend: "user",
  friends: "users",
  noFriend: "remove-user",
};

const Icon = ({ name, color, size }) => (
  <Entypo name={iconsMap[name]} size={22} color="rgba(0,0,0,0.35)" />
);

export default Icon;
