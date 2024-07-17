import "./App.css";
import FooterComponent from "./components/Footer";
import NavigationComponent from "./components/Navigation";
import AccesView from "./views/Acces";
import AccueilView from "./views/Accueil";
import ContactView from "./views/Contact";
import ChoseAfaireView from "./views/ChoseAfaire";
import RiomarView from "./views/Riomar";
import VillaView from "./views/Villa";
import InventaireView from "./views/Inventaire";
import PhotosView from "./views/Photos";

function App() {
  return (
    <>
      <NavigationComponent />
      <AccueilView />
      <RiomarView />
      <AccesView />
      <ChoseAfaireView />
      <VillaView />
      <InventaireView />
      <PhotosView />
      <ContactView />
      <FooterComponent />
    </>
  );
}

export default App;
