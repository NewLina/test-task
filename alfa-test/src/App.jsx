import './App.scss';
import Header from './components/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from './store/cardsStore';
import {useEffect} from 'react';
import CardList from './components/CardList/CardList';

function App() {

  return (
    <div className="App">
      <Header />
      <main className='main'>
        <CardList/>
      </main>
    </div>
  );
}

export default App;
