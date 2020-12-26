export const ACTION_TYPE ={
    CREATE:'CREATE',
    UPDATE:"UPDATE",
    DELETE:"DELETE",
    FETCH_ALL:"FETCH_ALL"
}

export  const fetchAll = () => dispatch =>{
    dispatch({
        type:ACTION_TYPE.FETCH_ALL,
        payload:[]
    })
}