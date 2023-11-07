import Header from "./components/Header";
import Info from "./components/Info";
import CardList from "./components/CardList";
import ViewMoreButton from "./components/ViewMoreButton";
import Footer from "./components/Footer";

function App() {
  return <>
    <div><Header /></div>
    <div><Info /></div>
    <div><CardList /></div>
    <div><ViewMoreButton /></div>
    <div><Footer /></div>
  </>
}

export default App;