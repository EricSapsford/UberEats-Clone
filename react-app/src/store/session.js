//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================
//=================================== CONSTANTS ===================================


const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const GET_CURRENT_WALLET = "session/GET_CURRENT_WALLET"
const UPDATE_CURRENT_WALLET = "session/UPDATE_CURRENT_WALLET"

//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================
//================================ ACTION CREATORS ================================



const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

const updateCurrentWallet = (wallet) => ({
	type: UPDATE_CURRENT_WALLET,
	payload: wallet
})

const getCurrentWallet = (wallet) => ({
	type: GET_CURRENT_WALLET,
	payload: wallet
})




//===================================== THUNKS ====================================
//===================================== THUNKS ====================================
//===================================== THUNKS ====================================
//===================================== THUNKS ====================================

export const getCurrentWalletThunk = () => async (dispatch) => {
	const res = await fetch ("/api/auth/wallet", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})

	if (res.ok) {
		const { wallet } = await res.json()
		dispatch(getCurrentWallet(wallet))
		return wallet
	} else {
		const errors = await res.json();
		return errors
	}
}

export const updateCurrentWalletThunk = (amount) => async (dispatch) => {
	const res = await fetch ("/api/auth/wallet/update", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			amount
		})
	})

	if (res.ok) {
		const wallet = await res.json();
		dispatch(updateCurrentWallet(wallet))
		return wallet
	} else {
		const errors = await res.json();
    return errors
	}
}


export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};



export const login = (email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};

export const signUp = (firstName, lastName, streetAddress, email, username, password) => async (dispatch) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			first_name: firstName,
			last_name: lastName,
			street_address: streetAddress,
			email,
			username,
			password
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================
//===================================== REDUCER ===================================

const initialState = { user: null };

export default function sessionReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return { user: action.payload };

		case GET_CURRENT_WALLET: {
			// return { user.wallet: action.payload};
			const newState = { ...state }
			newState.user.wallet = action.payload
			return newState;
		}

		case UPDATE_CURRENT_WALLET: {
			const newState = { ...state }
			newState.user.wallet = action.payload
			return newState;
		}

		case REMOVE_USER:
			return { user: null };

		default:
			return state;
	}
}
