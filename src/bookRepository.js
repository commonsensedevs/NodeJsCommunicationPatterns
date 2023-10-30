class bookRepository {

    constructor(db) {
        this.db = db;
    }

    async getAllBooks() {
        try {
            const result = await this.db.query(('SELECT * FROM books'));
            return result.rows;

        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
        //close the connection
        await this.db.end();
    }
}
module.exports = bookRepository;