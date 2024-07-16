import "./App.css";
import FooterComponent from "./components/Footer";
import NavigationComponent from "./components/Navigation";
import AccederView from "./views/Acceder";
import AccueilView from "./views/Accueil";
import ApprecisationsView from "./views/Appreciation";
import AsavoirView from "./views/Asavoir";
import DisponibilitesView from "./views/Disponibilite";
import TarifsView from "./views/Tarifs";
import VisiterView from "./views/Visiter";

function App() {
  return (
    <>
      <NavigationComponent />
      <AccueilView />
      <TarifsView />
      <DisponibilitesView />
      <ApprecisationsView />
      <AccederView />
      <VisiterView />
      <AsavoirView />
      <FooterComponent />
    </>
  );
}

export default App;
