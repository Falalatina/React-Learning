import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
