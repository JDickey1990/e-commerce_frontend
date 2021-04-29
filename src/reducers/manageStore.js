import {storeProducts} from '../data';
import {detailProduct} from '../data';

// componentDidMount() {
//     this.setProducts()
// };
// const setProducts = () =>{
//     let temp= [];
//     storeProducts.forEach(item => {
//         const singleItem = {...item};
//         temp=[...temp, singleItem];
//         return temp
//     });
// };

export default function manageStore(state= 
    { products: [], product: detailProduct, modalOpen: false, modalProduct: detailProduct ,shoppingCart: [], cartSubTotal: 0, cartTax: 0, cartTotal: 0, orders:[] }, action) {
        switch (action.type) {

            case 'SET_PRODUCTS':
                let temp= [];
                storeProducts.forEach(item => {
                const singleItem = {...item};
                temp=[...temp, singleItem];
                })
                return {...state, products: temp}

            case 'ADD_TO_CART':
                const tempProducts = [...state.products];
                const index = tempProducts.indexOf(action.product);
                const product = tempProducts[index];
                product.inCart = true;
                product.count = 1;
                const price = product.price;
                product.total= price;
                return {...state, products: tempProducts, shoppingCart: [...state.shoppingCart, product ]}

            case 'OPEN_MODAL':
                return {...state, modalProduct: action.product, modalOpen: true, product: action.product}

            case 'CLOSE_MODAL':
                 return {...state, modalOpen: false}

            case 'INCREMENT':
                console.log("This is increment")
                return{...state}

            case 'DECREMENT':
                console.log("This is decrement")
                return{...state}

            case 'REMOVE_ITEM':
                let psuedoProducts = [...state.products]
                let tempCart = [...state.shoppingCart]
                tempCart = tempCart.filter(item =>  item.id !== action.product.id)
                let placeholder = psuedoProducts.indexOf(action.product)
                let removedProduct = psuedoProducts[placeholder]
                removedProduct.inCart = false;
                removedProduct.count = 0;
                removedProduct.total = 0;
                return{ ...state, shoppingCart: tempCart, products:psuedoProducts }

            case 'EMPTY_CART':
                return{...state, shoppingCart: []}

            case 'ADD_TOTALS' :
               let subTotal = 0;
               action.shoppingCart.map(item => (subTotal += item.total));
               let tempTax = subTotal * 0.1;
               const tax = parseFloat(tempTax.toFixed(2));
               const total = subTotal + tax;
               return {...state, cartSubTotal: subTotal, cartTax: tax, cartTotal: total}
        

            case 'FIND_PRODUCT':
                const selectedProduct = state.products.find(product => product.id === action.id);
                return { ...state, product: selectedProduct}

            case 'ADD_ORDER':
                return {...state, orders: [...state.orders, action.payload]}

            case 'SET_ORDERS':
                return {...state, orders: action.payload}

            default:
                return state;
        }  
    }