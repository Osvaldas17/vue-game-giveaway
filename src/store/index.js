import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        allGames: [],
        sortedGames: [],
        messageFromApi: null,
        dataSplitIntoPages: [],
        currentPage: 0,
        singleGiveaway: {},
        sortOptions: {
            types: ["game", "loot", "beta"],
            platforms: ["pc", "steam", "epic-games-store", "ubisoft", "gog", "itchio", "ps4", "xbox-one", "switch", "android", "ios", "vr", "battlenet", "origin", "drm-free"],
            sortBy: ["date", "value", "popularity"],
        },
    },
    mutations: {
        setAllGames(state, payload) {
            state.allGames = payload
        },
        setSplitData(state, payload) {
            state.dataSplitIntoPages = payload
        },
        setSingleGiveaway(state, payload) {
            state.singleGiveaway = payload
        },
        setCurrentPage(state, payload) {
            state.currentPage = payload
        },
        setSortedGames(state, payload) {
            state.sortedGames = payload
        },
        setErrorMessage(state, payload) {
            state.messageFromApi = payload
            setTimeout(function () {
                state.messageFromApi = null
            }, 2000);
        }
    },
    actions: {
        async fetchAllGames({commit, dispatch}) {
            const games = await axios.get('http://167.99.138.67:4545/giveaways/all')
            commit('setAllGames', games.data)
            dispatch('splitDataIntoPages', games.data)
        },
        async fetchSpecificGiveaway({commit}, payload) {
            const games = await axios.get(`http://167.99.138.67:4545/giveaways/id/${payload}`)
            commit('setSingleGiveaway', games.data)
        },
        async fetchSortedGiveaways({commit, dispatch}, payload) {
            const {type, platform, sortBy} = payload
            const games = await axios.get(`http://167.99.138.67:4545/giveaways/sort/${platform}/${type}/${sortBy}`)
            commit('setSortedGames', games.data)
            if (games.data.status_message) {
                commit('setErrorMessage', games.data.status_message)
            } else {
                dispatch('splitDataIntoPages', games.data)
            }

        },
        splitDataIntoPages({commit}, payload) {
            const arr = [...payload]
            const gamePages = [];
            while (arr.length > 0) {
                const chunk = arr.splice(0, 10);
                gamePages.push(chunk);
            }
            commit('setSplitData', gamePages);
        }
    },
    modules: {}
})
