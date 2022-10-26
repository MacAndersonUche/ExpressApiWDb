import { getUsers } from "../../database";

export default function getAllUsers(){
    let dataToReturn;
    (async () => {
        dataToReturn = await getUsers();
        console.log(dataToReturn);
        return dataToReturn;
    })();
}
