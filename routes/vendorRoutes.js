const express = require('express');
const {
    createVendor,
    getAllVendors,
    getVendorById,
    updateVendor,
    deleteVendor,
    updateManyVendors,
} = require('../controllers/vendorController');

const router = express.Router(); // Use Router() for modular routing

// Define routes
router.post('/create', createVendor); // Create a vendor
router.get('/get-all', getAllVendors); // Get all vendors
router.get('/get/:id', getVendorById); // Get a vendor by ID
router.put('/update/:id', updateVendor); // Update a vendor by ID
router.delete('/delete/:id', deleteVendor); // Delete a vendor by ID
router.put('/update-many', updateManyVendors); // Update multiple vendors

// Uncomment this if bulk deletion is required
// router.delete('/delete-many', deleteManyVendors);

module.exports = router;
