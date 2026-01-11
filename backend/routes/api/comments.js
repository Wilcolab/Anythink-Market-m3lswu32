/**
 * Comments API Router
 * 
 * Handles HTTP requests for comment operations including:
 * - Retrieving all comments
 * - Deleting comments by ID
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * GET /
 * Retrieves all comments from the database
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object[]} Array of comment objects
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * DELETE /:id
 * Deletes a comment by its ID
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The comment ID to delete
 * @param {Object} res - Express response object
 * @returns {Object} Success message confirming deletion
 * @throws {Error} Returns 500 status with error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// hey comment

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const commentId = req.params.id;
        await Comment.findByIdAndDelete(commentId);
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});