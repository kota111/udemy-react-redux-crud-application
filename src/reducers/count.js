// actionで定義したアクションのタイプをインポート
import {INCREMENT,DECREMENT} from "../actions";

// stateの初期値を定義
const initialState = {value:0}

// countReducerを定義
// この関数の内部で受け取ったアクションに応じてどんな処理をするかを定義
export default (state=initialState,action)=>{
    // action.typeでどんなアクションかを拾う
    switch (action.type){
        case INCREMENT:
            return {value: state.value+1}
        case DECREMENT:
            return {value: state.value-1}
        default:
            return state
    }
}