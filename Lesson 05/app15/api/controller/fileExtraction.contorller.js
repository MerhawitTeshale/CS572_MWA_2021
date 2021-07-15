const extract=require('extract-zip');

console.log(`app started`);
module.exports.extractzip=async function main(req,res){
    
    const source=req.body.url;
    const destination="C:/Users/Merry/Downloads/meanGame";
    try{
        console.log(`file extraction started`);
        //C:/Users/Merry/OneDrive/Documents/Merha.zip
        await extract (source,{dir:destination});
       
    } catch(err){
        console.log(`error occured ${err}`);
        res.status(500).json({message:"extraction failed"});
    };
     res.status(200).json({message:"extracted successfully"});
};

