const express=require('express');
const app = express();
app.get('/ace',(req,res)=>{
    res.send('Hello ACE College');
});
app.get('/',(req,res)=>{
    res.send('Hello root');
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
