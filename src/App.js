import React from 'react';
import { MonthContainer } from './components/month/Month-container';
import ToolbarView from '../src/components/toolbarView/toolbarView';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <ToolbarView/>
        <MonthContainer/>
      </div>
    );
}

export default App;
