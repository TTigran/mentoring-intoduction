var {users} = require('../db/resource/index')

function create(req, res)  {
    const newItem = { id: users.length + 1, ...req.body };
    users.push(newItem);
    res.status(201).json(newItem);
}

function getAll (req, res)  {
    res.json(users);
}

function getById(req, res)  {
    const item = users.find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
}

function updateById(req, res)  {
    const item = users.find(i => i.id === parseInt(req.params.id));
    if (item) {
        Object.assign(item, req.body);
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
}

function deleteById(req, res)  {
    const itemIndex = users.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex > -1) {
        users.splice(itemIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
}
function getDocumentation(req, res) {
    res.send('/V1/API users');
}


module.exports = {getAll, create, getById, updateById, deleteById, getDocumentation}