const { findById } = require("../models/cars");
const Car = require("../models/cars");

//CREATE
exports.createCar = async (req, res) => {

    const {brand, model, year, engine, color, price} = req.body;

    try {
        const car = await Car.create({
            brand,
            model,
            year,
            engine,
            color,
            price
        })

       return await res.status(201).json(car)
       

    } catch (error) {
        return res.status(500).json(error.message)
    }

    
}
// Retrieve all cars
exports.getAllCars = async (req, res) =>{
    try{
        const cars = await Car.find();
        return res.status(200).json(cars)
    } catch (error ) {
        return res.status(500).json(error.message)
    }
}

// Find a single Car with an id
exports.getOneCar = async (req, res) => {
    // object destructing
    // const {_id} = req.params;
   
    const id = req.params.id;

    try {
       // const car = await Car.findById(id)
        const car = await Car.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        return res.status(200).json(car)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// Update a Car identified by the id in the request
exports.updateCar = async (req, res) => {
    const _id = req.params.id;

    try {
        const car = await Car.updateOne(_id);
        return res.status(200).json(car)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// Delete Car with specified id
exports.deleteCar = async (req, res) => {
    const id = req.params.id;

    try {
        const car = await Car.findByIdAndDelete(id);
        return res.status(200).json(`${car} has been successfully deleted`) 
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// Delete all Cars from the database
exports.deleteAllCars = async (req, res) => {
    try {
        const cars = await Car.deleteMany({});
        return res.status(200).json(`Successfully deleted ${cars}`)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}








// const db = require("../models");
// const Cars = db.cars;


// //const Cars = require("../models/cars");

// //Create and Save a new Cars
// exports.create = (req, res) => {

// };

// //Retrieve all Cars from database
// exports.findAll = (req, res) =>{

// };

// //Find a single Car by id in the requst
// exports.findOne = (req, res) => {

// };

// // Update a Car by the id in the request
// exports.update = (req, res) => {
  
// };
// // Delete a Car with the specified id in the request
// exports.delete = (req, res) => {
  
// };
// // Delete all Cars from the database.
// exports.deleteAll = (req, res) => {
  
// };