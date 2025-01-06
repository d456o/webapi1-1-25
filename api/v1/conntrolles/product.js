module.exports={
    GetAll:(req,res)=>{
        return res.status(200).json({msg:"all product"});
    },
    GetById:(req,res)=>{
        let prodid=req.params.id;
        return res.status(200).json({msg:'product Id${prodid}'});
    },
    AddNew:(req,res)=>{
        console.log(req.body);
        return res.status(200).json({msg:"add new product"});
    },
    updateById:(req,res)=>{
        let prodid=req.params.id;
        return res.status(200).json({msg:'Update Product Id${prodid}'});
    },
    deleteById:(req,res)=>{
        let prodid=req.params.id;
        return res.status(200).json({msg:'delete product Id${prodid}'});
    },
}