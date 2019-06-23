
$(function() {

    // Use this function to add a burger (We use prevent.default to..
    // prevent the submit button from working until we have data in the burger name field)
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var burger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // Post the burger to the DB and then reload to show the burgers list again
        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(function() {
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})