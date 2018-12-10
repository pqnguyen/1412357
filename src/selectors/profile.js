import {createSelector} from 'reselect';

const getProfileState = state => state.profile;

export const getMyProfile = createSelector(
    [getProfileState],
    ({ entities, ids }) => entities[ids[0]], 
);