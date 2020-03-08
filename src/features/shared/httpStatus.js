const deleteEntry = (Id,isSuccessful)=>
{
    if(isSuccessful)
    {
        return { status: 204, message: `Successfully deleted ${Id}` }
    }
    else
    {
        throw{ status: 500, message: 'Error while trying to delete Movies ' }
    }
}
const getEntry = (data,isSuccessful)=>
{
    if(isSuccessful)
    {
        return { status: 200, data: data }
    }
    else
    {
        throw{ status: data.status, message: `Couldn't get Movies \n ${data.message}` }
    }
}
const updateEntry = (data,isSuccessful)=>
{
    if(isSuccessful)
    {
        return { status: 200, data: data }
    }
    else
    {
        throw{ status: 500, message: `Error while trying to update Movies \n ${data.message}` }
    }
}
const insertEntry = (data,isSuccessful)=>
{
    if(isSuccessful)
    {
        return { status: 200, data: data }
    }
    else
    {
        throw { status: 500, message: `Error while trying to insert into Movies \n ${data.message}` }
    }
}

module.exports = {
    insertEntry,
    updateEntry,
    getEntry,
    deleteEntry
}
