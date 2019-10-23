import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Amaro Porano', duration: '3:49' },
		{ title: 'Aj a vora badole', duration: '3:25' },
		{ title: 'Kisiko Muskarane', duration: '3:30' },
		{ title: 'Elo Ji Sanam', duration: '5:20' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if(action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});


