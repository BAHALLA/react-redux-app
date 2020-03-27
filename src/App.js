import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from "./redux/store";
import BooksContainer from "./components/BooksContainer";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <BooksContainer/>
           {/* <ItemContainer/>
            <ItemContainer cake/>
            <IceCreamComponent/>
            <NewCakeContainer/>*/}
        </Provider>
    </div>
  );
}

export default App;
