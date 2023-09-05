// Creating Reducers for different kinf actions
export default (posts = [], action)=>{
    switch (action.type){
        // case for Fetching all post data
        case 'FETCH_ALL':
            return action.payload;
        // case for creating post data
        case 'CREATE':
            return [...posts, action.payload];
        // case for updating post
        case 'UPDATE':
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post);

        // case for Deleteing post data
        case 'DELETE':
            return posts.filter((post)=> post._id != action.payload );
        default:
            return posts;
    }
}