import React from "react";
import Contacts from "./Component/elements/contacts/Contacts";
import Navbar from "./Component/elements/Navbar";
import "./styles/App.scss";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./Component/elements/contacts/AddContact";
import EditContact from "./Component/elements/contacts/EditContact";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            <div className="py-3 ">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contacts/add" component={AddContact}/>
                <Route exact path="/contacts/edit/:id" component={EditContact}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
