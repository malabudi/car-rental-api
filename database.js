import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

// Users Table
export async function getUserByEmail(email) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM users
    where email = ?
    `, [email])
    return rows;
}

async function getUserById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM users
    where UserId = ?
    `, [id])
    return rows;
}

export async function createUser(email, password) {
    const [result] = await pool.query(`
    INSERT INTO users (email, password)
    VALUES(?, ?)
    `, [email, password])

    const id = result.insertId
    return getUserById(id)
}

// Questions Table
export async function getQuestions() {
    const [rows] = await pool.query('SELECT * FROM questions')
    return rows;
}

export async function getAnswerById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM security_questions
    where AnswerID = ?
    `, [id])
    return rows;
}

export async function createAnswer(userId, questionId, answer) {
    const [result] = await pool.query(`
    INSERT INTO security_questions (UserId, QuestionId, Answer)
    VALUES(?, ?, ?)
    `, [userId, questionId, answer])

    const id = result.insertId
    return getAnswerById(id)
} 
