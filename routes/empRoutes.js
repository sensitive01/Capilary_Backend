const express = require('express');
const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    updateManyEmployees,
    updateEmployeeStatus,
    generateEmpId,
    createNewEmployee,
    verifyUser,
    createNewReq,
    getAllEmployeeReq,
    getAdminEmployeeReq,
    deleteRequest
} = require('../controllers/empController');

const router = express.Router(); // Use Router() for modular routing

// Define routes
router.get('/generate-empid',generateEmpId); 



router.post('/create', createEmployee); // Create an employee
router.get('/get-all', getAllEmployees); // Get all employees
router.get('/get/:id', getEmployeeById); // Get an employee by empId
router.put('/update/:id', updateEmployee); // Update an employee by empId
router.delete('/delete/:id', deleteEmployee); // Delete an employee by empId
router.put('/update-many', updateManyEmployees); 
router.put('/update-status/:id',updateEmployeeStatus); 


router.post('/create-newrequest/:id',createNewReq); 

router.post('/create-new-employee',createNewEmployee); 
router.post('/verify-person',verifyUser); 
router.get('/get-all-req/:id',getAllEmployeeReq); 
router.get('/get-all-req-admin',getAdminEmployeeReq);


router.delete('/delete-req/:id',deleteRequest); 







// router.put('/create-newrequest',updateEmployeeStatus); 







// Uncomment this if bulk deletion is required
// router.delete('/delete-many', deleteManyEmployees);

module.exports = router;
