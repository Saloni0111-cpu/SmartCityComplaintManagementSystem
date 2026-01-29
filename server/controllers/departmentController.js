import Department from "../models/Department.js";


export const getDepartments = async (req, res) => {
  try {
    const departments = await Department
      .find()
      .sort({ createdAt: -1 });

    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const addDepartment = async (req, res) => {
  const { name, head, contact, staff } = req.body;

  try {
    if (!name || !head || !contact) {
      return res.status(400).json({
        message: "Name, Head and Contact are required"
      });
    }

    const department = await Department.create({
      name,
      head,
      contact,
      staff: staff || 0
    });

    res.status(201).json({
      message: "Department created successfully",
      department
    });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const updateDepartment = async (req, res) => {
  try {
    const updated = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Department not found" });
    }

    res.status(200).json({
      message: "Department updated successfully",
      department: updated
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteDepartment = async (req, res) => {
    try {
        await Department.findByIdAndDelete(req.params.oid);
        res.json({ message: "Department deleted successfully"});
    } catch(error) {
    res.status(400).json({ message: error.message});
    }
};