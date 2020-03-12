const validateBodyRental = (req, res, next) => {
    try {
        next();
    } catch (error) {
        throw error
    }
}
const _throw = (m) => { throw m; }
const _return = (m) => { return m; }
module.exports = {
    validateBodyRental
}