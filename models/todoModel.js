import mongoose from 'mongoose';

const todosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    checked: {
        type: Boolean,
        default: false
    }

});

export default mongoose.model('Todo', todosSchema);