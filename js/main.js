new Vue({
	el:'#app',
	data:{
		thing:'thingy',
		tasks:[
			{body: 'Go to the store',completed:false},
			{body: 'Go to the bank',completed:false},
			{body: 'Go to the doctor',completed:true}
		]
	},
	methods:{
		toggleCompetedFor:function(task){
			task.completed = !task.completed;
		}
	}

})