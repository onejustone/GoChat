/**
 *
 * Created by onejustone on 2017/3/3.
 */

let mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/db')
exports.User = mongoose.model('User', require('./user'))
 
