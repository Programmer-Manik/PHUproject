import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academic.services';
const createAcademicSemester  = catchAsync(async (
    req,
    res,
  ) => {
      // const { password, student: studentData } = req.body;
      // const zodParsedData = studentValidationSchema.parse(studentData);
      const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester  is created succesfully',
        data: result,
      })
  })

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
