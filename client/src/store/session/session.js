import { sendMessage } from '../../websocket/init';

const states = {
    userId: null,
    serverId: null,
    messages: [],
};

const mutations = {
    setUserId(state, id) {
        state.userId = id;
    },
    setServerId(state, id) {
        state.serverId = id;
    },
    pushMessage(state, message) {
        console.log(message);
        state.messages.push(message);
        console.log(state.messages);
    },
};

const actions = {
    send(store, text) {
        sendMessage(text);
    },
};

const getters = {
    getUserId(state) {
        return state.userId;
    },
    getServerId(state) {
        return state.serverId;
    },
    getMessage(state) {
        return state.messages;
    },
};

export default {
    state: states,
    mutations,
    actions,
    getters,
};
