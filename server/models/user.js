module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });

    User.associate=(models)=>{
      User.belongsToMany(models.roles,{
        through:'userRoles'
      })
    }
  
    return User;
  };
  