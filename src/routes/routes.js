const Router = require('express');
const RequestControl = require('../controllers/control');
const appRouter = Router();

appRouter.get('/users', RequestControl.getAllUsers);

appRouter.get('/auth', RequestControl.authenticate);

appRouter.post('/auth/signup', RequestControl.signUpUser);

appRouter.post('/auth/login', RequestControl.loginUser);


appRouter.get('/users/requests', RequestControl.allUserRequests);

appRouter.get('/users/requests/:id', RequestControl.getAUserRequest);

appRouter.post('/users/requests', RequestControl.createRequest);

appRouter.put('/users/requests/:id', RequestControl.modifyRequest);

module.exports = appRouter;
