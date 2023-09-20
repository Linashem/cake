import { useState } from "react";
import { useSelector } from "react-redux";
import { GoodsInCart } from "../../../GoodsInCart";
import style from "./Header.module.scss";

export default function Header() {
  const state = useSelector((state) => state.cart.cart);
  const [visibleCart, setVisibleCart] = useState(false);
  const visibleHandler = () => {
    setVisibleCart((prev) => !prev);
  };

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <nav className={style.nav}>
          <span className={style.logo}> Cake</span>
          <ul className={style.list}>
            <li className={style.list_item}>Shop</li>
            <li className={style.list_item}>Delivery</li>
            <li className={style.list_item}>About us</li>
            <button className={style.list_btn} onClick={() => visibleHandler()}>CART</button>
            <div> {visibleCart && <GoodsInCart />} </div>
            <div>{state} </div>
          </ul>
        </nav>
      </div>
      {/* <div className="presentation"></div> */}
    </header>
  );
}