import { usersAPI } from "../api/api";

const FOLLOW = `FOLLOW`;
const UNFOLLOW = `UNFOLLOW`;
const SET_USERS = `SET-USERS`;
const SET_CURRENT_PAGE = `SET-CURRENT-PAGE;`
const SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`;
const TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`;
const TOGGLE_IS_FOLLOWING_PROGRESS = `TOGGLE_IS_FOLLOWING_PROGRESS`;

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            }
            return stateCopy;
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            }
            return stateCopy;
        }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }

        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userid] :
                    state.followingInProgress.filter(id => id !== action.userid)
            }
        }

        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id));
        usersAPI.unfollow(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(id));
                }
                dispatch(toggleIsFollowingProgress(false, id));
            });
}
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id));
        usersAPI.unfollow(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id));
                }
                dispatch(toggleIsFollowingProgress(false, id));
            });
    }
}

export default usersReducer;