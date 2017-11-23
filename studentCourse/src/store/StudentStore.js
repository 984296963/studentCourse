import axios from 'axios'

export default{
	state:{
		students:[],
		url:'http://47.95.225.58:3000/student/'
	},
	getters:{
		students:state=>state.students
	},
	mutations:{
		alterStudents:(state,data)=>{
			state.students = data;
		}
	},
	actions:{
		deleteStudent:(context,row)=>{
			var ids = {ids:JSON.stringify([row.id])};
			var urll = this.a.state.url+'batchDelete';
			return new Promise((resolve,reject)=>{
				axios.post(urll,ids).then(function(result){
					context.dispatch('findAllStudent');
					resolve(result);
				}).catch((error)=>{
					console.log(error);
					reject(error)
				})
			})
		},
		updateStudent:(context,form)=>{
			var urll = this.a.state.url+'update';

			return new Promise((resolve,reject)=>{
				axios.post(urll,form).then(function(result){
					//保存成功之后
					context.dispatch('findAllStudent');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		saveStudent:(context,form)=>{
			var urll = this.a.state.url+'save';

			return new Promise((resolve,reject)=>{
				axios.post(urll,form).then(function(result){
					//保存成功之后
					context.dispatch('findAllStudent');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		findAllStudent:(context)=>{
			console.log(this);
			var urll = this.a.state.url+'findAll';

			axios.get(urll).then(function({data}){
				context.commit('alterStudents',data)
			})
		}
	}
}