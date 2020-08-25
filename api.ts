import * as express from 'express'

const router = express.Router();

router.get('/hello', function(req:any, res:any) {
  res.send('hello') 
});


router.post('/contactus', function(req:any, res:any) {
  res.send('contact') 
});

export default router