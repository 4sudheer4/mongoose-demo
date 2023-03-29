const mongoose = require('mongoose');

//this will create a collection in mongoDB. Check MongoCli for UI display

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

//this will create Courses model/database in playground collection.
const Course = mongoose.model('Course', courseSchema);


async function createCourse(){
    const course = new Course({
        name: 'Sudheer course1',
        author: 'Sudheer1',
        tags: [ 'angular', 'mongo' ],
        isPublished: true
    });
    //course.save() will return a promise.
    const result = await course.save(); //this is async operation, coz it takes time to save the document since we are accessing filesystem.
    console.log(result);
}

// createCourse();

async function getCourse(){
    const courses = await Course
    .find({author: 'Sudheer1', isPublished: true})
    .limit(10)
    .sort({name: 1}) //1 indicated ascending order, -1 is descending order
    .select({name:1, tags:1 });
    console.log(courses);
}

getCourse();