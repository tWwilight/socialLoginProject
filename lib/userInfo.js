'use strict';
import dotenv from 'dotenv';
dotenv.config();

import { consoleBar, timeLog, resSend } from '../config/common.js';
import { pool } from '../lib/connect.js';

// ------------ [get] all-users ------------

const getAllUsers = async (req, res) => {
    const query = 'SELECT * FROM user';
    const results = {};
    results.result = true;
    results.error = [];
    results.users = [];

    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const [rows, fields] = await connection.query(query);
            console.log(rows);
        } catch (err) {
            results.result = false;
            results.error.push(err.message + ' at Query');
            // results.error.push('Query Error');
        }
    } catch (err) {
        results.result = false; 
        results.error.push(err.message + 'at DB');
    }
    // try - catch 문을 쌓는 방식의 코딩이 좋다.
    res.send(results);
    consoleBar();
    timeLog('GET all-users called // '+JSON.stringify(req.query) + ' // '+JSON.stringify(results));
};

export { getAllUsers };