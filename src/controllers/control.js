const express = require('express');

const pool = require('../model/db');

class RequestControl {
  static async allUserRequests(req, res) {
    try {
      const query = 'SELECT * FROM requests';
      const requests = await pool.query(query);
      if (!requests.rows.length) return res.status(404).json('No requests');
      return res.json({
        requests: requests.rows
      });
    } catch (e) {
      console.log(e);
    }
  }

  static getUserRequest(req, res) {
    const id = Number(req.params.id);
    const request = dummy.find(each => each.id === id);
    if (!request) {
      return res
        .status(404)
        .send({ message: `Request with ID ${id} cannot be found` });
    }
    return res.send({ request });
  }

  static createRequest(req, res) {
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

    const newRequest = {
      id: dummy.length + 1,
      name: userName,
      request: userRequest,
      date: new Date(),
      status: 'Pending...'
    };

    dummy.push(newRequest);

    return res.send({ newRequest });
  }

  static modifyRequest(req, res) {
    const id = Number(req.params.id);
    const name = req.body.name;
    const request = req.body.request;
    const requests = dummy.find(request => request.id === id);

    if (!request) return res.json({ message: `Request cannot be empty` });

    if (requests) {
      requests.status = '(edited) Pending...';
      requests.request = request;

      return res.json({ requests });
    }
    return res.send({
      message: `Request with ID ${id} cannot be found on this server`
    });
  }
}

module.exports = RequestControl;
