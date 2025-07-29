const express = require('express');
const bfhlRoutes = require('./routes/bfhl.routes');

const app = express();

app.use(express.json());

//route:
app.use('/', bfhlRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
