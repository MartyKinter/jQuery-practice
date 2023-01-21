function createHTML(movie) {
  return `
      <li> Movie:${movie.title}, Rating: ${movie.rating}
        <button class="delete">
          Delete
        </button>
      </li>`;
}

$(function() {
  $("#movie-form").on("submit", function(evt) {
    evt.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    let movieObj = { title, rating };
    const movieHTML = createHTML(movieObj);

    $("#movie-list").append(movieHTML);
    $("#movie-form").trigger("reset");
  });
  
  $("#movie-list").on("click", "button", function(evt) {
    $(evt.target).closest("li").remove();
  });
});