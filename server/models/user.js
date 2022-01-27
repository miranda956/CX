
/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       first_name:
 *         type: string
 *       last_name:
 *         type: integer
 *       email:
 *         type: string
 *       username:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *       resetPasswordToken:
 *         type: string
 *       resetPasswordExpires:
 *         type: string
 *         format: date-time
 *       required:
 *         - email
 *         - username
 *         - password
 */

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name:{
        type: Sequelize.STRING

      },
      last_name:{
        type: Sequelize.STRING

      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
    resetPasswordToken: sequelize.STRING,
    resetPasswordExpires: sequelize.DATE,
    });

    User.associate=(models)=>{
      User.belongsToMany(models.roles,{
        through:'userRoles'
      })
    }
  
    return User;
  };
  