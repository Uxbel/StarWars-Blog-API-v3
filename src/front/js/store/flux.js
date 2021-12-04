const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorite: []
		},
		actions: {
			loadingData: str => {
				fetch("https://swapi.dev/api/" + str + "/")
					.then(res => res.json())
					.then(data => setStore({ [str]: data.results }))
					.catch(error => console.log(error));
			},
			addFavorite: item => {
				const store = getStore();
				const validate = store.favorite.includes(item);
				if (!validate) {
					setStore({ favorite: [...store.favorite, item] });
				}
			},

			deleteFavorite: name => {
				const store = getStore();
				const updatedList = [...store.favorite];
				const isMyName = element => element.name == name;
				const index = updatedList.findIndex(isMyName);
				updatedList.splice(index, 1);
				setStore({ favorite: [...updatedList] });
			}
		}
	};
};

export default getState;
