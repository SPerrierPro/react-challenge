import { useState } from "react";

type Props = {
  setCartPrice: React.Dispatch<React.SetStateAction<number>>;
  // le type des set est visible quand on laisse la souris dessus
  cartPrice: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  cartCount: number;
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  onsale: boolean;
};

function Card({
  title,
  description,
  price,
  image,
  onsale,
  setCartCount,
  cartCount,
  setCartPrice,
  cartPrice,
}: Props) {
  const [articleCount, setArticleCount] = useState(0);

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      {onsale ? (
        <div>
          <p className="price">{price}€</p>
          <p>On sale !</p>
        </div>
      ) : (
        <p className="price">{price}€</p>
      )}
      <div>
        {articleCount === 0 ? (
          <button
            type="button"
            onClick={() => {
              setArticleCount(articleCount + 1);
              setCartCount(cartCount + 1);
              setCartPrice(cartPrice + price);
            }}
          >
            Ajouter au panier
          </button>
        ) : (
          <div className="added-article">
            <button
              type="button"
              onClick={() => {
                setArticleCount(articleCount - 1);
                setCartCount(cartCount - 1);
                setCartPrice(cartPrice - price);
              }}
            >
              -
            </button>
            <p>{articleCount}</p>
            <button
              type="button"
              onClick={() => {
                setArticleCount(articleCount + 1);
                setCartCount(cartCount + 1);
                setCartPrice(cartPrice + price);
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
