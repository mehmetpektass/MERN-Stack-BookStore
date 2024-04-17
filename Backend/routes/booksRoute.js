import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();



router.get('/', async (request, response) => {
    try {

        const book = await Book.find({});
        response.status(200).json(book);
        
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

router.get('/:id' , async (request , response) =>{

    try {
        const {id} = request.params;
        const book = await Book.findById(id);
        response.status(200).json(book);
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

router.post('/' , async (request , response) =>{
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: 'Send All Requireds ex: title,author,publishYear'
            }); 
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put('/:id' , async (request , response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send All Requireds ex: title,author,publishYear'
            })
        }
        const {id} = request.params;

        const updatedData = await Book.findByIdAndUpdate(id , request.body);
        if (!updatedData) {
            return response.status(400).send({
                message: 'Book not found'
            });
        }
        return response.status(200).send(updatedData)

    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

router.delete('/:id' , async (request , response) => {
    try {

        const {id} = request.params;

        const deletedBook = await Book.findByIdAndDelete(id)

        if (!deletedBook) {
            return response.status(400).send({message: 'Book not found'});
        }

        return response.status(200).send({message: 'Book deleted succesfully'})

    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

export default router;