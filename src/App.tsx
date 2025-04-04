import { useState } from "react";

import "./App.css";

import NavBar from "./components/NavBar";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import CardList from "./components/CardList";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [filter, setFilter] = useState(() => (item) => true);

  return (
    <article>
      <NavBar cartCount={cartCount} cartPrice={cartPrice} />
      <Filters filter={filter} setFilter={setFilter} />
      <CardList
        filter={filter}
        setCartCount={setCartCount}
        cartCount={cartCount}
        setCartPrice={setCartPrice}
        cartPrice={cartPrice}
      />
      <Footer />
    </article>
  );
}

export default App;
