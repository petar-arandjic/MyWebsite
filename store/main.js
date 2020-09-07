export const state = () => ({
  showPreLoading: false,
  backgroundColor: 'white'
})

export const getters = {
  getShowPreLoading: state => state.showPreLoading,
  getBackgroundColor: state => state.backgroundColor
}

export const mutations = {
  togglePreLoading: (state, isShown) => { state.showPreLoading = isShown },
  changeBackgroundColor: (state, newBackgroundColor) => { state.backgroundColor = newBackgroundColor }
}
