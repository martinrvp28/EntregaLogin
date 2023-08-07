import UserDao from "../daos/mongodb/user.dao.js";
const userDao = new UserDao();

export const registerUser = async (req,res) => {
    try {
        const user = req.body;
        const newUser = await userDao.registerUser(user);
        if (newUser) res.redirect('/login');
        else res.redirect('/error-register');
    } catch (error) {
        console.log(error);
    }
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userDao.loginUser(email, password);
        console.log(user);
        if (user) {
            req.session.email = email;
            req.session.password = password;
            req.session.user = user;
            res.redirect('/api/products');
        } else {
            res.redirect('/error-login');
        }
    } catch (error) {
        console.log(error);
    }
}
