const { authJwt } = require("../middleware");
const controller = require("../controllers/user");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  
app.get(
    "/api/test/accountexecutive",
    [authJwt.verifyToken, authJwt.isAc],
    controller.accountExecutiveBoard
  );

  
app.get(
    "/api/test/insidesalesperson",
    [authJwt.verifyToken, authJwt.isIsp],
    controller.insideSalesPersonBoard
  );

app.get(
    "/api/test/outsidesalesperson",
    [authJwt.verifyToken, authJwt.isOsp],
    controller.outsideSalesPersonBoard
  );

app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isSdr],
    controller.salesDevelopmentRepresentativeBoard
  );

  

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isSom],
    controller.salesOperationBoard
  );


};
