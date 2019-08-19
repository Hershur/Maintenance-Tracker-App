const Router = require('express');
const RequestControl = require('../controllers/control');
const appRouter = Router();

appRouter.get('/users/requests', RequestControl.allUserRequests);

appRouter.get('/users/requests/:id', RequestControl.getAUserRequest);

appRouter.post('/users/requests', RequestControl.createRequest);

appRouter.put('/users/requests/:id', RequestControl.modifyRequest);

appRouter.put('/users/requests/:id/resolve', RequestControl.resolveRequest);

module.exports = appRouter;
