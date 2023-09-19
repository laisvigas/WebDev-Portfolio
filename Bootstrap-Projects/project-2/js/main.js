$(document).ready(function () {
    // Submit review form
    $("#review-form").submit(function (e) {
        e.preventDefault();
        const reviewerName = $("#reviewer-name").val();
        const reviewContent = $("#review-content").val();
        const reviewTemplate = `
        <div class="col-12 mt-4">
            <h4>${reviewerName}</h4>
            <p>"${reviewContent}"</p>
        </div>
        `;
        // Append the new review to the reviews section at the bottom
        $("#reviews .container .row").append(reviewTemplate);
        // Clear the form fields
        $("#reviewer-name").val("");
        $("#review-content").val("");
    });
});
