// Creating Reducers for different kinf actions
export default (posts = [], action)=>{
    switch (action.type){
        // case for Fetching all post data
        case 'FETCH_ALL':
            return action.payload;
        // case for creating post data
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}