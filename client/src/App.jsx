import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Navigation from "./components/nav";
import Signup from "./pages/signup";
import Grincher from "./pages/grincher";
import Contact from "./pages/contact";
import Page404 from "./pages/404";
import WebhookT from "./pages/webhookTools";
import userContext from "./hooks/userContext";

export default function App(props) {
	const [user, setUser] = useState(null);

  fetch("/api/getUser")
  .then((res) => res.json())
  .then((out) => {
    if (!out.error && out.data) setUser(out.data);
  });
	return (
		<div className="App">
			<Router>
				<userContext.Provider value={{ user, setUser }}>
					<Navigation />
					<Switch>
						<Route path="/" exact component={() => <Home />} />
						<Route
							path="/contact"
							exact
							component={() => <Contact />}
						/>
						<Route
							path="/grincher"
							exact
							component={() => <Grincher />}
						/>
						<Route
							path="/signUp"
							exact
							component={() => <Signup />}
						/>
						<Route
							path="/Login"
							exact
							component={() => <Login />}
						/>
						<Route
							path="/Webhook"
							exact
							component={() => <WebhookT />}
						/>
						<Route component={() => <Page404 />} />
					</Switch>
				</userContext.Provider>
			</Router>
		</div>
	);
}
