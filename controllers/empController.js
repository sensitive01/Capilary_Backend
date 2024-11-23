const Employee = require('../models/empModel');

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        console.log("Create Employee Request:", req.body);
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully', employee });
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(400).json({ message: error.message });
    }
};

// Read all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read a single employee by empId
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findOne({ _id: req.params.id });
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an employee by empId
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true, // Return the updated document
                runValidators: true, // Ensure validators run
            }
        );
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee updated successfully', employee });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an employee by empId
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOneAndDelete({ _id: req.params.id });
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update many employees
exports.updateManyEmployees = async (req, res) => {
    try {
        const { filter, update } = req.body;

        // Perform the updateMany operation
        const result = await Employee.updateMany(filter, update);

        // Check if any documents were modified
        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'No employees matched the filter criteria' });
        }

        res.status(200).json({ message: 'Employees updated successfully', result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Controller function to update employee status
exports.updateEmployeeStatus = async (req, res) => {
  const { id } = req.params; // Get employee ID from route parameter
  const { status } = req.body; // Get the new status from request body

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  try {
    // Find the employee by ID and update the status
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ message: 'Status updated successfully', employee: updatedEmployee });
  } catch (error) {
    console.error('Error updating employee status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

