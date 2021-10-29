import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import NavBar from "../components/NavBar.js";
import CartContainer from "../components/CartContainer";
import ItemDetailContainer from "../components/ItemDetailContainer.js";
import ItemListContainer from "../components/ItemListContainer.js";
import NotFound from "../components/NotFound.js";


const Routes = () => {
return (

<BrowserRouter>
    <NavBar />
    <Switch>

        <Route exact path="/">
            <ItemListContainer />
        </Route>
        <Route exact path="/category/:category">
            <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
            <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
            <CartContainer />
        </Route>
        <Route path="*">
            <NotFound/>
        </Route>

    </Switch>
    
</BrowserRouter>

)}

export default Routes;