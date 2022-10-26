import { v4 as uuidv4 } from 'uuid';

export default function createUser( name, age, data) {

    const newUser= {
        id: uuidv4(),
        name: name,
        age: age
    }
    data.push(newUser);
    return data;
}