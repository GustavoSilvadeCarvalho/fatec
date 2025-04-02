const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static("public"));

import { Request, Response } from "express";

app.use(express.json());

function criptografarTexto(texto: string, passos: number): string {
    return texto.split('').map(char => {
        if (/[a-z]/.test(char)) {
            return String.fromCharCode(((char.charCodeAt(0) - 97 + passos) % 26) + 97);
        }
        if (/[A-Z]/.test(char)) {
            return String.fromCharCode(((char.charCodeAt(0) - 65 + passos) % 26) + 65);
        }
        if (/[0-9]/.test(char)) {
            return String.fromCharCode(((char.charCodeAt(0) - 48 + passos) % 10) + 48);
        }
        return char;
    }).join('');
}

app.post("/criptografar", (req: Request, res: Response) => {
    const { texto, passos } = req.body;
    
    if (typeof texto !== "string" || typeof passos !== "number" || !/^[a-zA-Z0-9]+$/.test(texto)) {
        return res.status(400).json({ erro: "Texto inválido. Use apenas letras sem acento e números." });
    }

    const resultado = criptografarTexto(texto, passos);
    res.json({ resultado });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
