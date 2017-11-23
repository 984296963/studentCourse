<template>
	<div class="courseInfo">
		<el-row class='searchBar'>
			<el-col :span="6">
				<el-input placeholder="请输入关键字" icon="search" v-model="keywords">
				</el-input>
			</el-col>
			<el-col :span='18' style='text-align:right'>
				<el-button type="text" @click='handleSingleImport'>单个导入</el-button>
				<!-- <el-button type="text">批量导入</el-button> -->
			</el-col>
		</el-row>

		<el-row>
			<el-col :span="24">
				<el-table :data="courses" style="width: 80%">
					<el-table-column prop="name" label="课程名称">
					</el-table-column>
					<el-table-column prop="credit" label="学分">
					</el-table-column>
					<el-table-column label="操作" width="180">
						<template slot-scope="scope">
							<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>

		<el-dialog :title="title" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="课程名称" >
					<el-input v-model="form.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="学分" >
					<el-input v-model="form.credit" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="handleSubmit">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex';

	export default{
		name:'courseInfo',
		data(){
			return {
				keywords:'',
				dialogFormVisible:false,
				form:{},
				title:''
			}
		},
		created:function(){
			this.findAllCourse();
		},
		computed:{
			...mapGetters(['courses'])
		},
		methods:{
			...mapActions([
				'findAllCourse',
				'saveCourse',
				'updateCourse',
				'deleteCourse'
			]),
			handleSingleImport(){
				this.dialogFormVisible = true;
				this.form = {};
				
				this.title = '录入课程信息';
			},
			handleSubmit(){
				this.dialogFormVisible = false;
				if(this.form.id){
					this.updateCourse(this.form).then((result)=>{
						this.$message({
							type: 'success',
							message: `操作成功`
						});
					}).catch((error)=>{
						this.$message({
							type: 'error',
							message: `操作失败`
						});
					})
				}else{
					this.saveCourse(this.form).then((result)=>{
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
				}
			},//hendleSubmit
			handleEdit(index,row){
				this.dialogFormVisible = true;
				this.title = '修改课程信息';
				this.form = row;
			},
			handleDelete(index,row){
				this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.deleteCourse(row).then((result)=>{
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
		}

	}
</script>