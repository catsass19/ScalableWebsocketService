
const states = {
    userId: null,
    serverId: null,
};

const mutations = {
    setUserId(state, id) {
        state.userId = id;
    },
    setServerId(state, id) {
        state.serverId = id;
    },
};

const actions = {

};

const getters = {
    getUserId(state) {
        return state.userId;
    },
    getServerId(state) {
        return state.serverId;
    },
};

export default {
    state: states,
    mutations,
    actions,
    getters,
};
