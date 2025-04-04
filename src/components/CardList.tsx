import Card from "./Card";
import data from "../data/data.json";

type Props = {
  onSale: boolean;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  cartCount: number;
  setCartPrice: React.Dispatch<React.SetStateAction<number>>;
  cartPrice: number;
};

function CardList({
  setCartCount,
  cartCount,
  setCartPrice,
  cartPrice,
  onSale,
}: Props) {
  return (
    <main>
      {onSale
        ? data
            .filter((it) => it.onsale)
            .map((d) => (
              <Card
                setCartPrice={setCartPrice}
                cartPrice={cartPrice}
                cartCount={cartCount}
                setCartCount={setCartCount}
                key={d.id}
                id={d.id}
                title={d.title}
                description={d.description}
                price={d.price}
                image={d.image}
                category={d.category}
                onsale={d.onsale}
              />
            ))
        : data.map((d) => (
            <Card
              setCartPrice={setCartPrice}
              cartPrice={cartPrice}
              cartCount={cartCount}
              setCartCount={setCartCount}
              key={d.id}
              id={d.id}
              title={d.title}
              description={d.description}
              price={d.price}
              image={d.image}
              category={d.category}
              onsale={d.onsale}
            />
          ))}
    </main>
  );
}

export default CardList;
