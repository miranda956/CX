exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  

  exports.salesOperationBoard=(req,res)=>{
      res.status(200).send("sales operation manager content")
  }

  exports.insideSalesPersonBoard=(req,res)=>{
      res.status(200).send("inside sales person content")
  }

  exports.outsideSalesPersonBoard=(req,res)=>{
      res.status(200).send("outside sales person content")
  }

  exports.accountExecutiveBoard=(req,res)=>{
      res.status(200).send("account executive content")
  }
  exports.salesDevelopmentRepresentativeBoard=(req,res)=>{
      res.status(200).send("sales development representive content")
  }