
export default function manageStore(state= 
    { products: [], shoppingCart: [] }, action) {
        switch (action.type) {
            // case 'ADD_RESTAURANT':
            //   const restaurant = {
            //     id: cuid(),
            //     text: action.text
            //   }
            //   return { ...state, restaurants: [...state.restaurants, restaurant] }
              
            // case 'DELETE_RESTAURANT':
            //   const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            //   return { ...state, restaurants };

            // case 'ADD_REVIEW':
            // const review = {
            //     id: cuid(),
            //     text: action.review.text,
            //     restaurantId: action.review.restaurantId
            // }
            // return { ...state, reviews: [...state.reviews, review] }
            
            // case 'DELETE_REVIEW':
            //     const reviews = state.reviews.filter(review => review.id !== action.id);
            //     return {...state, reviews }
          
            default:
              return state;
        }  
    }