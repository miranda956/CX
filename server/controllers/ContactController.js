const express=require("express");
const db=require("../models");

function router(app){

/**
 * @swagger
 * /api/contact:
 *   post:
 *     description: Create a new contact
 *     tags:
 *       - Contacts
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: contact object
 *         in: body
 *         required: true
 *         schema:
 *           type:object
 *         properties:
 *           fullname:
 *             type:string:
 *          
 * 
 *          
 *     responses:
 *       200:
 *         description: new contact
 *         schema:
 *           
 */

  app.post("/api/contact",(req,res,next)=>{
    db.Contacts.create({
        fullName:req.body.fullName,
        jobTitle:req.body.jobTitle,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        notes:req.body.notes,
        companyRef:req.body.companyName,
        location:req.body.location,
        street:req.body.street,
        zipCode:req.body.zipCode


    
    }).then((data)=>{
      res.status(201).json(data)
    }).catch((err)=>{
      next(err);
    })
  })

  /**
 * @swagger
 * /api/contacts:
 *   get:
 *     description: Retrieve the full list of contacts
 *     tags:
 *       - Contacts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: stocks
 *         schema:
 */


   app.get('/api/contacts',(req,res,next)=>{
     db.Contacts.findAll({

     }).then((data)=>{
       res.json(data)
     }).catch((err)=>{
       next(err)
     })
   })



 /**
 * @swagger
 * /api/contact/id:
 *   get:
 *     description: Retrieve an specific contact
 *     tags:
 *       - Contacts
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the contact to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: contact
 *         schema:
 */

      app.get('/api/contact/:id',(req,res,next)=>{
      db.Contacts.findAll({
        where:{
          id:2
        }
      }).then((data)=>{
        res.status(202).json(data)
      }).catch((err)=>{
        next(err)
      })
    })
    

/**
 * @swagger
 * /api/contact/{id}:
 *   patch:
 *     description: Update lastUpdate field of an contact
 *     tags:
 *       - Contacts
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the contact to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as contacts's lastUpdate field
 *         in: body
 *         required: true
 *         schema:
 *     responses:
 *       200:
 *         description: updated contact
 *         schema:
 */



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
                      },
                      street: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      zipCode: {
                        $like: "%" + req.params.keyword + "%"
                      },

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