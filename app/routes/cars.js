const express = require('express');
const router = express.Router();
// const carControllers = require('../controllers/cars');

const {createCar, getOneCar, getAllCars, updateCar, deleteCar, deleteAllCars, } = require('../controllers/cars')

//  // Create a new Car
//  router.post('/', carControllers.createCar);
//  // Retrieve all Cars
// router.get('/', carControllers.getAllCars);
// // Retrieve a single Car with id
// router.get('/:_id', carControllers.getOneCar);
// // Update a Car with id
// router.put('/', carControllers.updateCar);
// // Delete a Car with id
// router.delete('/', carControllers.deleteCar);
// //Delete all the database
// router.delete('/', carControllers.deleteAllCars);


 // Create a new Car
router.post('/', createCar);
  // Retrieve all Cars
router.get('/', getAllCars);
 // Retrieve a single Car with id
 router.get('/:_id', getOneCar);
 // Update a Car with id
router.put('/', updateCar);
 // Delete a Car with id
 router.delete('/', deleteCar);
 //Delete all the database
 router.delete('/', deleteAllCars);




module.exports = router;