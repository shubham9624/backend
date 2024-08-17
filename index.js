import express from 'express';
import path from 'path';
import ejslayout from 'express-ejs-layouts';
import ProductController from './Controllers/Product.controller.js';
import UserController from './Controllers/user.controller.js';
import uploadFile from './Middlewares/file-upload-middleware.js';

const server = express();
const productController = new ProductController();
const userController = new UserController();
server.use(ejslayout);
server.set('view engine', 'ejs');
server.set('Views', path.resolve('Views', 'Product.html'));

// Serve static files from the Views directory
server.use(express.static(path.resolve('Views')));
server.use(express.urlencoded({ extended: true }));

// Route for serving the Product.html file
server.get('/', productController.getProduct);
server.get('/addProduct', productController.addProducts);
server.get('/update-product/:id', productController.getUpdateProduct);
server.post('/', uploadFile.single('file'), productController.postProducts); // Using the upload middleware
server.post('/update-product', uploadFile.single('file'), productController.postUpdateProduct); // Using the upload middleware
server.get('/delete-product/:id', productController.deleteProduct);
server.get('/register',userController.getRegister);
server.post('/register',userController.postregister);
server.get('/login',userController.getLogin);
server.post('/login',userController.postlogin);
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
