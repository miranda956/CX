module.exports=(sequelize,DataTypes)=>{
    const Company = sequelize.define("Company",{
    formalName:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true,

    },

    mainAddress:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,
    },
    postalCode:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,
    },
    ReceptionNo:{
     type:DataTypes.STRING,
    allowNull:false,
    required:true,
    },
    websiteUrl:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true,
    }



    });
    return Company;
}