import Vue from 'vue'
import Vuex from 'vuex'
import StudentStore from './StudentStore'
import CourseStore from './CourseStore'
import ClassStore from './ClassStore'
import scStore from './scStore'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		StudentStore,
		CourseStore,
		ClassStore,
		scStore
	}
})