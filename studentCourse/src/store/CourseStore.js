import axios from 'axios'

export default{
	state:{
		courses:[],
		url:'http://47.95.225.58:3000/course/'
	},
	getters:{
		courses:state=>state.courses
	},
	mutations:{
		alterCourses:(state,data)=>{
			state.courses = data;
		}
	},
	actions:{
		findAllCourse:(context)=>{
			var urll = this.a.state.url+'findAll';
			axios.get(urll).then(function({data}){
				context.commit('alterCourses',data)
			})
		},
		saveCourse:(context,form)=>{
			var urll = this.a.state.url+'save';

			return new Promise((resolve,reject)=>{
				axios.post(urll,form).then(function(result){
					//保存成功之后
					context.dispatch('findAllCourse');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		updateCourse:(context,form)=>{
			var urll = this.a.state.url+'update';

			return new Promise((resolve,reject)=>{
				axios.post(urll,form).then(function(result){
					//保存成功之后
					context.dispatch('findAllCourse');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		deleteCourse:(context,row)=>{
			var urll = this.a.state.url+'batchDelete';

			var ids = {ids:JSON.stringify([row.id])};
			return new Promise((resolve,reject)=>{
				axios.post(urll,ids).then(function(result){
					context.dispatch('findAllCourse');
					resolve(result);
				}).catch((error)=>{
					console.log(error);
					reject(error)
				})
			})
		}



	}
}