import './App.css';
import './__container/App__container.css';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  return (
    <div className="app">
      <Aside />
      <div className="app__container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
