const mongoose = require("mongoose")

const schema = mongoose.Schema({
  // TODO: Add day (Date), city (String), state(String), country (String), temperature (Number), and condition (String).
   date: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  }, 
  
})

module.exports = mongoose.model("WeatherStatus", schema)