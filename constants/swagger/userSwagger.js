/**
 * @swagger
 * /api/user/getAllUser:
 *  get:
 *      tags:
 *        - User
 *      summary: get all users.
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
 *      summary: create new user.
 *      description: register
 *      consumes: 
 *          -application/json
 *      parameters:
 *           - in: body
 *             required: true
 *             name: user
 *             schema:
 *                  type: object
 *                  required:
 *                      - userEmail
 *                      - userFullName
 *                      - userPassword
 *                  properties:
 *                      userFullName:
 *                          type: string
 *                          default: khalil kraiem
 *                      userEmail: 
 *                          type: string
 *                          default: khalilkraiemmedia@gmail.com
 *                      userPassword: 
 *                          type: string
 *                          default: 11019029
 *                      userDateOfBirth:
 *                          type: date
 *                          default: 1992-10-21
 *                      userPhone:
 *                          type: string
 *                          default: 52701262
 *      responses:
 *          200:
 *              description: Success
 */

/**
 * @swagger
 * /api/user/login:
*  post:
 *      tags:
 *        - User
 *      summary: login.
 *      description: login
 *      consumes: 
 *          -application/json
 *      parameters:
 *           - in: body
 *             required: true
 *             name: user
 *             schema:
 *                  type: object
 *                  required:
 *                      - userEmail
 *                      - userPassword
 *                  properties:
 *                      userEmail: 
 *                          type: string
 *                          default: khalilkraiemmedia@gmail.com
 *                      userPassword: 
 *                          type: string
 *                          default: 11019029
 *      responses:
 *          200:
 *              description: Success
 */


/**
 * @swagger
 * /api/user/updatePassword/:
 *  put:
 *      tags:
 *        - User
 *      summary: update Password.
 *      description: update Password
 *      parameters:
 *          - in: path
 *            name: userId
 *            type: integer
 *            description: The id of the user
 *            required: true
 *          - in: body
 *            required: true
 *            schema:
 *              type: object
 *              required:
 *                  - userEmail
 *                  - userPassword
 *              properties:
 *                  current:
 *                      type: string
 *                      default: 11019029
 *                  newPassword:
 *                      type: string
 *                      default: 11019029
 * 
 *      responses:
 *          200:
 *              description: Success
 */

/**
 * @swagger
 * /api/user/updateEmail/:
 *  put:
 *      tags:
 *        - User
 *      summary: update Email.
 *      description: update Email
 *      parameters:
 *          - in: path
 *            name: userId
 *            type: integer
 *            description: The id of the user
 *            required: true
 *          - in: body
 *            required: true
 *            schema:
 *              type: object
 *              required:
 *                  - newEmail
 *              properties:
 *                  newEmail:
 *                      type: string
 *                      default: m.khalilkraiem@gmail.com
 * 
 *      responses:
 *          200:
 *              description: Success
 */





