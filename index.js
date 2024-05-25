function search(event) {
  event.preventDefault();
  let searchInput = document.quarySelector("#search-form-input");
  let cityElement = document.quarySelector("#city");
  cityElement.innerHTML = searchInput.value;
}
let searchFormElement = document.quarySelector("#search-form");
searchFormElement.addEventListener("submit", search);
