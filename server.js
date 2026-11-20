import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app=express();
const port=process.env.PORT||3000;
const dir=path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(dir,'public')));
app.get('*',(req,res)=>res.sendFile(path.join(dir,'public','index.html')));
app.listen(port,()=>console.log(`CineMatch demo running at http://localhost:${port}`));
