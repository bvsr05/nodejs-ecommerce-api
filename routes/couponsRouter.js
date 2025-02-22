import exppress from "express";
import {
  createCouponCtrl,
  getAllCouponsCtrl,
  getCouponCtrl,
  updateCouponCtrl,
  deleteCouponCtrl,
} from "../controllers/couponsCtrl.js";
 import isAdmin from "../middlewares/isAdmin.js";
 import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const couponsRouter = exppress.Router();

couponsRouter.post("/", isLoggedIn, isAdmin, createCouponCtrl);
couponsRouter.get("/", getAllCouponsCtrl);
couponsRouter.put("/update/:id", isLoggedIn, isAdmin, updateCouponCtrl);
couponsRouter.delete("/delete/:id", isLoggedIn, isAdmin, deleteCouponCtrl);
couponsRouter.get("/single/:id", getCouponCtrl);

export default couponsRouter;