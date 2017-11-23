import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/pages/student/index'
import StudentInfo from '@/pages/student/info'
import Course from '@/pages/course/index'
import CourseInfo from '@/pages/course/info'
import Class from '@/pages/class/index'
import ClassInfo from '@/pages/class/info'
import sc from  '@/pages/sc/index'
import scInfo from '@/pages/sc/info'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/student',
      component: Student,
      children:[{
      	path:'info',
      	component:StudentInfo,
      }]
    },
    {
      path: '/course',
      component: Course,
      children:[{
        path:'info',
        component:CourseInfo,
      }]
    },
    {
      path: '/class',
      component: Class,
      children:[{
        path:'info',
        component:ClassInfo,
      }]
    },
    {
      path: '/sc',
      component: sc,
      children:[{
        path:'info',
        component:scInfo,
      }]
    }
  ]
})
