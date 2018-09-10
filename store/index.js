/**
 @author zengwei
 @time 2018/6/9
 **/

 // 使用vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// window.fetch() 的 Polyfill
import axios from 'axios'

const store = () => new Vuex.Store({
  state: {
    counter: 100,
    token: 'a1234567890',
    authUser: null
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    SET_USER: function (state, user) {
      state.authUser = user
    }
  },
  actions: {
    nuxtServerInit ({ commit }, { req }) {
      console.log('进来了nuxtServerInit')
      console.log(req.session.authUser)
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    },
    login ({ commit }, { username, password, self }) {
      // console.log(username)
      // console.log(password)
      return axios('/api/login', {
        // 发送客户端 cookies 到服务端
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          username,
          password
        })
      })
        .then((res) => {
          if (res.status === 401) {
            throw new Error('Bad credentials')
          } else {
            return res
          }
        })
        .then((res) => {
          // console.log('username = ' + res.data.username)
          commit('SET_USER', res.data.username)
          return res;
        })
        .then((res) => {
          // console.log(username)
          self.$router.push({path: '/secret'})
        })
    },
    logout ({ commit }, {self}) {
      return axios('/api/logout', {
        // 发送客户端 cookies 到服务端
        credentials: 'same-origin',
        method: 'POST'
      })
        .then(() => {
          commit('SET_USER', null)
        })
        .then(() => {
          // console.log(username)
          self.$router.push({path: '/'})
        })
    }
  },

})

export default store
