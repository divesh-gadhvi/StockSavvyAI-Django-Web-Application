(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);


const searchField = document.querySelector("#tickerSearch");
const tableOutput = document.querySelector(".table-output");
const appTable = document.querySelector(".app-table");
const tBody = document.querySelector('.table-body-output');

tableOutput.style.display = "none";

searchField.addEventListener("keyup", (e) => {
  const searchValue = e.target.value;
  console.log("searchValue", searchValue);

  if (searchValue.trim().length > 0) {
    tBody.innerHTML=""
    fetch("/search-ticker", {
      body: JSON.stringify({ searchText: searchValue}),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        appTable.style.display = "none";
        tableOutput.style.display = "block";

        if(data.length===0){
            tableOutput.innerHTML='No results found';
        }else{
            data.forEach(item=>{
                tBody.innerHTML +=`
                <tr>
                    <td>${item.Symbol}</td>
                    <td>${item.Name}</td>
                </tr>`;
            })
        }
      });
  } else{
    appTable.style.display = "block";
    tableOutput.style.display = "none";
  }
});


