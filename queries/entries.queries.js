const queries = {
    getAllEntries: `SELECT entries.title,
                            entries.content,
                            entries.date,
                            entries.category,
                            authors.name,
                            authors.surname,
                            authors.image
                    FROM entries
                    INNER JOIN authors
                    ON entries.id_author=authors.id_author
                    ORDER BY entries.title;`,
    putEntry: `UPDATE entries
                SET content = $2,
                    date = $3,
                    category = $4
                    WHERE title = $1;`,
    deleteEntry: `DELETE FROM entries
                WHERE title = $1;`
}
module.exports = queries;