import {storeProducts} from '../data';
import {detailProduct} from '../data';

// componentDidMount() {
//     this.setProducts()
// };
// setProducts = () =>{
//     let temp= [];
//     storeProducts.forEach(item => {
//         const singleItem = {...item};
//         temp=[...temp, singleItem];
//         return temp
//     });
// };

export default function manageStore(state= 
    { products: storeProducts, product: detailProduct, modalOpen: false, modalProduct: detailProduct ,shoppingCart: [], cartSubTotal: 0, cartTax: 0, cartTotal: 0 }, action) {
        switch (action.type) {
            case 'ADD_TO_CART':
                const tempProducts = [...state.products];
                const index = tempProducts.indexOf(action.product);
                const product = tempProducts[index];
                product.inCart = true;
                product.count = 1;
                const price = product.price;
                product.total= price;
                return {products: tempProducts, shoppingCart: [...state.shoppingCart, product ]}

            case 'OPEN_MODAL':
                return {...state, modalProduct: action.product, modalOpen: true, product: action.product}

            case 'CLOSE_MODAL':
                 return {...state, modalOpen: false}

            case 'INCREMENT':
                console.log("This is increment")

            case 'DECREMENT':
                console.log("This is decrement")

            case 'EMPTY_CART':
                console.log("The cart is empty")

            case 'FIND_PRODUCT':
                const selectedProduct = state.products.find(product => product.id === action.id);
                return { ...state, product: selectedProduct}

            default:
                return state;
        }  
    }