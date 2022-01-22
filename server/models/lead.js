module.exports=(sequelize,DataTypes)=>{
    const Leads =sequelize.define("Leads",{
   firstName:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,

   },
   lastName:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,

   },
   companyName:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,

   },
   work:{
    type:DataTypes.INTEGER,
    allowNull:false,
    required:true,

   },
   email:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,
       
   },
   mobile:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,
   },
   owner:{

    type:DataTypes.STRING,
    allowNull:false,
    required:true,
   },
   leadStatus:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,
   }

    }) 
  
    return Leads;

}