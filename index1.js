const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground1')
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.log('couldn\'t connect to mongodb...',err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course1', courseSchema);


async function createCourse(){
    const course = new Course({
        name: 'Sudheer course1',
        author: 'Sudheer1',
        tags: [ 'nodes1', 'backend1' ],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}

createCourse();