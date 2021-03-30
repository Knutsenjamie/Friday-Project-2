$(document).ready(function () {
  $("form#multiquestions").submit (function (event) {
    event.preventDefault();
    const orange = $("input:radio[value=orange]:checked").val();
    const blue = $("input:radio[value=blue]:checked").val();
    const green = $("input:radio[value=green]:checked").val();
    const cat = $("input:radio[value=cats]:checked").val();
    const dog = $("input:radio[value=dogs]:checked").val();
    const pop = $("input:radio[value=pop]:checked").val();
    const rnb = $("input:radio[value=rnb]:checked").val();
    const rock = $("input:radio[value=rock]:checked").val();
    const rain = $("input:radio[value=rain]:checked").val();
    const snow = $("input:radio[value=snow]:checked").val();
    const hot = $("input:radio[value=hotcoffee]:checked").val();
    const soft = $("input:radio[value=softbakedcookies]:checked").val();
    const petrichor = $("input:radio[value=petrichor]:checked").val();

    if (cat,orange,pop,rain,hot) {
      $("#result-c").hide();
      $("#result-javascript").hide();
      $("#result-ruby").show();
    } else if (blue,dog,rnb,rain,petrichor) {
      $("#result-javascript").hide();
      $("#result-ruby").hide();
      $("#result-c").show();
    } else if (green,cat,rock,snow,soft) {
      $("#result-ruby").hide();
      $("#result-c").hide();
      $("#result-javascript").show();  
    } else if (orange,dog,pop,snow,hot) {
      $("#result-javascript").hide();
      $("#result-c").hide();
      $("#result-ruby").show(); 
    } else if (blue,cat,rnb,rain,soft) {
      $("#result-c").hide();
      $("#result-ruby").hide();
      $("#result-javascript").show();         
    } else {
      $("#result-javascript").hide();
      $("#result-ruby").hide();
      $("#result-c").show();
    }
  });
}); 


