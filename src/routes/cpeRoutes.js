const express = require('express');
const cpeController = require('../controllers/cpeController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CPE
 *   description: CPE (Common Platform Enumeration) operations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cpe:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         vendor:
 *           type: string
 *         version:
 *           type: string
 *         description:
 *           type: string
 *
 *     CpeSearchRequest:
 *       type: object
 *       properties:
 *         keyword:
 *           type: string
 *           description: Free text search term
 *         vendor:
 *           type: string
 *         version:
 *           type: string
 *
 *     CpeSearchResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Cpe'
 */

/**
 * @swagger
 * /api/list/cpe:
 *   get:
 *     summary: Get all CPE entries
 *     tags: [CPE]
 *     responses:
 *       200:
 *         description: List of CPEs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cpe'
 *       500:
 *         description: Internal server error
 */
router.get('/', cpeController.getAllCpes);

/**
 * @swagger
 * /api/list/cpe/search:
 *   post:
 *     summary: Search CPE entries
 *     tags: [CPE]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CpeSearchRequest'
 *     responses:
 *       200:
 *         description: Filtered CPE results
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CpeSearchResponse'
 *       400:
 *         description: Invalid search request
 *       500:
 *         description: Internal server error
 */
router.post('/search', cpeController.searchCpes);

module.exports = router;