import Card from "./Card";
import data from "../data/data.json"

function CardList() {

  return (
    <main>
          {data.map((d) => (
              <Card
              key={d.id}
              id={d.id}
              title={d.title}
              description={d.description}
              price={d.price}
              image={d.image}
              category={d.category}
              />
          ))}
    </main> 
  )
}

export default CardList; 