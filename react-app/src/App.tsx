import Header from "./components/Header";
import Info from "./components/Info";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import CatalogItems from "./components/CatalogItems";
import CardInfo from "./components/CardInfo";
import Cart from "./components/Cart";

function App() {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <div><Header/></div>
        <div><Info /></div>
        <div><CardList /></div>
      </Route>
      <Route exact path="/catalog">
        <div><CatalogItems /></div>
      </Route>
      <Route path="/catalog/:title">
        <div><CardInfo /></div>
      </Route>
      <Route exact path="/cart">
        <div><Header/></div>
        <div><Cart /></div>
      </Route>
    </Switch>
    <div><Footer /></div>
  </Router>
}

export default App;