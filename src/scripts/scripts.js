$(function () {
  (function resetPwd() {
    // show/hide instructions
    $(".reset-query").on("click", function () {
      $(".instructions").toggle();
    });

    // email validation
    $("#reset-password__btn").on("click", function (e) {
      e.preventDefault();

      // store the vars for faster performance
      var errorMsg = $("#error");
      errorMsg.text(" ");
      var getEmail = $("#email").val();
      var successMsg = $("#success-message");
      var deniedMsg = $("#denied-message");

      // wipe any previous messages
      successMsg.hide();
      deniedMsg.hide();

      // store accepted emails - build into a JSON array for the API
      var emails = "jake@jakecarroll.co.uk";

      // Use a Google Email validation regex
      var re = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      var emailFormat = re.test($("#email").val());

      // Check the email format
      if (emailFormat) {
        // if good then check against array
        if (getEmail === emails) {
          // show success message
          successMsg.show();
        } else {
          // Show user not found message
          deniedMsg.show();
        }
      } else {
        // if email invalid print invalid error
        errorMsg.text("Please enter a valid email address");
      }
    });
  })();
});
