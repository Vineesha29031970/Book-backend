const {bookModel} = require('../models/bookModel');

// GETALLBOOKS
async function getALLBook(req, res) {
    try {
        let books = await bookModel.find();
        if (books.length > 0) {
            res.status(200).json({
                "data": books,
                "msg": "",
                "error": ""
            });
        } else {
            res.status(200).json({
                "data": "",
                "msg": "No data was found",
                "error": ""
            });
        }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

// GETSPECIFIC BOOK
async function getSpecificBook(req, res) {
    try {
        let book = await bookModel.find({ "name": req.query.name });
        if (book.length > 0) {
            res.status(200).json({
                "data": book,
                "msg": "",
                "error": ""
            });
        } else {
            res.status(200).json({
                "data": "",
                "msg": "No data was found",
                "error": ""
            });
        }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

// CREATE BOOK
async function createBook(req, res) {
    try {
        const book = new bookModel(req.body);
        await book.save();
        res.status(201).json({
            "data": book,
            "msg": "Book created successfully",
            "error": ""
        });
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

// UPDATE BOOK
async function updateBook(req, res) {
    try {
        let book = await bookModel.updateOne({ "_id": req.body._id }, req.body);
        if (book.modifiedCount > 0) {
            res.status(200).json({
                "data": "",
                "msg": "Book updated successfully",
                "error": ""
            });
        } else {
            res.status(200).json({
                "data": "",
                "msg": "No data was found",
                "error": ""
            });
        }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

//DELETE BOOK
async function deleteBook(req, res) {
    try {
        let book = await bookModel.deleteOne({ "_id": req.params.id });
        if (book.deletedCount > 0) {
            res.status(200).json({
                "data": "",
                "msg": "Book deleted successfully",
                "error": ""
            });
        } else {
            res.status(200).json({
                "data": "",
                "msg": "No data was found",
                "error": ""
            });
        }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

module.exports = {
    getALLBook,getSpecificBook,createBook,updateBook,deleteBook
};