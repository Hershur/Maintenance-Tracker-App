const Router = require('express');
const RequestControl = require('../controllers/control');
const appRouter = Router();

appRouter.get('/requests', RequestControl.allUserRequests);

appRouter.get('/requests/:id', RequestControl.getUserRequest);

appRouter.post('/requests', RequestControl.createRequest);

appRouter.put('/requests/:id', RequestControl.modifyRequest);

module.exports = appRouter;
