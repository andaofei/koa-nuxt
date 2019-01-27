const state = () => ({
  navdata: ['北京']
})

const mutations = {
  add(state, text) {
    state.navdata.push(text)
  }
}

const actions = {
  add: ({ commit }, text) => {
    commit('add', text)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
