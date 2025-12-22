const studentService = require('../services/studentService');

const getAll = async (req, res, next) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    res.json(student);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const id = await studentService.createStudent(req.body);
    res.status(201).json({ id });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    await studentService.updateStudent(req.params.id, req.body);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
