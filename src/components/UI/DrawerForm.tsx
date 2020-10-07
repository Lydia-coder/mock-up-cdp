import React from "react";
import SignUpForm from "../forms/SignUpForm";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  list: {
    height: 450,

    "& .MuiListItem-root": {
      fontWeight: "bold",
    },
  },
  fullList: {
    width: "auto",
  },
});

type Props = {
  open: boolean;
  close: () => void;
};

const DrawerForm: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Drawer anchor="top" open={props.open} onClose={() => props.close()}>
      <div className={classes.list}>
        <SignUpForm />
      </div>
    </Drawer>
  );
};

export default DrawerForm;
