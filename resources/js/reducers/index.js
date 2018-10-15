import { combineReducers } from 'redux';

import route from './route';
import UI from './UI';

const reducers = combineReducers({route, UI});

export default reducers;