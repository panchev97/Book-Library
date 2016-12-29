function createBookModel(bookData) {
    return $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books",
        headers: getKinveyUserAuthHeaders(),
        data: bookData,
        error: handleAjaxError
    });
}