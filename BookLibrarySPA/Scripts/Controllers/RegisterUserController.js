function registerUser(event) {
    event.preventDefault();
    let userData = {
        username: $('#formRegister input[name=username]').val(),
        password: $('#formRegister input[name=passwd]').val(),
        confirmPassword: $('#formRegister input[name=confirmPasswd]').val()
    };
    if (userData.password == userData.confirmPassword) {
        registerUserModel(userData).then(function (userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showHomeView();
        })
    } else {
        showError("Passwords Does Not Match.");
    }
}