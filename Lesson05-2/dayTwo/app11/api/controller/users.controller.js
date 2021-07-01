const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports.register = function (req, res) {
    console.log(`request for register came in`);
    
bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
        const newUser = {
            username: req.body.username,
            password: hashPassword,
            name: req.body.name
        };
User.create(newUser, function (err, user) {
            console.log(`in create.....`);
            if (err) {
                console.log(`error ${err}`);
                res.status(500).json(err);
            } else {
                console.log(`user created `);
                res.status(201).json(user);
            }
        });
    });
    
};

module.exports.login = async function (req, res) {
    console.log("contorller for log in")
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ username }).exec();
    if (user) {
        console.log("password in");
        // if (bcrypt.compareSync(password, user.password)) {
        //     console.log(`user found`);
        //     const token = jwt.sign({ name: user.name }, "cs572", { expiresIn: 3600 }); //expiresIn is in seconds
        //     res.status(200).json({ success: true, token: token });
        // } else {
        //     console.log(`password incorrect`)
        //     res.status(400).json({ message: "unauthorized" });
        // }
        bcrypt.compare(password,user.password, function(err,result){
            if(err){

            }else{
                if(result){
                    const token=jwt.sign({name:user.name},"cs572",{expiresIn:3600});
                    res.status(200).json({success:true, token:token});
                }
            }
        });
    } else {
        console.log(`use not found`, user)
        res.status(400).json({ message: "unauthorized" });
    }
    // User.findOne({username:username}).exec(function(err,user){
    //     if (err){
    //         console.log(`error ${err}`);
    //         res.status(500).json(err);
    //     } 
    //     if(user){
    //         if(bcrypt.compareSync(password,user.password)){
    //             console.log(`user found`);
    //             const token=jwt.sign({name:user.name},"cs572",{expiresIn:3600}); //expiresIn is in seconds
    //             res.status(200).json({success:true, token:token});
    //         } else{
    //             console.log(`password incorrect`)
    //             res.status(400).json({message:"unauthorized"});
    //         }

    //     }else{
    //         console.log(`use not found`,user)
    //         res.status(400).json({message:"unauthorized"});
    //     }
    // })
};