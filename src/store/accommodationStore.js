import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "https://bws.enviousdigital.co.uk/api/";

export const accommodationStore = new Vuex.Store({
  state: {
    types: []
  },
  actions: {
    getAccommodationTypes ({ commit }) {
      axios.get("accommodationtype").then(result => {
        if (result.data.success) { commit("setAccommodationTypes", result.data.accommodationtypes) }
      }).catch(error => {
        throw new Error(`API ${error}`);
      })
    }
  },
  mutations: {
    setAccommodationTypes (state, types) {
      this.state.types = types;
    }
  }
});
