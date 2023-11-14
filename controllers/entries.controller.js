const entry = require('../models/entries.model')

const getEntries = async (req, res) => {
    let entries = await entry.getAllEntries();
    try {
        res.status(200).json(entries); // [] con las entries encontradas
    } catch (error) {
        res.status(500).json({message:`error en getEntriies : ${error}`}); // [] con las entries encontradas
    }
}

const putEntry = async (req,res) => {
    try {
        let data = req.body //{title, content, date, category}   
        let response = await entry.putEntry(data);
        //console.log(response.rowCount);
        if(response.rowCount > 0){
            res.status(200).json({
            "message": `Se ha modificado la entry con titulo :'${data.title}' `
            });
        }else{
            res.status(400).json({
            "message": `no se encontro ninguna entry con titulo : '${data.title}' `
            });
        }

    } catch (error) {
        res.status(500).json({message:`error en putEntrys : ${error}`});
    }
}

const deleteEntry = async (req,res)=>{
    try {
        let data = req.params.title //{title}  
        let response = await entry.deleteEntry(data);
        console.log(response.rowCount);
        if(response.rowCount > 0){
            res.status(200).json({
            "message": `Se ha borrado la entry con titulo :'${data}' `
            });
        }else{
            res.status(400).json({
            "message": `no se encontro ninguna entry con titulo : '${data}' `
            });
        }
    } catch (error) {
        res.status(500).json({message:`error en deleteEntrys : ${error}`});
    }
}

module.exports = {
    getEntries,
    putEntry,
    deleteEntry
}