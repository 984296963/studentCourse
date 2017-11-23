<template>
	<div class="scInfo">
		<el-row class='searchBar'>
			<el-col :span="6">
				<el-input placeholder="请输入关键字" prefix-icon="search" v-model="keywords">
				</el-input>
			</el-col>
			<el-col :span='18' style='text-align:right'>
				<el-button type="text" @click='handleSingleImport'>单个导入</el-button>
				<!-- <el-button type="text">批量导入</el-button> -->
			</el-col>
		</el-row>

		<el-row>
			<el-col :span="24">
				<el-table :data="scs" style="width: 100%">
					<el-table-column prop="s.name" label="姓名">
					</el-table-column>
					<el-table-column prop="c.name" label="课程">
					</el-table-column>
					<el-table-column prop="sc.grade" label="成绩">
					</el-table-column>

					<el-table-column label="操作" width="180">
						<template slot-scope="scope">
							<el-button size="small" @click="handleEdit(scope.$index, scope.row)">打分</el-button>
							<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>
		
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="学生姓名" >
					<el-select v-model="form.student_id" placeholder="请选择">
						<el-option v-for="item in students" :key="item.id" :label="item.name" :value="item.id">
						</el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="课程" >
					<el-select v-model="form.course_id" placeholder="请选择">
						<el-option v-for="item in courses" :key="item.id" :label="item.name" :value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="handleSubmit">确 定</el-button>
			</div>
		</el-dialog>
		
		<el-dialog :title="title" :visible.sync="dialogVisible2">
			<el-form :model="form1">
				<el-form-item label="成绩" >
					<el-input v-model="form1.grade" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible2 = false">取 消</el-button>
				<el-button type="primary" @click="markGrade()">确 定</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex';

	export default{
		name:'scInfo',
		data(){
			return {
				keywords:'',
				dialogFormVisible:false,
				dialogVisible2:false,
				form:{},
				title:'',
				form1:{}
			}
		},
		created:function(){
			this.findAllSc();
			this.findAllCourse();
			this.findAllStudent();
		},
		computed:{
			...mapGetters(['scs','courses','students'])
		},
		methods:{
			...mapActions([
				'findAllSc',
				'findAllCourse',
				'findAllStudent',
				'saveSc',
				'cancelCourse',
				'mark'
			]),
			handleSingleImport(){
				this.dialogFormVisible = true;
				this.form = {};
				this.title = '录入选课信息';
			},
			handleSubmit(){
				this.dialogFormVisible = false;
				this.saveSc(this.form).then((result)=>{
					this.$message({
						type: 'success',
						message: `操作成功`
					});
				}).catch((error)=>{
					this.$message({
						type: 'error',
						message: `操作失败`
					});
				});
			},
			handleDelete(index,row){
				this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.cancelCourse(row).then((result)=>{
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					}).catch((err)=>{
						this.$message({
							type: 'error',
							message: `操作失败`
						});
					})
				}).catch((error)=>{
					this.$message({
						type: 'error',
						message: `取消删除`
					});
				})
			},
			handleEdit(index,row){
				this.dialogVisible2 = true;
				this.title = '打分';
				this.form1 = row.sc;
			},
			markGrade(){
				this.dialogVisible2 = false;
				this.mark(this.form1).then((result)=>{
					this.$message({
						type: 'success',
						message: `操作成功`
					});
				}).catch((error)=>{
					this.$message({
						type: 'error',
						message: `操作失败`
					});
				});
			},
			// findStu(keywords){
			// 	this.findCourseByStudentId(keywords);
			// }
		}
	}
</script>