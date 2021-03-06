/*
function dibawah merupakan react element dan harus menggunakan kapital pada huruf pertama. 
script ini harus menggunakan JSX untuk membuat element html dalam javascript.
jika tanpa JSX, bisa menggunakan React.createElement(type, props, child) untuk membuat element.
*/ 
function Element1 () {
    return (
        <h1>element 1</h1>
    )
}

function Element2 () {
    return (
        <ul>
            <li>thing 1</li>
            <li>thing 2</li>
        </ul>
    )
}

ReactDOM.render(
    <div>
        <Element1 />
        <Element2 />
    </div>,
    document.querySelector('#root')
)
/*
react element harus mereturn 1 element. jika lebih harus dibungkus dengan container
*/