const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/Banco_Projeto.db';

const hostname = '127.0.0.1';
const port = 2021;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("../frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Insere um registro na tabela USUARIO (é o C do CRUD - Create)
app.post('/insereUsuario', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    const { Email, Senha, Categoria, Nome, TipoDePlantacao, ConfirmarSenha } = req.body;
    sql = "INSERT INTO USUARIO (Email, Senha, Categoria, Nome, TipoDePlantacao, ConfirmarSenha) VALUES (?, ?, ?, ?, ?, ?)";
    console.log(sql);
    db.run(sql, [Email, Senha, Categoria, Nome, TipoDePlantacao, ConfirmarSenha], err => {
        if (err) {
            throw err;
        }
    });
    res.write('<p>USUARIO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
    res.end();
});

// Retorna todos registros da tabela USUARIO (é o R do CRUD - Read)
 app.get('/usuarios', (req, res) => {
 	res.statusCode = 200;
 	res.setHeader('Access-Control-Allow-Origin', '*');
 	var db = new sqlite3.Database(DBPATH); // Abre o banco
 	var sql = 'SELECT * FROM USUARIO';
 		db.all(sql, [],  (err, rows ) => {
 			if (err) {
 				throw err;
 			}
 			res.json(rows);
 		});
 		db.close(); // Fecha o banco
 });

// Monta o formulário para o update da tabela USUARIO (é o U do CRUD - Update)
app.get('/atualizaUsuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    const idUsuario = req.query.Id_usuario;
    sql = "SELECT * FROM USUARIO WHERE Id_Usuario = ?";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [idUsuario],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Atualiza um registro da tabela USUARIO (é o U do CRUD - Update)
app.post('/atualizaUsuario', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { Email, Senha, Categoria, Id_Usuario } = req.body;
    sql = "UPDATE USUARIO SET Email = ?, Senha = ?, Categoria = ? WHERE Id_Usuario = ?";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [Email, Senha, Categoria, Id_Usuario],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p>USUARIO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
});

// Exclui um registro da tabela USUARIO (é o D do CRUD - Delete)
app.post('/removeUsuario', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { Id_Usuario } = req.body;
    sql = "DELETE FROM USUARIO WHERE Id_Usuario = ?";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [Id_Usuario],  err => {
        if (err) {
            throw err;
        }
        res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
    db.close(); // Fecha o banco
});

// Insere uma pergunta na tabela PERGUNTA (é o C do CRUD - Create)
app.post('/inserePergunta', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	const { Pergunta } = req.body;
	sql = "INSERT INTO PERGUNTA (Pergunta) VALUES (?)";
	console.log(sql);
	db.run(sql, [Pergunta],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>PERGUNTA INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Retorna todos os registros da tabela PERGUNTA (é o R do CRUD - Reading)
app.get('/perguntas', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM PERGUNTA';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Monta o formulário para o update da tabela PERGUNTA (é o U do CRUD - Update)
app.get('/atualizaPergunta', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const idPergunta = req.query.Id_Pergunta;
	sql = "SELECT * FROM PERGUNTA WHERE Id_Pergunta= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [idPergunta],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro da tabela PERGUNTA (é o U do CRUD - Update)
app.post('/atualizaPergunta', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    const { Pergunta, Id_Pergunta } = req.body;
    sql = "UPDATE PERGUNTA SET Pergunta = ? WHERE Id_Pergunta = ?";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [Pergunta, Id_Pergunta], err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p>PERGUNTA ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
});

// Exclui um registro da tabela PERGUNTA (é o D do CRUD - Delete)
app.post('/removePergunta', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const { Id_Pergunta } = req.body; 
	sql = "DELETE FROM PERGUNTA WHERE Id_Pergunta= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [Id_Pergunta],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>PERGUNTA REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

// Insere a atividade do protocolo na tabela PROTOCOLO (é o C do CRUD - Create)
app.post('/insereAtividadeDoProtocolo', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	const { Atividade, Nome_Protocolo, Descricao, Data, Horario } = req.body;
	sql = "INSERT INTO PROTOCOLO (Atividade, Nome_Protocolo, Descricao, Data, Horario) VALUES (?, ?, ?, ?, ?)";
	console.log(sql);
	db.run(sql, [Atividade, Nome_Protocolo, Descricao, Data, Horario],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>ATIVIDADE DO PROTOCOLO INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Retorna todos registros da tabela PROTOCOLO (é o R do CRUD - Read)
app.get('/protocolo', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM PROTOCOLO';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Monta o formulário para o update da tabela PROTOCOLO (é o U do CRUD - Update)
app.get('/atualizaProtocolo', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const idProtocolo = req.query.Id_Protocolo;
	sql = "SELECT * FROM PROTOCOLO WHERE Id_Protocolo= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [idProtocolo],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro da tabela PROTOCOLO (é o U do CRUD - Update)
app.post('/atualizaProtocolo', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const { Atividade, Nome_Protocolo, Descricao, Data, Horario, Id_Protocolo } = req.body;
	sql = "UPDATE PROTOCOLO SET Atividade = ?, Nome_Protocolo = ?, Descricao = ?, Data = ?, Horario = ? WHERE Id_Protocolo = ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [Atividade, Nome_Protocolo, Descricao, Data, Horario, Id_Protocolo],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>ATIVIDADE DO PROTOCOLO ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

// Exclui um registro da tabela PROTOCOLO (é o D do CRUD - Delete)
app.post('/removeProtocolo', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const { Id_Protocolo } = req.body; 
	sql = "DELETE FROM PROTOCOLO WHERE Id_Protocolo= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [Id_Protocolo],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>ATIVIDADE DO PROTOCOLO REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

// Retorna o número de registros da tabela protocolo com determinado id (é o R do CRUD - Read)
app.get('/numeroProtocolos', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT COUNT(*) AS quantidade_campos FROM PROTOCOLO WHERE Id_Usuario_FK = ?;';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Insere uma resposta na tabela RESPOSTA (é o C do CRUD - Create)
app.post('/insereResposta', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const { Resposta, Id_Pergunta_FK} = req.body; 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO RESPOSTA (Resposta, Id_Pergunta_FK) VALUES (?, ?)";
	
	const databaseReturn = db.run(sql, [Resposta, Id_Pergunta_FK],  (err, rows) => {
		if (err) {
		    throw err;
		}	

		return rows
	});

	res.write('<p>RESPOSTA INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Retorna todos registros da tabela RESPOSTA (é o R do CRUD - Read)
app.get('/respostas', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM RESPOSTA';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Monta o formulário para o update da tabela RESPOSTA (é o U do CRUD - Update)
app.get('/atualizaRespostas', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const idResposta = req.query.Id_Resposta;
	sql = "SELECT * FROM RESPOSTA WHERE Id_Resposta= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [idResposta],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro da tabela RESPOSTA (é o U do CRUD - Update)
app.post('/atualizaRespostas', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const { Resposta, Id_Resposta } = req.body;
	sql = "UPDATE RESPOSTA SET Resposta = ? WHERE Id_resposta = ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [Resposta, Id_Resposta],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>RESPOSTA ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

// Exclui um registro da tabela RESPOSTA (é o D do CRUD - Delete)
app.post('/removeRespostas', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const { Id_Resposta } = req.body; 
	sql = "DELETE FROM RESPOSTA WHERE Id_Resposta= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [Id_Resposta],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>RESPOSTA REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

// Join entre as tabelas PERGUNTA & RESPOSTA
app.get('/JOIN_Pergunta_Resposta', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Pergunta.Id_Pergunta, Pergunta.Pergunta, Resposta.Id_Resposta, Resposta.Resposta FROM Pergunta INNER JOIN Resposta ON Pergunta.Id_Pergunta = Resposta.Id_Pergunta_FK';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Join entre as tabelas PROTOCOLO & PERGUNTA
app.get('/JOIN_Protocolo_Pergunta', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Protocolo.Atividade, Protocolo.Name_Protocolo, Pergunta.Pergunta FROM Protocolo INNER JOIN Pergunta ON Protocolo.Id_Protocolo = Pergunta.Id_Protocolo_FK';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Join entre as tabelas USUARIO & PERGUNTA
app.get('/JOIN_Usuario_Pergunta', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT Usuario.Nome, Usuario.Categoria, Protocolo.Name_Protocolo, Protocolo.Atividade FROM Usuario INNER JOIN Protocolo ON Usuario.Id_Usuario = Protocolo.Id_Usuario_FK';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
	console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });