import express from 'express';
import path from 'path';
import ejslayout from 'express-ejs-layouts';
import ProductController from './Controllers/Product.controller.js';
import UserController from './Controllers/user.controller.js';
import {auth} from './Controllers/user.controller.js';
import {lastvisit} from './Controllers/user.controller.js';
import uploadFile from './middlewares/file-upload-middleware.js';
import session from 'express-session';
import cookieparser from 'cookie-parser';
const server = express();
const productController = new ProductController();
const userController = new UserController();
server.use(ejslayout);
server.set('view engine', 'ejs');
server.set('Views', path.resolve('Views', 'Product.html'));
server.use(session({
  secret: 'Hello',
  cookie: {secure:false}
}));
server.use(cookieparser());
// Serve static files from the Views directory
server.use(express.static(path.resolve('Views')));
server.use(express.urlencoded({ extended: true }));

// Route for serving the Product.html file
server.get('/',lastvisit,auth, productController.getProduct);
server.get('/addProduct',auth, productController.addProducts);
server.get('/update-product/:id',auth, productController.getUpdateProduct);
server.post('/',auth, uploadFile.single('file'), productController.postProducts); // Using the upload middleware
server.post('/update-product',auth, uploadFile.single('file'), productController.postUpdateProduct); // Using the upload middleware
server.get('/delete-product/:id',auth, productController.deleteProduct);
server.get('/register',userController.getRegister);
server.post('/register',userController.postregister);
server.get('/login',userController.getLogin);
server.post('/login',userController.postlogin);
server.get('/logout',userController.getLogout);
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
