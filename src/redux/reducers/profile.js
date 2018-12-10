import actionTypes from '../actionType/profile';

const initialState = {
    entities: {
        "1": {
            id: "1",
            name: "Phạm Khắc Quyền",
            nickname: "@QuyenPhamKhac",
            birthday: "1996-10-07",
            phone: "0978165924",
            joinedAt: "2018-10-10",
            bio: "I'm a dreaming web developer.",
            location: "18 Nguyễn Thị Nhỏ, TP. HCM",
            website: "fb/quyen.pham.khac.9",
            avatar: "https://pbs.twimg.com/profile_images/1069150269902966784/L24DeNKF_400x400.jpg",
            bandwidth: 86400,
        }
    },
    ids: ["1"],
}

const profile = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_PROFILE: 
            const {id} = action.payload;
            let entities = {...state.entities};
            entities[id] = Object.assign({}, entities[id], action.payload);
            return {
                ...state,
                entities,
            }
        default:
            return state;
    }
};

export default profile;