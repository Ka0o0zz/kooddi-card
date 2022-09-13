import './App.css';
import { BackCard } from './components/backCard';
import { FrontCard } from './components/frontCard';

function App() {
  return (
    <div className="container">
      <div className='first-background'>
        <FrontCard />
        <BackCard />
      </div>
      <div className='form-contain'></div>
    </div>
  );
}

export default App;
