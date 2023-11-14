const author = require('../models/authors.model')

const getAuthors = async (req, res) => {
    try {
        let authors;
        if (req.query.email) {
            authors = await author.getAuthorByEmail(req.query.email);
          } else {
            authors = await author.getAllAuthors();
          }
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({message:`error en getAuthors : ${error}`});
    }
}
const createAuthor = async (req, res) => {
    try {
      const response = await author.createAuthor(req.body);
      res.status(201).json(response);
    } catch (error) {
        res.status(500).json({message:`error en createAuthor : ${error}`});
    }
  };
  
  const updateAuthor = async (req, res) => {
    try {
      const response = await author.updateAuthor(req.body);
      res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message:`error en updateAuthor : ${error}`});
    }
  };
  
  const deleteAuthor = async (req, res) => {
    try {
      const response = await author.deleteAuthor(req.body.email);
      res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message:`error en deleteAuthor : ${error}`});
    }
  };
  
module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor,
}