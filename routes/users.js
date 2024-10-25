var express = require('express');
var router = express.Router();
var {
    getAll,
    create,
    getById,
    updateById,
    deleteById,
    getDocumentation
} = require('../service/users')

router.get('/', getDocumentation);
// CREATE: add users
router.post('/users', create);
// READ: Get all users
router.get('/users', getAll);
// READ: Get a single item by ID
router.get('/users/:id', getById);
// UPDATE: Update an item by ID
router.put('/users/:id', updateById);
// DELETE: Remove an item by ID
router.delete('/users/:id', deleteById);

module.exports = router;
