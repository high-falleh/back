/**
 * @swagger
 * /api/user/getAllUser:
 *  get:
 *      tags:
 *        - User
 *      description: Get all users
 *      responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/user/register:
 *  post:
 *      tags:
 *        - User
 *      description: register
 *      responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/user/login:
 *  post:
 *      tags:
 *        - User
 *      description: Login 
 *      responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/user/updatePassword/{userId}:
 *  put:
 *      tags:
 *        - User
 *      
 *      parameters:
 *      - name: userId
 *        in: path
 *        type: integer
 *        description: The id of the user
 *        required: true
 *      description: update Password
 *      responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/user/updateEmail/{userId}:
 *  put:
 *      tags:
 *        - User
 *      description: update Email
 *      responses:
 *       200:
 *         description: Success
 */






