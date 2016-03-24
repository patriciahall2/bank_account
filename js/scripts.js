function Cash(amount, deposit, withdraw) {
  this.amount = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
}

Cash.prototype.deposit = function(inputDeposit) {
  this.deposit
}

$(document).ready(function()  {
  $("form#details").submit(function(event) {
    event.preventDefault();
    var inputFullName = $("input#full-name").val();
    var inputAmount = $("input#input-amount").val();

    $("#showinfo").show();
      $("#showname").text(inputFullName);
      $("#showamount").text(inputAmount);

    $(".firstcolumn").hide();

  $(".transbutton").submit(function(event) {

    var inputDeposit = $("input#depositamount").val();
    var inputWithdraw = $("input#withdrawamount").val();

    var currentBalance = new Cash(inputAmount, inputDeposit, inputWithdraw)

    $("#showamount").text(currentBalance);

  })
  });
});
