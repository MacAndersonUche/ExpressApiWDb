const { v4  } = require("uuid");

function createUser( name, age, data) {

    const newUser= {
        id: v4(),
        name: name,
        age: age
    }
    data.push(newUser);
    return data;
}

module.exports = createUser;