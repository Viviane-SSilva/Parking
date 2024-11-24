const express = require("express");
const app = express();
const port = process.env.PORT || 3000;  

app.use(express.json());

//Rotas
app.use("/vehicles", vehicleRoutes);

//Servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

