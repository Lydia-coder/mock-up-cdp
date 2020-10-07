import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  background: {
    width: "100%",
    height: "100%",
    animation: `$fadeIn 3000ms `,
  },

  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div>
      <img
        className={classes.background}
        src="https://divante.com/case-study/Loods5/image-thumb__219__genericImage/Loods5_logo.jpeg"
        alt="logo"
      />
    </div>
  );
}

export default Home;
