const jwt = require("jsonwebtoken");
const config = require("../config/authconfig");
const db = require("../models");
const User = db.user;

 const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

 const isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

const isSom = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "sales operation manager") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require sales operation manager Role!"
        });
        return;
      });
    });
  };

  const isIsp = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "inside sales person") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require inside sales person Role!"
        });
        return;
      });
    });
  };

  const isOsp = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "outside sales person") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require outside sales person Role!"
        });
        return;
      });
    });
  };

  const isAc = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "account executive") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require account executive Role!"
        });
        return;
      });
    });
  };

  const isSdr = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "sales development representive") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require sales development representive Role!"
        });
        return;
      });
    });
  };

  

 const isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator or Admin Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isAc:isAc,
  isIsp:isIsp,
  isOsp:isOsp,
  isSdr:isSdr,
  isSom,isSom
  isModeratorOrAdmin: isModeratorOrAdmin
};
module.exports = authJwt;
