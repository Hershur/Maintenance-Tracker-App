const jwt = require('jsonwebtoken');
const express = require('express');
const pool = require('../model/db');
const bcrypt = require('bcrypt');

class RequestControl {
  static authenticate(req, res) {
    res.json('Kindly login or signup');
  }

  static async getAllUsers(req, res) {
    const query = `SELECT * FROM users`;
    const users = await pool.query(query);

    return res.json(users.rows);
  }

  static async signUpUser(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    let password = req.body.password;
    const phone = req.body.phone;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    try {
      const query = `SELECT * FROM users WHERE email = $1`;
      const value = [email];
      const checkEmail = await pool.query(query, value);

      if (checkEmail.rows.length) {
        return res
          .status(400)
          .json({ message: `An account with '${value}' already exists` });
      }
    } catch (e) {
      console.log(e);
    }

    try {
      const query = `INSERT INTO 
        users(name, email, password, phone_number, date) 
          VALUES($1, $2, $3, $4, NOW())`;
      const value = [name, email, password, phone];
      const newUser = await pool.query(query, value);

      const token = jwt.sign({ email: email }, process.env.jwtPrivateKey);
      return res.header('x-auth-token', token).json({
        message: `Hello ${name}, your account was created successfully`
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async loginUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {
      const query = `SELECT * FROM users WHERE email=$1`;
      const value = [email];
      const userLogin = await pool.query(query, value);
      const loginEmail = userLogin.rows[0].email;
      const loginPassword = userLogin.rows[0].password;
      const validPassword = await bcrypt.compare(password, loginPassword);

      if (validPassword) {
        const token = jwt.sign(
          { email: loginEmail },
          process.env.jwtPrivateKey,
          { expiresIn: '1h' }
        );
        return res
          .header('x-auth-token', token)
          .json({ message: userLogin.rows, token: token });
      }

      return res.json({ message: `Incorrect username or password` });
    } catch (e) {
      console.log(e);
    }
  }

  static async allUserRequests(req, res) {
    try {
      const query = 'SELECT * FROM requests';
      const requests = await pool.query(query);
      if (!requests.rows.length) return res.status(404).json('No requests');
      return res.json({
        request: requests.rows
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async getAUserRequest(req, res) {
    const id = parseInt(req.params.id, 10);

    try {
      const query = 'SELECT * FROM requests WHERE id=$1';
      const value = [id];
      const request = await pool.query(query, value);

      if (!request.rows.length)
        return res.status(400).json({
          message: `No request associated with ID '${id}' was found`
        });

      return res.json({ request: request.rows });
    } catch (e) {
      console.log(e);
    }
  }

  static async createRequest(req, res) {
    const userRequest = req.body.request;
    const userName = req.body.name;

    if (!userName) {
      res.json('Kindly provide your name so we could help');
    }

    if (!userRequest) {
      res.json({
        message: `Hello ${userName}, kindly state how we could help you..`
      });
    }

    try {
      const query = `INSERT INTO requests (name, request, date, state) VALUES ($1, $2, NOW(),'Pending...')`;
      const value = [userName, userRequest];
      const newRequest = await pool.query(query, value);
      return res.json({
        request: `Hello ${userName}, your request was sent successfully`
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async modifyRequest(req, res) {
    const id = Number(req.params.id);
    const request = req.body.request;
    try {
      const query = `SELECT * FROM requests WHERE id=$1`;
      const value = [id];
      const request = await pool.query(query, value);
      if (!request.rows.length)
        return res.json({
          message: `No request associated with ID '${id}' was found`
        });
    } catch (e) {
      console.log(e);
    }

    if (!request) return res.json({ message: `Request cannot be empty` });

    if (request) {
      try {
        const query = `UPDATE requests SET request = $1, state = '(edited) Pending...' WHERE id=$2 RETURNING *`;
        const value = [request, id];
        const newRequest = await pool.query(query, value);

        return res.json({
          message: 'Request updated successfully',
          request: newRequest.rows
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  static async resolveRequest(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const query = `SELECT * FROM requests WHERE id=$1`;
      const value = [id];
      const request = await pool.query(query, value);
      if (!request.rows.length)
        return res.status(404).json({
          message: `No request associated with ID '${id}' was found`
        });
    } catch (e) {
      console.log(e);
    }

    try {
      const query = `UPDATE requests SET state = 'Resolved' WHERE id = $1 RETURNING *`;
      const value = [id];
      const resolvedRequest = await pool.query(query, value);

      return res.json({
        message: 'Your request has been resolved accordingly...',
        request: resolvedRequest.rows
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async rejectRequest(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const query = `SELECT * FROM requests WHERE id=$1`;
      const value = [id];
      const request = await pool.query(query, value);
      if (!request.rows.length)
        return res.status(404).json({
          message: `No request associated with ID '${id}' was found`
        });
    } catch (e) {
      console.log(e);
    }

    try {
      const query = `UPDATE requests SET state = 'Canceled' WHERE id = $1 RETURNING *`;
      const value = [id];
      const resolvedRequest = await pool.query(query, value);

      return res.json({
        message: 'Request has been canceled...',
        request: resolvedRequest.rows
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = RequestControl;
