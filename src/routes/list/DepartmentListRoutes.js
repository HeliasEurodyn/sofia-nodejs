const express = require('express');
const router = express.Router();
const DepartmentListController = require('../../controllers/list/DepartmentListController');

/**
 * @swagger
 * tags:
 *   name: Department List
 *   description: Department list operations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DepartmentListItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *
 *     DepartmentListRequest:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *         size:
 *           type: integer
 *         search:
 *           type: string
 *
 *     DepartmentListResponse:
 *       type: object
 *       properties:
 *         total:
 *           type: integer
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/DepartmentListItem'
 */

/**
 * @swagger
 * /api/list/department:
 *   post:
 *     summary: Get department list (paginated / filtered)
 *     tags: [Department List]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DepartmentListRequest'
 *     responses:
 *       200:
 *         description: Department list response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DepartmentListResponse'
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */
router.post('/', DepartmentListController.getList);

module.exports = router;