import {GET_COMMENTS_ENDPOINT, GET_POSTS_ENDPOINT} from './constants';
const commentsForPostEndPoint = id => `${GET_COMMENTS_ENDPOINT}?postId=${id}`;
const deletePost = id => `${GET_POSTS_ENDPOINT}/${id}`;
const editPost = id => `${GET_POSTS_ENDPOINT}/${id}`;

export {
    commentsForPostEndPoint,
    deletePost,
    editPost
}