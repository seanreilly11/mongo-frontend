$(document).ready(function(){
	$("#adminPage").hide();
	$("#adminBtn").click(function(){
		$("#adminPage").show();
		$("#homePage").hide();
	});

	$("#homeBtn").click(function(){
		$("#homePage").show();
		$("#adminPage").hide();
	});

	$("#viewBtn").click(function(){
		$.ajax({
			url : 'http://192.168.33.10:3000/users',
			type : 'GET',
			dataType : 'json',
			success : function(data){
				console.log(data)
			},
			error : function(){
				console.log("Error")
			}
		});
	});
});