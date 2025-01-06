module.exports=(req,res,next)=>{
    let arrIps=["192.168.15","8.6.5.9","54.21.58.2"];
for(let i=0;i<arrIps.length;i++)
{
    if(req.ip==arrIps[i])
    {
        return next();
    }
}
return res.status(401).json({msg:"notAuthorized"});
next();
};
