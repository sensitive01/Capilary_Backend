const Vendor = require('../models/vendorModel'); // Import the vendor model

// Create a new vendor
exports.createVendor = async (req, res) => {
    try {
        console.log("Create Vendor Request:", req.body);
        const vendor = new Vendor(req.body);
        await vendor.save();
        res.status(201).json({ message: 'Vendor created successfully', vendor });
    } catch (error) {
        console.error("Error creating vendor:", error);
        res.status(400).json({ message: error.message });
    }
};

// Read all vendors
exports.getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json(vendors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read a single vendor by ID
exports.getVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findOne({ _id: req.params.id });
        if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
        res.status(200).json(vendor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a vendor by ID
exports.updateVendor = async (req, res) => {
    try {
     
        const vendor = await Vendor.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true, // Return the updated document
                runValidators: true, // Ensure validators run
            }
        );
        if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
        res.status(200).json({ message: 'Vendor updated successfully', vendor });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a vendor by ID
exports.deleteVendor = async (req, res) => {
    try {
        const vendor = await Vendor.findOneAndDelete({ _id: req.params.id });
        if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
        res.status(200).json({ message: 'Vendor deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update many vendors
exports.updateManyVendors = async (req, res) => {
    try {
        const { filter, update } = req.body;

        // Perform the updateMany operation
        const result = await Vendor.updateMany(filter, update);

        // Check if any documents were modified
        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'No vendors matched the filter criteria' });
        }

        res.status(200).json({ message: 'Vendors updated successfully', result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
