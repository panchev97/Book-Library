function listBooks() {
    $('#books').empty();
    showView('viewBooks');
    listBooksModel(books).then(function (books) {
        showInfo('Books loaded.');
        if (books.length == 0) {
            $('#books').text('No books in the library.');
        } else {
            let booksTable = $('<table>')
                .append($('<tr>').append(
                    '<th>Title</th><th>Author</th>',
                    '<th>Description</th>'));
            for (let book of books)
                appendBookRow(book, booksTable);
            $('#books').append(booksTable);
        }
    })
}

function appendBookRow(book, booksTable) {
    booksTable.append($('<tr>').append(
        $('<td>').text(book.title),
        $('<td>').text(book.author),
        $('<td>').text(book.description)
        )
    )
}