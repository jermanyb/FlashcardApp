import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DecksList from "../Home/DecksList";
import StudyScreen from "../Study/StudyScreen";
import Deck from "../DeckScreen/Deck";
import CreateDeckComp from "../CreateDeck/CreateDeckComp";
import EditDeckScreen from "../EditDeck/EditDeckScreen";
import CreateCard from "../Components/CreateCard";
import EditCard from "../Components/EditCard";
// Home screen
// <Route> is checking if the exact path is /, then display DecksList on that page

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <CreateDeckComp />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyScreen />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeckScreen />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            {" "}
            {/*Add Card*/}
            <CreateCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            {" "}
            {/*Edit Card */}
            <EditCard />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            {" "}
            {/*Deck Screen*/}
            <Deck />
          </Route>
          <Route exact path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            {" "}
            {/*Home*/}
            <DecksList />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}
export default Layout;
