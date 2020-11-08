// このindex.jsでアプリケーション内にある全てのReducerを総括する

// combineReducers関数でReducerたちを結合させる
import {combineReducers} from "redux";
import count from './count'

// combineReducersでcountを結合（今回はcountしかないが）
export default combineReducers({count});
