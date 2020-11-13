const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const config = require('../../config.json');
const dbConfig = require('../../mysql_connection');

//Sign Up
exports.signup = function (req, res, next) {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let mobile = req.body.mobile;
    let email = req.body.email;
    let password = req.body.password;

    let query_ = "INSERT INTO user(fName,lName, mobile, email,password) values(?,?,?,?,?)";
    dbConfig.query(query_, [firstname, lastname,mobile,email,password ], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server");
            console.log(err);
            return res.status(401).send({ success: false, message: "Error connecting to server!" });
        } else {
            res.status(200).send({ success: true, data: { email: email, password: password, message: "Account successfully created" } });
        }
    });
}