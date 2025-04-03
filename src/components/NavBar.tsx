type Props = {
    cartCount: number
    cartPrice: number
}

function NavBar({cartCount, cartPrice}: Props) {
    return (
        <nav>
            <img src="/src/assets/images/swiftplay-sports-text.png" alt="SwiftPlay Sports logo" />
            <section>
                <div>
                    { //Condition parce que sinon si j'enlève tous les articles de mon panier ça affiche -0.00€
                        cartCount === 0 ? (
                            <p>Price: 0.00€</p>
                        ) : (
                            //toFixed car sinon parfois le prix fait un chiffre à virgule infini, donc arrondi aux centimes
                            <p>Price: {cartPrice.toFixed(2)}€</p>
                        )
                    }
                    <img className="cart" src="/src/assets/images/cart.svg" alt="Cart" />
                    <p>{cartCount}</p>
                </div>
                <h1>SwiftPlay Sports</h1>
            </section>    
        </nav>
    )
}

export default NavBar;