const studentModel = require('../models/studentModel');

const getAllStudents = () => studentModel.findAll();

const getStudentById = async (id) => {
  const student = await studentModel.findById(id);
  if (!student) {
    throw new Error('STUDENT_NOT_FOUND');
  }
  return student;
};

const createStudent = async (data) => {
  return studentModel.create(data);
};

const updateStudent = async (id, data) => {
  const affected = await studentModel.update(id, data);
  if (!affected) {
    throw new Error('STUDENT_NOT_FOUND');
  }
};

const deleteStudent = async (id) => {
  const affected = await studentModel.remove(id);
  if (!affected) {
    throw new Error('STUDENT_NOT_FOUND');
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
