import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { store } from './features/store';
import { Provider } from 'react-redux';
import './App.css';
import PageRoutes from './components/routes/PageRoutes';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <PageRoutes />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
