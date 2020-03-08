const validateBodyMovie = (req,res,next) =>{
    try {
        next();       
    } catch (error) {
        
    }
}
module.exports = {
    validateBodyMovie
}