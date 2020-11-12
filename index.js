const mongoose = require("mongoose");

//Making A Connection.
mongoose.connect("mongodb://localhost:27017/mongoose_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Defining A Schema.
let schema = {
  tags: [String],
  date: {type : Date},
  name: {type: String},
  author:{type: String},
  isPublished:{type: Boolean},
  price: {type:Number},
  __v: {type:Date, default:0},
};

//Creating A Courses Model.
const Model = mongoose.model("courses", schema);

//get Course
async function getCourses(){
    console.log(await Model.find());
}

//create Coursee.
async function create() {
    let courses = new Model({
        tags: ["Jai HOOOOOOOOO!!!!"],
        date: Date.now(),
        name: "Express",
        author: 'vipul',
        isPublished: true,
        price: 20
    });

    await courses.save();
}

//get By Name.
async function getCourseByName(name) {
  console.log(await Model.find({name:name}));
}

//get Courses By Price Greater Than Specified value.
async function getByPriceGreaterThan(price) {
  console.log(await Model.find({price:{$gt:price}}).select({name:0, date:0}));
}

// create();
// getCourses();
// getCourseByName("Express");
// getByPriceGreaterThan(1000);
