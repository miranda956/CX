const express = require("express");
const db = require("../models");


function router(app){


/**
 * @swagger
 * /api/lead:
 *   post:
 *     description: Create a new lead
 *     tags:
 *       - Leads
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: lead
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
 *         description: new lead
 *         schema:
 *           
 */
app.post("api/lead",(req,res,next)=>{
    db.Leads.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        companyName:req.body.companyName,
        work:req.body.work,
        email:req.body.email,
        mobile:req.body.mobile,
        owner:req.body.owner,
        leadStatus:req.body.leadStatus
    }).
    then(()=>{
    }).catch((err)=>{
        next(err)
    })
})


  /**
 * @swagger
 * /api/lead:
 *   get:
 *     description: Retrieve the full list of leads
 *     tags:
 *       - Leads
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: leads
 *         schema:
 */


app.get("/api/lead",(req,res,next)=>{
    db.leads.findAll({

    }).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        next(err)
    });
})


 /**
 * @swagger
 * /api/lead/{id}:
 *   get:
 *     description: Retrieve an specific lead
 *     tags:
 *       - Leads
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the lead to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: lead
 *         schema:
 */


app.get("/api/lead/:id",(req,res,next)=>{
    db.Leads.findAll({
        where:{
            id:req.params.id
        }

    })
    .then((result) => {
        res.status(202).json(result)
    }).catch((err) => {
        next(err)
        
    });
})


/**
 * @swagger
 * /api/lead/{id}:
 *   patch:
 *     description: Update fields of a lead
 *     tags:
 *       - Leads
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the lead to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as leads's lastUpdate field
 *         in: body
 *         required: true
 *         schema:
 *     responses:
 *       200:
 *         description: updated lead
 *         schema:
 */

app.patch("/api/lead",(req,res,next)=>{
    db.Leads.update({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        companyName:req.body.companyName,
        work:req.body.work,
        email:req.body.email,
        mobile:req.body.mobile,
        owner:req.body.owner,
        leadStatus:req.body.leadStatus
    },{
        where:{
            id:req.params.id
        }
    }).then((result) => {
        res.status(201).json(result)
    }).catch((err) => {
        next(err)
    });
})


}

module.exports = router;