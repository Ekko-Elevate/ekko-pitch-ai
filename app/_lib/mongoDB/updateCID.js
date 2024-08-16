import { connectToDatabase } from "../../_lib/mongoDB/db.js";
import { User } from "../../_lib/mongoDB/user.js";


export async function updateCID(UID, newCID){
    await connectToDatabase();
    try {
        const updatedUser = await User.findOneAndUpdate(
          { UID: UID }, //find user by UID
          { $push: { CID: newCID } }, //push the new CID value to the CID array
          { new: true } //return the updated document
        );
    
        if (!updatedUser) {
          console.error('user not found');
        }
        console.log('User updated:', updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
    }
}