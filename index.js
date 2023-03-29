const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.log('couldn\'t connect to mongodb...',err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);
const course = new Course({
    name: 'Sudheer course',
    author: 'Sudheer',
    tags: [ 'nodes', 'backend' ],
    isPublished: True
})