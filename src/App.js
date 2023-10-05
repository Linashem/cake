
import { Route, Routes } from "react-router-dom";
import { Pagewrapper } from "./Components/Common/PageWrapper";
import { GoodsInCart } from "./Components/GoodsInCart/GoodsInCart";
import { OneGood } from "./Components/OneGood/OneGood";
import { Main } from "./Containers/Main";
import { Shop } from "./Containers/Shop";
import { routes } from "./Helper/Conatants/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Pagewrapper />}>
          <Route index element={<Main />} />
          <Route path={routes.cart} element={<GoodsInCart/>}/>
          <Route path={routes.shop} element={<Shop/>}/>
          <Route path={routes.good}  element={<OneGood/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;

