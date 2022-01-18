module.exports=(sequelize,DataTypes)=>{
    const Contacts =sequelize.define("Contacts",{
   fullName:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,

   },
   jobTitle:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,

   },
   address:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,

   },
   phone:{
    type:DataTypes.INTEGER,
    allowNull:false,
    required:true,

   },
   email:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,
       
   },
   notes:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,
   },
   companyRef:{

    type:DataTypes.STRING,
    allowNull:false,
    required:true,
   },
   location:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,
   },
   street:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,

   },
   zipCode:{

    type:DataTypes.STRING,
    allowNull:false,
    required:true,

   },




    }) 
  
    return Contacts;

}