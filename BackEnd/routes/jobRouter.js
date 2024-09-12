import express from 'express';
import {deleteJob, getAllJobs, getmyJobs, getSinglejob, postJob, updateJob} from "../controllers/jobController.js";
import { isAuthorised } from '../middlewares/Auth.js';

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthorised, postJob);
router.get("/getmyJobs", isAuthorised, getmyJobs);
router.put("/update/:id", isAuthorised, updateJob);
router.delete("/delete/:id", isAuthorised, deleteJob);
router.get("/:id", isAuthorised, getSinglejob);


export default router;