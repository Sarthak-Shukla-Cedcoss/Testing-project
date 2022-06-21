import {createStore} from 'redux'
import cakeReduces from './cake/cakeReduces'

const store = createStore(cakeReduces)
export default store 