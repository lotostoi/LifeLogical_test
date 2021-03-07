export default {

    namespaced: true,

    state: {
        all: [],
       
    },
    getters: {
        all: state => state.all,
     /*    place: state => state.place, */
    },
    mutations: {
        add(state, payload) {  
          /*   if (payload.place && payload.place === 'center') {
                state.all[0] = payload
            } else { */
                state.all.push(payload)
           /*  }

            if (payload.place) {
                state.place = payload.place
            } */
        },  
        dellByIndex(state, id) {
            const index = state.all.findIndex(a => a.id === id)
            state.all.splice(index, 1)
        }
    },
    actions: {
        add({ commit }, payload) {

            const id = Date.now()
        
            commit('add', { ...payload, id: id })

            if (payload.timeout) {

                setTimeout(() => commit('dellByIndex', id), payload.timeout)
            }
        }
    }

}