const express = require('express');
const router = express.Router();
const DepartmentFormController = require('../../controllers/form/DepartmentFormController');

/**
 * @swagger
 * tags:
 *   name: Department Form
 *   description: Department CRUD operations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Department:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 */

/**
 * @swagger
 * /api/form/d1896b1c-9599-4ea9-a333-004df7d278bf/{id}:
 *   get:
 *     summary: Get department by ID
 *     tags: [Department Form]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Department found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Department'
 *       404:
 *         description: Department not found
 */
router.get('/:id', DepartmentFormController.getById);

/**
 * @swagger
 * /api/form/d1896b1c-9599-4ea9-a333-004df7d278bf:
 *   post:
 *     summary: Create department
 *     tags: [Department Form]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Department'
 *     responses:
 *       200:
 *         description: Department created
 */
router.post('/', DepartmentFormController.create);

/**
 * @swagger
 * /api/form/d1896b1c-9599-4ea9-a333-004df7d278bf:
 *   put:
 *     summary: Update department
 *     tags: [Department Form]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Department'
 *     responses:
 *       200:
 *         description: Department updated
 */
router.put('/', DepartmentFormController.update);

/**
 * @swagger
 * /api/form/d1896b1c-9599-4ea9-a333-004df7d278bf/{id}:
 *   delete:
 *     summary: Delete department
 *     tags: [Department Form]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Department deleted
 *       404:
 *         description: Department not found
 */
router.delete('/:id', DepartmentFormController.remove);

module.exports = router;