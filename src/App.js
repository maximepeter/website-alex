import React, { Component } from "react";
import "./App.css";
import DrawingPage from "./Components/DrawingPage/DrawingPage";
import Contact from "./Components/Contact/Contact";
import NoMatch from "./Components/NoMatch/NoMatch";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Route} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div id="router">
					<BrowserRouter basename={"/"}>
						<div id="flex-container">
							<div id="sidebar">
								<Sidebar />
							</div>
							<div id="main">
								<div id="content">
									<Header />
										<Route exact path={"/"} component={Home} />
										<Route exact path={"/draw"} component={DrawingPage} />
										<Route exact path="/contact" component={Contact} />
									<Footer />
								</div>
							</div>
						</div>
					
					</BrowserRouter>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
