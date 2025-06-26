import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="Container" style={{ margin: "0 50px" }}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={{ color: "brown" }}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = pizzaData;
  const pizzas = [];

  const pizzaLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaLength > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>SOLD Out!!</p>
      )}

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/focaccia.jpg"
      />

      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price + 50}</span>
    </li>
  );
}

function Footer() {
  const time = new Date().getHours();
  const openingTime = 9;
  const closingTime = 20;
  const isOpen = time > openingTime && time < closingTime;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are opne until {closingTime}:00. Come visit us or order online.
          </p>
          <button className="btn">Open</button>
        </div>
      ) : (
        <p className="order">We are cuurently closed!!</p>
      )}
    </footer>
  );
}

// react version18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
