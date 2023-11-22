import { Router } from "express";
import Property from "../models/property.js";
//import { getPropertyData } from "../controllers/tenantPropController";


const attributesChosen =["name","description","image_url"];

const getPropertyData = async(req,res) =>{

    try {
        console.log("udah nyambung");
    console.log("apajadehhhhhhhhhh");
const result =await Property.findAll({
    attributes: attributesChosen,
  });

  const dataValuesArray=result.map((result)=>result.dataValues)

  return res.status(200).send({
    message: "Product Data Succesfully Retrieved",
    data: dataValuesArray,
  });

    }
    catch(err)
    {
        return res.send({
            message: err.message,
          });
    }
}


const postPropertyData=async(req,res)=>{}

const router = Router();

// router.get ("/", totalProductList);
router.get("/",getPropertyData);
router.post("/",postPropertyData)

export default router;