import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller';

const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User Enpoints
 */

/**
 * @swagger
 * /user/profile:
 *  get:
 *      tags: [User]
 *      summary: User profile
 *      produces:
 *          - "application/json"
 *      description: Use to get current user profile (needs to be authenticated)
 *      parameters:
 *           - in: header
 *             name: Authorization
 *             type: string
 *             description: Bearer + Access Token 
 *             required: true
 *      responses:
 *          '200':
 *              description: OK.
 *          '401':
 *              description: Unauthorized.
 *          '500':
 *              description: Server internal error.
 */
userRouter.get('/profile', userCtrl.profile);

/**
 * @swagger
 * /user/deleteAccount:
 *  delete:
 *      tags: [User]
 *      summary: Delete user account
 *      produces:
 *          - "application/json"
 *      description: Use to delete current user account (needs to be authenticated)
 *      parameters:
 *           - in: header
 *             name: Authorization
 *             type: string
 *             description: Bearer + Access Token  
 *             required: true      
 *      responses:
 *          '200':
 *              description: OK.
 *          '500':
 *              description: Server internal error.
 */
userRouter.delete('/deleteAccount', userCtrl.deleteAccount);

export default userRouter;