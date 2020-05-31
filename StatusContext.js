import * as React from "react";

const defaultValue = {
  setStatus: () => {},
  statuses: {},
};

export default React.createContext(defaultValue);
