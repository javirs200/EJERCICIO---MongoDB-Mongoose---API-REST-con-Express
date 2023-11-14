const queries = require('../queries/authors.queries') // Queries SQL

// Datos de conexión
const pool = require('../config/db_pgsql');

// READ
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorByEmail, [email]);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [name, surname, email, image]);
        result = { message: `Author creado con email: ${email}` };
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}

const updateAuthor = async (data) => {
    let { email, name, surname, newEmail, image } = data;
    if (newEmail == undefined) { newEmail = email };
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor, [email, name, surname, newEmail, image])
        result = { message: `Author actualizado con email: ${email}` };
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor, [email]);
        result = { message: `Author borrado con email: ${email}` };
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    console.log(result);
    return result;
}

const authors = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

module.exports = authors;