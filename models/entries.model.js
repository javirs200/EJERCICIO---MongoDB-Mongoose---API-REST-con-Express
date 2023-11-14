const queries = require('../queries/entries.queries') // Queries SQL

// Datos de conexión
const pool = require('../config/db_pgsql'); 

// READ
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const putEntry = async (entry) => {
    const { title, content, date, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.putEntry,[title, content, date, category])
        result = data
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const deleteEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry,[title])
        result = data
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


const entries = {
    getAllEntries,
    putEntry,
    deleteEntry
}

module.exports = entries;