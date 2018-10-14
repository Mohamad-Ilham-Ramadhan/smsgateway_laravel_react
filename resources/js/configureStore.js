import { createStore } from 'redux';
import route from '@/reducers';

const store = createStore(route);

export default store;   