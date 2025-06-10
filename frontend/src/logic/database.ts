import fs from 'fs';
import path from 'path';
import Database from 'better-sqlite3';

const dbPath = path.resolve(process.cwd(), 'data', 'portfulius.db');
const dbExists = fs.existsSync(dbPath);
const db = new Database(dbPath);

if (!dbExists) {
  console.log('Database not found, initialising...');

  db.exec(`
    CREATE TABLE categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
    );

    CREATE TABLE transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount REAL NOT NULL,
      category_id INTEGER,
      date TEXT NOT NULL,
      description TEXT,
      type TEXT CHECK(type IN ('income', 'expense')) NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    );
  `);

  console.log('Database schema created!');
} else {
  console.log('Database found, connection successful.');
}

export default db;
