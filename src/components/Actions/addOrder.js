export const addOrder = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/orders', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(order => dispatch({type: "ADD_ORDER", payload: order}))
    }
}
