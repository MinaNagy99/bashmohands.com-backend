// Third Parties Imports

import express from 'express';

import {
  getAllSessions,
  bookSession,
  approveSession,
  cancelSession,
  resceduleSession,
  getUserSessions,
  getSessionById,
  penddingSessions,
} from './sessionController.js';

import {
  authenticate,
  isMine,
} from '../../../middlewares/auth/Authentication.js';

const router = express.Router();

router.patch('/:sid/approve', authenticate, approveSession);
router.patch('/:sid/cancel', cancelSession);
router.patch('/:sid/reschedule', resceduleSession);
router.get('/:handler', getUserSessions);
router.get('/:sid/info', authenticate, getSessionById);
router.post('/book', authenticate, bookSession);
router.get('/', getAllSessions);
router.get('/:userName/pendding', authenticate, isMine, penddingSessions);
export default router;
