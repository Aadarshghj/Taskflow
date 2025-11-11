import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://aadarshaadarsh109_db_user:MeAaNSMCEC64hAJe@cluster0.x9b7vdt.mongodb.net/?appName=Cluster0').then(()=>{
    console.log('connected')
}).catch((err)=>{
console.log(err);

})