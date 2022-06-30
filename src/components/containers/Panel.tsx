import React, {
  useRef,
  useEffect,
  useContext,
} from "react";

const classes = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const Panel = (props: any) => {
  return <div style={classes.container}>Hello</div>
};
