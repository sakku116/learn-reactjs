const root = ReactDOM.createRoot(document.querySelector('#root'));

function SearchSection () {
    return (
        <div className="searchSection">
            <input type="text" placeholder="search..."/>
            <div className="search_in-stock-checkbox">
                <input type="checkbox"/>
                <label>Only show products in stock</label>
            </div>
        </div>
    )
};

function ProductCategoryRow ({name}) {
    return (
        <tr> 
            <td colSpan="2"><strong>{name}</strong></td>
        </tr>
    )
};

function ProductRow ({name, price}) {
    return (
        <tr>
            <td>{name}</td> 
            <td>{price}</td>
        </tr>
    )
};

function ProductSection () {
    return (
        <table>
            <tr> <td>Name</td> <td>Price</td> </tr>
            <ProductCategoryRow name="Sporting Goods" />
            <ProductRow name="Football" price="500" />
            <ProductRow name="Baseball" price="400" />
            <ProductRow name="Tennis" price="700" />

            <ProductCategoryRow name="Electronics" />
            <ProductRow name="Ipod Touch" price="1000" />
            <ProductRow name="Iphone" price="1000" />
        </table>
    )
};

// main container
const main = (
    <div>
        <SearchSection />
        <ProductSection />
    </div>
) 

root.render(main);