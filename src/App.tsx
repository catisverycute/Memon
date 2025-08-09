import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import type { JSX } from 'react';

function App(): JSX.Element {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[390px] h-screen bg-white shadow-xl rounded-[36px] overflow-hidden">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
