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
        req.session.userName=username;
        console.log(req.session);
            const products = ProductModel.get();
             res.render('Product', { p: products,name:req.session.userName});
        
    }
    getLogout(req,res){
        req.session.destroy((err) => {
            if(err){
                console.log(err);
            }
            res.redirect('/login');
        });
    }
}
export const auth=(req,res,next)=>{
    if(req.session.username){
        next();
    }
    else{
        res.redirect('/login');
    }
}
export const lastvisit=(req,res,next)=>{

    if(req.cookies.localVisit){
        res.locals.localVisit=new Date(req.cookies.localVisit).toLocaleString();
    }
    res.cookie('localVisit',new Date().toISOString(),{
        maxAge: 2*24*60*60*1000
    });
    next();
}