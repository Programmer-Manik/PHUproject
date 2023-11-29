import  express  from "express";
import { AcademicSemesterControllers } from "./academic.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterValidations } from "./academic.validation";

const router = express.Router();

router.post(
    '/create-academic-semester',
     validateRequest(AcademicSemesterValidations.CreateAcademicSemesterValidationSchema),
    AcademicSemesterControllers.createAcademicSemester)

export const AcademicSemesterRouters = router;