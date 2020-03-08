class HttpStatus {
    constructor(featureName) {
        this.featureName = featureName;
    }

    deleteEntry = (Id, isSuccessful) => {
        if (isSuccessful) {
            return { status: 204, message: `Successfully deleted ${Id}` }
        }
        else {
            throw { status: 500, message: `Error while trying to delete ${this.featureName} ` }
        }
    }
    getEntry = (data, isSuccessful) => {
        if (isSuccessful) {
            return { status: 200, data: data }
        }
        else {
            throw { status: data.status, message: `Couldn't get ${this.featureName} \n ${data.message}` }
        }
    }
    updateEntry = (data, isSuccessful) => {
        if (isSuccessful) {
            return { status: 200, data: data }
        }
        else {
            throw { status: 500, message: `Error while trying to update ${this.featureName} \n ${data.message}` }
        }
    }
    insertEntry = (data, isSuccessful) => {
        if (isSuccessful) {
            return { status: 200, data: data }
        }
        else {
            throw { status: 500, message: `Error while trying to insert into ${this.featureName} \n ${data.message}` }
        }
    }
}



module.exports = HttpStatus;
