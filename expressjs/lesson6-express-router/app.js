const express = require('express');
const app = express();

const clientRouters = require('./routers/client');
const adminRouters = require('./routers/admin');
app.use('/admin',adminRouters);
app.use(clientRouters);









app.listen(7000, () => {
    console.log('listening on port 7000');

})

