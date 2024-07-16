import "./App.css";
import FooterComponent from "./components/Footer";
import NavigationComponent from "./components/Navigation";
import AccesView from "./views/Acces";
import AccueilView from "./views/Accueil";
import ContactView from "./views/Contact";
import RiomarView from "./views/Riomar";
import VillaView from "./views/Villa";

function App() {
  return (
    <>
      <NavigationComponent />
      <AccueilView />
      <RiomarView />
      <AccesView />
      <VillaView />
      <ContactView />
      <FooterComponent />
    </>
  );
}

export default App;
