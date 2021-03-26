$(document).ready(function () {
  $("form#multiquestions").submit (function (event) {
    event.preventDefault();
    const orange = $("input:radio[value=orange]:checked").val();
    const cat = $("input:radio[value=cat]:checked").val();