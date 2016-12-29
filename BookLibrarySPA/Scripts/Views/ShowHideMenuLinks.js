function showHideMenuLinks() {
    $("section").hide();
    $("#linkHome").show();
    if (sessionStorage.getItem('authToken')) {
        // We have logged in user
        $("#linkLogin").hide();
        $("#linkRegister").hide();
        $("#linkListBooks").show();
        $("#linkCreateBook").show();
        $("#linkLogout").show();
    } else {
        // No logged in user
        $("#linkLogin").show();
        $("#linkRegister").show();
        $("#linkListBooks").hide();
        $("#linkCreateBook").hide();
        $("#linkLogout").hide();
    }
}