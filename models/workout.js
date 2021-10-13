const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: "A date for the workout is required",
        default: Date.now()
    },
    exercises: {
        type: [ExerciseSchema]
    }
});

const ExerciseSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Please enter a name for your workout"
    },
    type: {
        type: String,
        trim: true,
        required: "Please enter a type of exercise"
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type: Number
    }
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;