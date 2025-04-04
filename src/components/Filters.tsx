import { useState } from "react";

type Props = {
  filter: (item) => boolean;
  setFilter: React.Dispatch<React.SetStateAction<(item) => boolean>>;
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

function Filters({ filter, setFilter }: Props) {
  //revenir sur ca voir ci je comprend tjr, le debug a ete complique et a necessite bcp de ressources
  function handleClickFilter(key: string) {
    const button = Buttons.find((b) => b.key === key);
    const buttonFilter = button?.filter;
    const byDefault = () => true;
    const newFilter = buttonFilter === undefined ? byDefault : buttonFilter;
    //pour le ?, optional chaining pour eviter une erreur si toute la valeur avant le filter est undefined si le find ne trouve rien
    newFilter === filter
      ? setFilter(() => byDefault)
      : setFilter(() => newFilter);
    // obligee de rajouter une fonction anonyme dans setFilter sinon plus rien ne marche, car byDefault est une fonction, mais utilise le resultat de celle-ci, alors quon veut juste qu'il la stocke> Besoin de la repasser dans une autre fonction pour que ca ne fasse pas ca
  }

  return (
    <section className="filters">
      <h2>Add filters: </h2>
      <div>
        {Buttons.map((b) => (
          <button
            key={b.key}
            type="button"
            className={filter === b.filter ? "active-button" : ""}
            onClick={() => handleClickFilter(b.key)}
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
