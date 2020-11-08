// アクションとはJavaScriptのオブジェクトのこと
// タイプとタイプに対応する値を持つ

// ほかのファイルでも使えるようにexport
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT'


// アクションを返すexportする関数
export const increment = ()=>({
    type:INCREMENT
})

export const decrement = ()=>({
    type:DECREMENT
})

