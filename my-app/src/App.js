import logo from './logo.svg';
import './App.css';
import MoviesIndex from './MoviesIndex';
function App() {
  return (
    <div class="container">
      <h1 style={{fontSize:'50px',color:'white',textAlign:'center',background:"lightblue"}}>FindMyMovies</h1>
      <MoviesIndex/>
    </div>
  );
}

export default App;
