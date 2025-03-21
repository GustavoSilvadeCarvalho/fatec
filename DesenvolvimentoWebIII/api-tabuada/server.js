const express = require("express");
const app = express();
const PORT = 3000;

app.get("/tabuada/:numero", (req, res) => {
  const numero = parseInt(req.params.numero);
  if (isNaN(numero)) {
    return res.status(400).json({ error: "Parâmetro inválido. Informe um número." });
  }

  const tabuada = {};

  for (let i = 1; i <= 10; i++) {
    tabuada[i] = `${numero} x ${i} = ${numero * i}`;
  }

  return res.json(tabuada);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});