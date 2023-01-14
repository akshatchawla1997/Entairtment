
import { Container } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header/Header';
import MainNav from './Components/Header/MainNav';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Container>Movie app</Container>
    <div className="App">
      <MainNav/>
      
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
