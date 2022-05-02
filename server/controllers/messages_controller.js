const req = require("express/lib/request");

let messages = [];
let id = 0;
module.exports = {

    create: (req, res) => {
        const {text, time} = req.body;
        const newMessage = {
            id: id,
            text: text,
            time: time
        }
        id++;
        messages.push(newMessage);
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const {text} = req.body;
        const {id} = req.params;
        messages.forEach((message) => {
            if(Number(message.id) === Number(id)){
                message.text = text;
            }
        });
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        console.log("Delete function called");
        const {id} = req.params;
        console.log(id);
        if(messages.length === 0){
            res.status(200).send('No messages to delete');
        }
        else{
            let updatedMessages = messages.filter((message) => {
                if(Number(message.id) !== Number(id)){
                    return message;
                }
            });
            messages = updatedMessages;
            res.status(200).send(messages);

        }
    }
}