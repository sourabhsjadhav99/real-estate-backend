let express= require("express")
// let img= require("../../public/Images")
const Product = require("../connectionAndSchema/product");
const router = express.Router();
router.use(express.json());
const multer = require("multer");


//get
router.get("/",  async(req, res) => {
  try {
    let data = await Product.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});
router.get("/:id", async(req, res) => {
  try {
    let data = await Product.find({ppdId:req.params.id});
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});



router.post("/", async (req, res) => {
    try {
      const id =` PPD${1000+Math.floor(Math.random()*1000)}`;
      let data = await Product.create({...req.body, ppdId:id, status:"Unsold"})
      res.send(data);
      console.log(data);
    } catch (e) {
      res.status(400).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

  router.put("/:ppdId", async (req, res) => {
    try {
      let data = await Product.updateOne({ppdId:req.params.ppdId},{$set: req.body})
      res.send(data);
    } catch (e) {
      res.status(400).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

  router.delete("/:id", async(req, res) => {
    try {
      let data = await Product.deleteOne({ppdId:req.params.id});
      res.send(data);
    } catch (e) {
      res.status(404).json({
        status: "Failed",
        message: e.message,
      });
    }
  });
  
module.exports = router;