import express from "express"
import {routes} from "./routes/router.js"
const port = process.env.PORT || 3000;  
const app = express()
app.use(express.json());

app.use(routes)
/* //Rotas
app.get("/", (req, res) => {
    res.status(200).send({Ok: "ok"})
});
 */
//Servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

