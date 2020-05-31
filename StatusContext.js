import * as React from "react";

const defaultValue = {
  setStatus: () => {},
  statuses: [
    {
      date: "2020-05-30",
      mood: "happy",
      exercise: "lots",
    },
  ],
};

export default React.createContext(defaultValue);
