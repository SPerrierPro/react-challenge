import { useState } from "react";

type Props = {
  onSale: boolean;
  setOnSale: React.Dispatch<React.SetStateAction<boolean>>;
};

const Buttons = [
  { key: "onsale", text: "On sale", filter: (item) => item.onsale },
  {
    key: "lessThan50",
    text: "Less than 50€",
    filter: (item) => item.price < 50,
  },
  { key: "balls", text: "Balls", filter: (item) => item.category === "Balls" },
  {
    key: "fitness",
    text: "Fitness",
    filter: (item) => item.category === "Fitness",
  },
  {
    key: "footwear",
    text: "Footwear",
    filter: (item) => item.category === "Footwear",
  },
  {
    key: "rackets",
    text: "Rackets",
    filter: (item) => item.category === "Rackets",
  },
];

function Filters({ onSale, setOnSale }: Props) {
  // Sert a toggle la classe sur les boutons en fonction de letat du state pour afficher le style si selectionne, en lui attribuant la valeur de la key (unique donc applique bien a un seul bouton)
  const [activeButton, setActiveButton] = useState("");
  function handleActiveButton(key: string) {
    activeButton === key ? setActiveButton("") : setActiveButton(key);
  }

  function handleClickSale(key: string) {
    setOnSale(!onSale);
    handleActiveButton(key);
  }
  console.log(activeButton);

  return (
    <section className="filters">
      <h2>Add filters: </h2>
      <div>
        {Buttons.map((b) => (
          <button
            key={b.key}
            type="button"
            className={activeButton === b.key ? "active-button" : ""}
            onClick={() => handleClickSale(b.key)}
            //je cree une fonction anonyme dans le map qui appelle ma fonction handleclick sinon la fonction est appellee quand map passe sur mon tableau. Et du coup je peux passer key en arg de la fonction, qui sera different pour chaque btn car la key est unique
          >
            {b.text}
          </button>
        ))}

        {/* Commente car premier jet mais mon className s'appliquait a tous mes boutons sans distinctions, d'ou le map plus haut.
        
        <button
          type="button"
          className={activeButton ? "active-button" : ""}
          onClick={handleClickSale}
        >
          On sale
        </button>
        <button
          type="button"
          className={activeButton ? "active-button" : ""}
          onClick={handleActiveButton}
        >
          Less than 50€
        </button>
        <button
          type="button"
          className={activeButton ? "active-button" : ""}
          onClick={handleActiveButton}
        >
          Balls
        </button>
        <button
          type="button"
          className={activeButton ? "active-button" : ""}
          onClick={handleActiveButton}
        >
          Fitness
        </button>
        <button
          type="button"
          className={activeButton ? "active-button" : ""}
          onClick={handleActiveButton}
        >
          Footwear
        </button>
        <button
          type="button"
          className={activeButton ? "active-button" : ""}
          onClick={handleActiveButton}
        >
          Racket
        </button> */}
      </div>
    </section>
  );
}

export default Filters;
