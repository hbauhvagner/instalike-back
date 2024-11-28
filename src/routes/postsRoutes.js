import express from "express";
import multer from "multer";
import cors from 'cors'

const corsOptions = {
	origin: 'http://localhost:8000',
	optionsSuccessStatus: 200
}

import {
	listarPosts,
	postarNovoPost,
	uploadImagem,
    atualizarNovoPost
} from "../controllers/postsController.js";

const upload = multer({
	dest: "./uploads",
});

const routes = (app) => {
	// Habilita o parseamento de dados JSON na requisição
	app.use(express.json());
	app.use(cors(corsOptions))

	// Rota para obter todos os posts
	app.get("/posts", listarPosts);

	app.post("/posts", postarNovoPost);

	app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put('/upload/:id', atualizarNovoPost)
};

export default routes;
