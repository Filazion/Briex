import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    //console.log(req.body);
    const {username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save()
        res.status(201).json('User Created Successfully');
        
    } catch (error) {
        //console.log(error);
        //res.status(500).json(error.message);
        // we can use the middleware we have defined.
        next(error);
        //Or we can use the middleware and the errorHandler function
        //next(errorHandler(550, 'Error from the function'));
    }
    
};

//this model will authenticate our user.

