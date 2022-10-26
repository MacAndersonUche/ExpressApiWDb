import { v4 as uuidv4 } from 'uuid';
import {usersArray} from "../../database/db";


export default function createUser( name, age, data) {

    const newUser= {
        id: uuidv4(),
        name: name,
        age: age
    }
    data.push(newUser);
    return data;
}