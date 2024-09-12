import express from 'express';
import {employerGetAllApplications, jobseekerGetAllApplications, jobSeekerDeleteApplication, postApplication} from "../controllers/applicationController.js";
import {isAuthorised} from "../middlewares/Auth.js";


const router = express.Router();

router.get("/jobseeker/getall", isAuthorised, jobseekerGetAllApplications);
router.get("/employer/getall",isAuthorised, employerGetAllApplications);
router.delete("/delete/:id", isAuthorised, jobSeekerDeleteApplication);
router.post("/post", isAuthorised, postApplication);

export default router;