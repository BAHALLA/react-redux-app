import React from 'react';
import './App.css';
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {
    const notify = () => {
        toast.success('Success notification', { position: toast.POSITION.TOP_LEFT});
        toast.info('Info notification', { position: toast.POSITION.BOTTOM_RIGHT});
        toast.warn('Warn notification', { position: toast.POSITION.TOP_RIGHT});
        toast.error('error notification', { position: toast.POSITION.BOTTOM_CENTER});
        toast('basic notification', { position: toast.POSITION.BOTTOM_LEFT, autoClose: false});
    };
  return (
      <div className="App">
          <button onClick={ notify }>Notify</button>
      </div>
  );
}

export default App;
