const { Router } = require('express');
const multer = require('multer');

const uploadConfig = require('./config/multer');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const ProfileController = require('./controllers/ProfileController');
const BookingController = require('./controllers/BookingController');

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/users', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.get('/profile', ProfileController.show);

module.exports = routes;
