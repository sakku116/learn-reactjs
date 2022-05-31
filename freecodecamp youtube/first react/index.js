// menambahkan children pada element '#root'
// tidak dapat menggunakan render berulang pada satu element seperti '#root'
ReactDOM.render(<h1>Hello World!</h1>, document.querySelector('#root'))

/*
function dibawah merupakan react element dan harus menggunakan kapital pada huruf pertama. 
react element harus mereturn 1 element. jika lebih harus dibungkus dengan container
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