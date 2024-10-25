import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

import appSetup from './startup/init';
import routerSetup from './startup/router';
import securitySetup from './startup/security';

appSetup(app);
securitySetup(app, express);
routerSetup(app);