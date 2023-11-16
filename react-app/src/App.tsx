import Header from "./components/Header";
import Info from "./components/Info";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import CatalogItems from "./components/CatalogItems";
import CardInfo from "./components/CardInfo";

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
      <Route path="/card-info">
        <CardInfo />
      </Route>
      <Route path="/catalog">
        <div><CatalogItems /></div>
      </Route>
    </Switch>
    <div><Footer /></div>
  </Router>
}

export default App;