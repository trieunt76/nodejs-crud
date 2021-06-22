import siteRoutes from './back-end/siteRoutes';
import homeRoutes from './font-end/homeRoutes';
import itemsRoutes from './back-end/itemsRoutes';
import dashboardRoutes from './back-end/dashboardRoutes';
import { systemConfig } from '../configs';

const routes = (app) => {
    app.locals.systemConfig = systemConfig;
    app.use(`/${systemConfig.prefixAdmin}`, siteRoutes);
    app.use(`/${systemConfig.prefixAdmin}/dashboard`, dashboardRoutes);
    app.use(`/${systemConfig.prefixAdmin}/items`, itemsRoutes);
    app.use('/', homeRoutes);
};

export default routes;
