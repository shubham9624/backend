import express from 'express';
import path from 'path';
import ejslayout from 'express-ejs-layouts';
import ProductController from './Controllers/Product.controller.js';
import {upload} from './Controllers/Product.controller.js';
import UserController from './Controllers/user.controller.js';
const server = express();
const productController = new ProductController();
const usercontroller=new UserController();
server.use(ejslayout);
server.set('view engine',"ejs");
server.set('Views',path.resolve('Views','Product.html'));
// Serve static files from the Views directory
server.use(express.static(path.resolve('Views')));
server.use(express.urlencoded({extended: true}));

// Route for serving the Product.html file
server.get('/', productController.getProduct) ;
server.get('/addProduct',productController.addProducts);
server.get('/update-product/:id',productController.getUpdateProduct);
server.post('/',upload.single("imageUrl") ,productController.postProducts);
server.post('/update-product',productController.postUpdateProduct);
server.get('/delete-product/:id',productController.deleteProduct);
server.get('/register',usercontroller.getRegister);
server.post('/register',usercontroller.postregister);
server.get('/login',usercontroller.getLogin);
server.post('/login',usercontroller.postlogin);
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
