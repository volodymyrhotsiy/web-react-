import Header from "./components/Header";
import Info from "./components/Info";
import CardList from "./components/CardList";
import ViewMoreButton from "./components/ViewMoreButton";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Filters from './components/Filters';
import CatalogItems from "./components/CatalogItems";

function App() {
  return <Router>
    <div><Header /></div>
    <Switch>
      <Route path="/home">
        <div><Info /></div>
        <div><CardList /></div>
        <div><ViewMoreButton /></div>
        <div><Footer /></div>
      </Route>
      <Route path="/catalog">
      <div><Filters /></div>
      <div><CatalogItems /></div>
      <div><Footer /></div>
      </Route>
    </Switch>
  </Router>
}

export default App;