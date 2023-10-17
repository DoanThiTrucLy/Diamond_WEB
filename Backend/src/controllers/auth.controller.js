import User from '../models/user.model.js';

// [POST] /auth/signup      -- dang ky
const createUser = async(req, res) => {
    const {name, username, password, numberphone, email, address} = req.body;
    try {
        const user = await User.create({
            name, username, password, numberphone, email, address
        });
        return res.status(201).json(user);
    } catch {
        return res.status(500).json('Something wrong');
    }
}

// [POST] /auth/signin    -- dang nhap
const signinUser = async(req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({
             username, password
        });

        if(user) {
            return res.status(200).json(user);
        }
        return res.status(404).json('username hoặc password không đúng');
    } catch {
        return res.status(500).json('Something wrong');
    }
}

// [GET] /user
// const getUsers = async(req, res) => {
//     try {
//         const users = await Userser.find({});
//         return res.status(200).json(users);
//     } catch {
//         return res.status(500).json('Something wrong');
//     }
// }


export default {createUser, signinUser };


