import { BrowserRouter , Route , Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login_2 from './pages/Demo_LoginPage';
import Studentsview from './pages/studentview';
import "./App.css" 
function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route
                exact
                path="/"
                element={<LandingPage/>}
                />
    <Route
                exact
                path="/Login"
                element={<Login_2 />}
                />
    <Route
                exact
                path="/studentsview"
                element={<Studentsview/>}
                />
    </Routes>
    </BrowserRouter>
  );
}

export default App;