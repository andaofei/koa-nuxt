const state = () => ({
  listdata: ['北京', '天津', '香港']
})

const mutations = {
  add(state, text) {
    state.listdata.push(text)
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
