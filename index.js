const { Console } = require("console");
const { appendFile } = require("fs");

const app = express();

const PORT = 3000;

app.use(express.json());










app.listen(PORT, () => {
    Console.log(`Servidor conectado en puerto ${PORT}`);
})
