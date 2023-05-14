const searchField = document.querySelector("#tickerSearch");


searchField.addEventListener("keyup", (e) => {
  const searchValue = e.target.value;

  if (searchValue.trim().length > 0) {
    fetch("/search-ticker", {
      body: JSON.stringify({ searchText: searchValue}),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });
  }
});
