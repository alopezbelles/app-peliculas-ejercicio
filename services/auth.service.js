const crypto = require("node:crypto");

function assertPasswordIsValid(pass) {
    if (pass.length < 8) {
        throw new Error("Password must be at least 8 characters long");
    }
    // validate it has one lower case letter
    if (!pass.match(/[a-z]/)) {
        throw new Error("Password must have at least one lower case letter");
    }
    // validate it has one upper case letter
    if (!pass.match(/[A-Z]/)) {
        throw new Error("Password must have at least one upper case letter");
    }
    // validate it has one number
    if (!pass.match(/[0-9]/)) {
        throw new Error("Password must have at least one number");
    }
};

const assertEmailIsValid = async (email) => {
    // Validate email
    const usuario = await models.usuario.findOne({ where: {email: email} })
    if (user) {
        throw new Error('Email is already in use')
    }
}

module.exports = {
    assertPasswordIsValid,
    assertEmailIsValid
}