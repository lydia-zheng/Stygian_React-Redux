const Messages = require('../models/MsgModel');


const deleteAll = async (req, res) => {
    Messages.deleteMany({}) // empty object for no condition for delete; deletes all
    .then (data => {
        res.status(200).send({
            message: `${data.deletedCount} messages were deleted successfully.`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred when removing all messages."
        })
    })
}

module.exports = {
    deleteAll
}