import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ModalProvider, Modal } from "./context/Modal";
import configureStore from "./store";
import * as sessionActions from "./store/session";
import App from "./App";

import "./index.css";
import { ShoppingCartProvider } from "./context/ShoppingCart";
import { ManageAccountProvider } from "./context/AccountView";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
	window.store = store;
	window.sessionActions = sessionActions;
}

// let userId = useSelector(state => state.session.user.id)
// console.log("store from root: ", store)

// Wrap the application with the Modal provider and render the Modal component
// after the App component so that all the Modal content will be layered as
// HTML elements on top of the all the other HTML elements:
function Root() {
	return (
		<ModalProvider>
			<Provider store={store}>
				<ShoppingCartProvider>
					<ManageAccountProvider>
						<BrowserRouter>
							<App />
							<Modal />
						</BrowserRouter>
					</ManageAccountProvider>
				</ShoppingCartProvider>
			</Provider>
		</ModalProvider>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById("root")
);
