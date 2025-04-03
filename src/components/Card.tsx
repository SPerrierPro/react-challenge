interface Article {
      id: string;
      title: string;
      description: string;
      price: string;
      image: string;
      category: string;
    }


function Card ( {title, description, price, image }: Article ) {
    return (
        <div>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default Card;