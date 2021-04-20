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
    { products: storeProducts, Product: detailProduct ,shoppingCart: [] }, action) {
        switch (action.type) {
 
            case 'FIND_PRODUCT':
                const selectedProduct = state.products.find(product => product.id === action.id);
                return { ...state, product: selectedProduct}

            default:
              return state;
        }  
    }