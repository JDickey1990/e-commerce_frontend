export const getOrders = () => {
    return (dispatch) => {
        console.log("hello")
        fetch('http://localhost:3001/api/v1/orders', { })
        .then(resp => resp.json())
        .then(order => dispatch({type: "SET_ORDERS", payload: order}))
    }
}
