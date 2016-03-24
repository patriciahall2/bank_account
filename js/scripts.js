function Cash(name, amount, deposit, withdraw) {
  this.name = name;
  this.amount = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
}


$(document).ready(function()  {
  $("form#details").submit(function(event) {
    event.preventDefault();
    var inputFullName = $("input#full-name").val();
    var inputAmount = $("input#input-amount").val();

    $("#showinfo").show();
      $("#showname").text(inputFullName);
      $("#showamount").text(inputAmount);
  });
});
