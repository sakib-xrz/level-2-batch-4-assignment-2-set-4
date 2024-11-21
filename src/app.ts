import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './app/router';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/api/v1', router);

//global error handler
app.use(globalErrorHandler);

// handle not found routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });
  next();
});

export default app;
