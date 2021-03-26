$(document).ready(function () {
  $("form#multiquestions").submit (function (event) {
    event.preventDefault();
    const orange = $("input:radio[value=orange]:checked").val();
    const cat = $("input:radio[value=cat]:checked").val();
    const pop = $("input:radio[value=pop]:checked").val();
    const rain = $("input:radio[value=rain]:checked").val();
    const hot = $("input:radio[value=hotcoffee]:checked").val();

    if (cat,orange,pop,rain,hot) {
      $("#result1").show()
    } else {
      $("#result2").show()
    }
  });
}); 