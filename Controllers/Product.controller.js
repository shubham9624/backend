import ProductModel from '../Model/product.model.js';
import multer from 'multer';
import path from 'path';

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('public/images')); // Use path.resolve to ensure the correct path
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.originalname + '-' + uniqueSuffix);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });

export { upload };

export default class ProductController {
  getProduct(req, res) {
    const products = ProductModel.get();
    res.render('Product', { p: products });
  }

  addProducts(req, res) {
    res.render('new-Product');
  }

  postProducts(req, res) {
    console.log('file info', req.file);
    const { id, name, description, price } = req.body;
    const imageUrl = req.file ? 'images/' + req.file.filename : ''; // Ensure the correct file path
    ProductModel.addProduct(id, name, description, price, imageUrl);
    const products = ProductModel.get();
    res.render('Product', { p: products });
  }

  getUpdateProduct(req, res) {
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render('updateProduct', { product: productFound });
    } else {
      res.status(401).send({ message: 'Product not found' });
    }
  }

  postUpdateProduct(req, res) {
    ProductModel.updateProduct(req.body);
    const products = ProductModel.get();
    res.render('Product', { p: products });
  }

  deleteProduct(req, res) {
    const id = req.params.id;
    ProductModel.delete(id);
    const products = ProductModel.get();
    res.render('Product', { p: products });
  }
}
