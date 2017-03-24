var ready = function() {
	$(".btn-enrollment").click(function() {
		alert('btn clicked')
		console.log(this.getAttribute("data-id"))



		var courseId = this.getAttribute("data-id");


		$.ajax({
			url: 'courses/' + courseId + '/enroll',
			dataType: 'script', 
			method: 'post',
			data: { course_id: courseId},
			success: function(data){
				console.log('successful');
				console.log(data)
				alert(
					"Thank you for your erollment! " + "plz wait")
			},
			error: function(error){
				console.log(error.responseText)

			}
		})




	});
};

$(document).on("turbolinks:load", ready);