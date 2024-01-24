import './App.css';
import Aside from './Aside/Aside';
import Main from './Main/Main';
import NavBar from './Nav/Nav';

function App() {
  return (
    <div className="App">
      <NavBar />

      <article style={{
        display:'flex'
      }}>

        <Aside />

        <Main />

      </article>

    </div>
  );
}

export default App;