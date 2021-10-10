var express = require('express');
var router = express.Router();



router.post('/login', function (req, res) {
 console.log('--------bodyyy-----------',req.body)
 var data=req.body;
 var data=req.body;
 if(data.email=='john.doe@gmail.com' && data.password=='Pass@123'){
    res.status(200).send([])
 }else{
    res.status(400).send([])
 }
    // res.send(data)
});

router.get('/getPatientHealthInfo', function (req, res) {
    var data = {
        "Timestamp": new Date(),
        "Personal_info": {
            "Name": "John Doe",
            "Email": "john.doe@gmail.com",
            "Phone": "9876543210",
            "Age": "25 years"
        },
        "Medical_Condition": {
            "Heart_Disease": false,
            "Diabetics": true,
            "Blood_Pressure": {
                "High_BP": true,
                "Low_BP": false
            }
        },
        "Health_Status": {
            "Height": "175 cms",
            "Weight": "65 kg",
            "Pulse_Rate": "88 bpm",
            "BP": "120/160",
            "BMI": 25
        }
    }
    res.send(data)
});
module.exports = router;