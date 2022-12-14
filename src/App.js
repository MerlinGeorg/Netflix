import './App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { originals,action } from './urls';

function App() {
 return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Orginals' url={originals}/>
      <RowPost title='Action' isSmall url={action}/>
    </div>
 );
}

export default App;
