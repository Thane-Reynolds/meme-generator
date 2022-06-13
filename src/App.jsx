import './styles.css';
import Header from './components/header/Header';
import Meme from './components/meme/Meme'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Meme />
      </main>
    </div>
  );
}

export default App;
