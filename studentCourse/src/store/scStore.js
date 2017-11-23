import axios from 'axios'

export default{
	state:{
		scs:[],
		url:'http://47.95.225.58:3000/sc/'
	},
	getters:{
		scs:state=>state.scs,
	},
	mutations:{
		alterSc:(state,data)=>{
			state.scs = data;
		}
	},
	actions:{
		findAllSc:(context)=>{
			var urll = this.a.state.url+'findSelectedCourse';
			axios.get(urll).then(function({data}){
				context.commit('alterSc',data)
			})
		},
		saveSc:(context,form)=>{
			var urll = this.a.state.url+'selectCourse?';
			var studentId = form.student_id;
			var courseId = form.course_id;
			var newUrl = urll+'studentId='+studentId+'&'+'courseId='+courseId;

			return new Promise((resolve,reject)=>{
				axios.get(newUrl).then(function(result){
					//保存成功之后
					context.dispatch('findAllSc');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		cancelCourse:(context,row)=>{
			var studentId = row.s.id;
			var courseId = row.c.id;
			var urll = this.a.state.url+'cancelCourse?';
			var newUrl = urll+'studentId='+studentId+'&'+'courseId='+courseId;

			return new Promise((resolve,reject)=>{
				axios.get(newUrl).then(function(result){
					//保存成功之后
					context.dispatch('findAllSc');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		mark:(context,row)=>{
			var id = row.id;
			var grade = row.grade;
			var urll = this.a.state.url+'mark?';

			// var urll = 'http://47.95.225.58:3000/sc/mark?';
			var newUrl = urll+'id='+id+'&'+'grade='+grade;

			return new Promise((resolve,reject)=>{
				axios.get(newUrl).then(function(result){
					//保存成功之后
					context.dispatch('findAllSc');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		// findCourseByStudentId:(context,stuName)=>{
		// 	var urll = this.a.state.url+'query/'+stuName;
		// 	console.log(urll);
		// 	axios.get(urll).then(function({data}){
		// 		context.commit('alterSc',data);
		// 	})
		// }
	}
}