const express = require("express");
const htmlRoutes = require("./app/routing/htmlRoutes")
const apiRoutes = require("./app/routing/apiRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./app/public'));

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function () {
    console.log(`Listening on PORT:${PORT}`);
});