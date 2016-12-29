function createBook() {
    let bookData = {
        title: $('#formCreateBook input[name=title]').val(),
        author: $('#formCreateBook input[name=author]').val(),
        description: $('#formCreateBook textarea[name=descr]').val()
    };

    createBookModel(bookData).then(function () {
        listBooks();
        showInfo('Book created.');
    })
}