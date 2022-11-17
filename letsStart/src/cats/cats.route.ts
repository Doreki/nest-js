import { Router } from "express";
import { Cat, CatType } from "./cats.model";
import {
  deleteCat,
  readAllCat,
  readCat,
  updateCat,
  createCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

router.get("/cats", readAllCat);

router.get("/cats/:id", readCat);

//*CREATE 새로운 고양이 추가 api
router.post("/cats", createCat);

router.put("/cats/:id", updateCat);

router.patch("/cats/:id", updatePartialCat);

router.delete("/cats/:id", deleteCat);
export default router;
