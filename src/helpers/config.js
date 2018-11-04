import dotenv from 'dotenv';

dotenv.config();

export default {
    env: process.env.ENV,
    serverUrl: `${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_URL}`
};
