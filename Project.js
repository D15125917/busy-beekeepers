

/*These are two scripts I created to pop up messages on the courses page.
========================================================================*/

function mysubmit() {
    alert("Your application has been submitted, Thank you!");
}

function myalert() {
    alert("Your details have been deleted, Please start again!");
}
/*These are scripts I sourced for W3Schools for the responsive navigation bar.
========================================================================*/
function mynav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* This is a script that I sourced from W3Schools to search for suppliers on the bee supplies page*/
function mySupply() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
