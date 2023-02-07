import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
 import { Shops } from './components/Shops';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        < div className="App" >
            < NavBar />
            < Banner /> 
            < Shops />
            < Contact />
            < Footer />
        </div>
    );
}

export default App;