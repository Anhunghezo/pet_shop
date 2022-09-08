import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';
import "./cart.css"


const Cart = () => {
    const { myCart, total, setMyCart, setTotal } = useContext(CartContext)
    const navigate = useNavigate()

    const handleCheckout = () => {
        setTotal(0)
        setMyCart([])
    }

    const handleBackHome = () => {
        navigate("/")
    }

    return (
        <>
            <section className="cart-container">
                <div className="cart-header">CHECKOUT: </div>
                <div className="cart-items">
                    {myCart!==false &&
                        myCart.map(item => {
                            return (
                                <div className='cart-item'>
                                    <img className='cart-item-img' src={item.imageUrl} alt="" />
                                    {item.name} : {item.price}$
                                </div>
                            )
                        })
                    }
                    <div className="cart-total">TOTAL: {total}$</div>
                </div>

                <button className="cart-checkout" onClick={handleCheckout}>DONE</button>

                <button className="cart-gohome" onClick={handleBackHome}>RETURN HOME</button>
            </section>
        </>
    );
}

export default Cart;