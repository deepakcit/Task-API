const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    tittle:String,
    is_completed:Boolean,
});

const TaskModel = mongoose.model('tasks',TaskSchema);
module.exports = TaskModel;