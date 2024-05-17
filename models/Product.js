const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Supplement', 'Accessory']
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    inStock: {
        type: Boolean,
        default: true
    },
    photo: {
        type: String
    }
});

module.exports = mongoose.model('Product', productSchema);
