import React, { useState, useEffect, useCallback } from "react";
import { CartType } from "../types/CartTypes";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DrawerForm from "../UI/DrawerForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "right",
  },
  mainBackgroundColor: {
    backgroundColor: "	#f5a5ae",
  },
  registerBtn: {
    backgroundColor: "#ad5a6b",
    color: "#FFB6C1",
    padding: "10px 120px",
    borderRadius: "8px",
  },
  h1: {
    color: "#fad1d2",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",

    alignItems: "left",
  },

  item: {
    listStyleType: "none",
    alignItems: "right",

    textDecoration: "underline",
    display: "flex",

    color: "#f9bfc1",
    fontSize: "20px",
  },
  addbtn: {
    border: "none",
    backgroundColor: "	#f5a5ae",
    color: "#f9bfc1",
    fontSize: "20px",
  },
}));

function Receipt() {
  const [cart, setCart] = useState<CartType[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [isDrawerFormOpen, setDrawerFormOpen] = useState(false);

  // 1. States. (alles met useState)
  // 2. Callbacks. (alles met useCallback / losse functies)
  // 3. Effects. (alles met useEffect)
  // 4. HTML.

  const items: CartType[] = [
    {
      id: 1,
      name: "sofa",
      price: 2000,
    },
    {
      id: 2,
      name: "table",
      price: 3200,
    },
    {
      id: 3,
      name: "chair",
      price: 510,
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = useCallback(() => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  }, [cart]);

  const addToCart = useCallback(
    (el: CartType) => {
      setCart([...cart, el]);
    },
    [cart]
  );

  const listItems = items.map((el) => (
    <ListItem key={el.id} el={el} addToCart={addToCart} />
  ));

  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        className={classes.mainBackgroundColor}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <DrawerForm
          open={isDrawerFormOpen}
          close={() => setDrawerFormOpen(false)}
        />

        <div>
          <h1 className={classes.h1}>Bon</h1>
          <div className={classes.paper}>{listItems}</div>

          <div>
            <p className={classes.h1}>Total: €{cartTotal}</p>
          </div>
          <button
            className={classes.registerBtn}
            onClick={() => setDrawerFormOpen(true)}
          >
            register
          </button>
        </div>
      </Grid>
    </Grid>
  );
}

const ListItem: React.FC<{ el: CartType; addToCart: any }> = (props) => {
  const { el, addToCart } = props;
  const classes = useStyles();
  return (
    <div key={el.id}>
      <ul className={classes.item}>
        <li>
          <input
            className={classes.addbtn}
            type="submit"
            value="+"
            onClick={() => addToCart(el)}
          />

          {`${el.name} €${el.price} `}
        </li>
      </ul>
    </div>
  );
};

export default Receipt;
