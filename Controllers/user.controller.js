import userModel from '../Model/user.model.js';
import ProductModel from '../Model/product.model.js';
export default class UserController{
    getRegister(req,res){
        res.render('register');
    }
    postregister(req,res){
        const {username,email,password} = req.body;
        userModel.addUser(username,email,password);
        res.render('login',{error:null});
    }
    getLogin(req,res){
        res.render('login',{error:null});
    }
    postlogin(req,res){
        const {username,password} = req.body;
        const user = userModel.isValidUser(username,password);
        if(!user){
            res.render('login', { error: 'Invalid username or password' });
            return;
        }
        else{
            const products = ProductModel.get();
             res.render('Product', { p: products });
        }
    }
}