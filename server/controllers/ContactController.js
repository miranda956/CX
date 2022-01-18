const express=require("express");
const db=require("../models");

function router(app){

  app.post("/api/Contact",(req,res,next)=>{
    db.Contacts.create({
        fullName:req.body.fullName,
        jobTitle:req.body.jobTitle,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        notes:req.body.notes,
        companyRef:req.body.companyName,

    
    }).then((data)=>{
      res.status(201).json(data)
    }).catch((err)=>{
      next(err);
    })
  })
    app.get("/api/contacts",(req,res,next)=>{
        db.Contacts.findAll({
        
        })
        .then((data)=>{
            res.status(202).json(data)
        }).catch((err)=>{
            next(err);
        })
    });
    // view property --  by id
    app.get('/api/contact/:id',(req,res,next)=>{
      db.Contacts.findAll({
        where:{
          id:req.param.id
        }
      }).then((data)=>{
        res.status(202).json(data)
      }).catch((err)=>{
        next(err)
      })
    })
    // creating a resource  

// patching a resource 
app.patch("/api/contact/:id",(req,res,next)=>{
  db.Contacts.update({
    fullName:req.body.fullName,
    jobTitle:req.body.jobTitle,
    address:req.body.address,
    phone:req.body.phone,
    email:req.body.email,
    notes:req.body.notes,
    companyRef:req.body.companyName,

  },{
    where:{
      id:req.param.id

    }
  }).then((data)=>{
  res.status(201).json(data)
  }).catch((err)=>{
    next(err)
  })
})
// searching a resource 
    app.get("api/search/keyword",(req,res,next)=>{
        db.Contacts.findAll({
            where:{
                $or:{
                    fullName: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      jobTitle:{
                          $like:"%"+req.params.keyword +"%"
                      },
                      address: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      phone: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      location: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      email: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      notes: {
                        $like: "%" + req.params.keyword + "%"
                      }
                }
            }
        }).then((results)=>{
            res.render("search",{
                search:results
            })
        }).catch((err)=>{
            next(err);
        })
    })

    
    
}
module.exports=router;