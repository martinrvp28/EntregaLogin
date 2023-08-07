import { UserModel } from "./models/user.model.js";

export default class UserDao {

    async registerUser(user){
        try {
            const {email} = user;
            const existUser = await UserModel.findOne({email});
            console.log('existUser::', existUser);
            if(!existUser){
                const newUser = await UserModel.create(user);
                return newUser;
            }
            else return false;
        } catch (error) {
            console.log(error);
        }
    }

    async loginUser(email, password){

        try {
            const userExist = await UserModel.findOne({email, password});
            if (userExist) return userExist;
            else return false;
        } catch (error) {
            console.log(error);
        }
        
    }
}