/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: API for managing authors
 */

/**
 * @swagger
 * /api/authors:
 *   post:
 *     tags: [Authors]
 *     summary: Create a new author
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 example: "Dupont"
 *               prenom:
 *                 type: string
 *                 example: "Jean"
 *               livres:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: ID of the book(s) written by the author
 *     responses:
 *       201:
 *         description: Author created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/authors:
 *   get:
 *     tags: [Authors]
 *     summary: Get all authors
 *     responses:
 *       200:
 *         description: A list of authors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */

/**
 * @swagger
 * /api/authors/{id}:
 *   get:
 *     tags: [Authors]
 *     summary: Get an author by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the author
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Author details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       404:
 *         description: Author not found
 */

/**
 * @swagger
 * /api/authors/{id}:
 *   put:
 *     tags: [Authors]
 *     summary: Update an author by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the author
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 example: "Dupont"
 *               prenom:
 *                 type: string
 *                 example: "Jean"
 *               livres:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: ID of the book(s) written by the author
 *     responses:
 *       200:
 *         description: Author updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Author not found
 */

/**
 * @swagger
 * /api/authors/{id}:
 *   delete:
 *     tags: [Authors]
 *     summary: Delete an author by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the author
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Author deleted successfully
 *       404:
 *         description: Author not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the author
 *         nom:
 *           type: string
 *           description: The last name of the author
 *         prenom:
 *           type: string
 *           description: The first name of the author
 *         livres:
 *           type: array
 *           description: The books written by the author
 *           items:
 *             type: string
 *             description: ID of the book(s)
 */
