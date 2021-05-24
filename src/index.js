import React from 'react';
import ReactDOM from 'react-dom';
import './styles/pages/index.css';
import './styles/global.css';

import { Card } from './components/CardComponent';

const App = () => {
  return (
    <main>
      <Card />
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
