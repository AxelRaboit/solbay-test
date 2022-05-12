import './App.scss';
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import Navigator from './components/Navigation/Navigator';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Navigator />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
