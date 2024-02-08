import { useGlobalContext } from "../context";
import CartItem from "./CartItem";
import { SiGithub } from "react-icons/si";

const CartContainer = () => {
  const { cart, clearCart, total } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total: <span>${total}</span>
            </h4>
          </div>
          <button className="btn clear-btn" onClick={clearCart}>
            clear cart
          </button>
        </footer>
        <footer>
          <a href="https://github.com/abrarjanovna/reducer">
            <SiGithub />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default CartContainer;
