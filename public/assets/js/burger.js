// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
	$(".devour-burger").on("click", function (event) {
		var id = parseInt($(this).attr("data-id"));
		// var devoured = $(this).attr("devoured");
		var devoured;
		var newState = {
			devoured: true
		}

		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newState
		}).then(
			function () {
				console.log("changed devoured to", devoured);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	$(".create-form").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		var newBurger = {
			name: $("#burgerInput").val().trim(),
		};

		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function () {
				console.log("created new burger", newBurger);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	$(".delete-burger").on("click", function (event) {
		var id = $(this).attr("data-id");

		// Send the DELETE request.
		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(
			function () {
				console.log("deleted burger", id);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});
	
});
