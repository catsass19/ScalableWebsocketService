
const states = {
    userId: null,
};

const mutations = {
    setUserId(state, id) {
        state.userId = id;
    },
};

const actions = {

};

const getters = {
    getUserId(state) {
        return state.userId;
    },
};

export default {
    state: states,
    mutations,
    actions,
    getters,
};
