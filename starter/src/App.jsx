import React from 'react';

import Actors from './actors/Actors';
import Films from './films/Films';
import Footer from './main/Footer';
import Header from './main/Header';
import Home from './main/Home';

import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    return (
	<Router>
        <React.Fragment>
            <Header />
            <main className="row">
               <Route exact path="/" component = {Home} />
			   <Route path = "/films" component = {Films} />
			   <Route path = "/actors" component = {Actors} />
            </main>
            <Footer />
        </React.Fragment>
	</Router>
    );
}


export default App;
