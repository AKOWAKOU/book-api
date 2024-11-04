/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API for managing books
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     tags: [Books]
 *     summary: Create a new book
 *     description: Creates a new book and saves it to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               auteurPrincipal:
 *                 type: string
 *                 format: uuid
 *               auteursSecondaires:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: uuid
 *               categorie:
 *                 type: string
 *                 format: uuid
 *               disponible:
 *                 type: boolean
 *                 default: true
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 titre:
 *                   type: string
 *                 auteurPrincipal:
 *                   type: string
 *                 auteursSecondaires:
 *                   type: array
 *                   items:
 *                     type: string
 *                 categorie:
 *                   type: string
 *                 disponible:
 *                   type: boolean
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     tags: [Books]
 *     summary: Get all books
 *     description: Returns a list of all books in the database.
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   titre:
 *                     type: string
 *                   auteurPrincipal:
 *                     type: string
 *                   auteursSecondaires:
 *                     type: array
 *                     items:
 *                       type: string
 *                   categorie:
 *                     type: string
 *                   disponible:
 *                     type: boolean
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     tags: [Books]
 *     summary: Get a book by ID
 *     description: Returns a single book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 titre:
 *                   type: string
 *                 auteurPrincipal:
 *                   type: string
 *                 auteursSecondaires:
 *                   type: array
 *                   items:
 *                     type: string
 *                 categorie:
 *                   type: string
 *                 disponible:
 *                   type: boolean
 *       404:
 *         description: Book not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     tags: [Books]
 *     summary: Update a book
 *     description: Updates a book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               auteurPrincipal:
 *                 type: string
 *               auteursSecondaires:
 *                 type: array
 *                 items:
 *                   type: string
 *               categorie:
 *                 type: string
 *               disponible:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Book updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 titre:
 *                   type: string
 *                 auteurPrincipal:
 *                   type: string
 *                 auteursSecondaires:
 *                   type: array
 *                   items:
 *                     type: string
 *                 categorie:
 *                   type: string
 *                 disponible:
 *                   type: boolean
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Book not found
 */

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     tags: [Books]
 *     summary: Delete a book
 *     description: Deletes a book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/books/{id}/borrow:
 *   post:
 *     tags: [Books]
 *     summary: Borrow a book
 *     description: Marks a book as borrowed.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book borrowed successfully
 *       400:
 *         description: Book not available
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/books/{id}/return:
 *   post:
 *     tags: [Books]
 *     summary: Return a book
 *     description: Marks a book as returned.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book returned successfully
 *       400:
 *         description: Book already returned
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         titre:
 *           type: string
 *           description: The title of the book
 *         auteurPrincipal:
 *           type: string
 *           description: The ID of the main author of the book
 *         auteursSecondaires:
 *           type: array
 *           description: The IDs of secondary authors of the book
 *           items:
 *             type: string
 *         categorie:
 *           type: string
 *           description: The ID of the category of the book
 *         disponible:
 *           type: boolean
 *           description: The availability status of the book
 *           default: true
 */
