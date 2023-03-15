import logo from './logo.svg';
import './App.css';
import Contenu from './Components/Contenu/Contenu';
import ToggleLangs from './Components/ToggleLangs/ToggleLangs';
import ContextProvider from './Components/context/langContext';
function App() {
  return (
 <ContextProvider>
       
    <Contenu />
     <ToggleLangs />

 </ContextProvider>  
  );
}

export default App;
