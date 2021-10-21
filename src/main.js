import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    usersReviews: []
  },
});
export default store;


new Vue({
  el: '#app',
  render: h => h(App),
  store
})


window.onload = function(){
  document.querySelector('#btn').onclick = dataForm;
  function dataForm(){
    let userName = document.querySelector('#userName').value;
    let userSurname = document.querySelector('#userSurname').value;
    let userAge = document.querySelector('#userAge').value;
    let userReview = document.querySelector('#userReview').value;
    let reviewItem = {
      "userName": "",
      "userSurname": "",
      "userAge": "",
      "userReview": "",
    };
    reviewItem["userName"] = userName;
    reviewItem["userSurname"] = userSurname;
    reviewItem["userAge"] = userAge;
    reviewItem["userReview"] = userReview;
    store.state.usersReviews = reviewItem;
    document.querySelector('#userName').value = "";
    document.querySelector('#userSurname').value = "";
    document.querySelector('#userAge').value = "";
    document.querySelector('#userReview').value = "";
  }
}


