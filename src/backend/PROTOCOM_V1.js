const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/Banco_Projeto.db';
const multer = require('multer');

const hostname = '127.0.0.1';
const port = 2021;
const cors = require('cors');
const app = express();
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const fs = require('fs')


app.use(cors());

// Adicione o middleware bodyParser para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Move all static content to the frontend */
app.use(express.static("../frontend"));

/* Redirect root to sign_in.html */
app.get('/', (req, res) => {
	res.redirect('/sign_in/sign_in.html');
});

/******** CRUD ************/

// Inserts a record of Phone, Email, Password, Category, Name, PlantationType, ConfirmPassword into the USER table (it's the C in CRUD - Create). On line 23, it opens the database, and on line 33, it closes the database.
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
    db.close(); 
    res.end();
});

// Retrieves all records from the USER table (it's the R in CRUD - Read). On line 41, it opens the database, and on line 49, it closes the database. 
 app.get('/usuarios', (req, res) => {
 	res.statusCode = 200;
 	res.setHeader('Access-Control-Allow-Origin', '*');
 	var db = new sqlite3.Database(DBPATH);
 	var sql = 'SELECT * FROM USUARIO';
 		db.all(sql, [],  (err, rows ) => {
 			if (err) {
 				throw err;
 			}
 			res.json(rows);
 		});
 		db.close(); 
 });

// Builds the form for updating the USER table (it's the U in CRUD - Update). On line 59, it opens the database, and on line 66, it closes the database.
app.get('/atualizaUsuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    const idUsuario = req.query.Id_usuario;
    sql = "SELECT * FROM USUARIO WHERE Id_Usuario = ?";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); 
    db.all(sql, [idUsuario],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); 
});

// Updates a record of Phone, Email, Password, Category, User_Id in the USER table (it's the U in CRUD - Update). On line 76, it opens the database, and on line 84, it closes the database.
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
    db.close(); 
});

// Deletes a record from the USER table (it's the D in CRUD - Delete). On line 94, it opens the database, and on line 102, it closes the database. 
app.post('/removeUsuario', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { Id_Usuario } = req.body;
    sql = "DELETE FROM USUARIO WHERE Id_Usuario = ?";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); 
    db.run(sql, [Id_Usuario],  err => {
        if (err) {
            throw err;
        }
        res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
    db.close(); 
});

// Inserts a question into the QUESTION table (it's the C in CRUD - Create). On line 109, it opens the database, and on line 119, it closes the database. 
app.post('/inserePergunta', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH);
	const { Pergunta, Tipo, Titulo } = req.body;
	sql = "INSERT INTO PERGUNTA (Pergunta, Tipo, Titulo) VALUES (?, ?, ?)";
	console.log(sql);
	db.run(sql, [Pergunta, Tipo, Titulo],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>PERGUNTA INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); 
	res.end();
});

// Retrieves all records from the QUESTION table (it's the R in CRUD - Read). On line 127, it opens the database, and on line 135, it closes the database.
app.get('/perguntas', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	let idProtocolo = req.query.Id_Protocolo_FK;
	var db = new sqlite3.Database(DBPATH); 
	var sql = 'SELECT * FROM PERGUNTA WHERE Id_Protocolo_FK = ?';
		db.all(sql, [idProtocolo],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); 
});

// Builds the form for updating the QUESTION table (it's the U in CRUD - Update). On line 145, it opens the database, and on line 152, it closes the database. 
app.get('/atualizaPergunta', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const idPergunta = req.query.Id_Pergunta;
	sql = "SELECT * FROM PERGUNTA WHERE Id_Pergunta= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); 
	db.all(sql, [idPergunta],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); 
});

// Updates a record in the QUESTION table (it's the U in CRUD - Update). On line 162, it opens the database, and on line 170, it closes the database. 
app.post('/atualizaPergunta', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    const { Pergunta, Tipo, Titulo, Id_Protocolo_FK, Id_Pergunta } = req.body;
    sql = "UPDATE PERGUNTA SET Pergunta = ?, Tipo = ?, Titulo = ?, Id_Protocolo_FK = ? WHERE Id_Pergunta = ?";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); 
    db.run(sql, [Pergunta, Tipo, Titulo, Id_Protocolo_FK, Id_Pergunta], err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p>PERGUNTA ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); 
});

// Deletes a record from the QUESTION table (it's the D in CRUD - Delete). On line 180, it opens the database, and on line 188, it closes the database. 
app.post('/removePergunta', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const { Id_Pergunta } = req.body; 
	sql = "DELETE FROM PERGUNTA WHERE Id_Pergunta= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [Id_Pergunta],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>PERGUNTA REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); 
});

// Inserts the Activity, Protocol_Name, Description, Date, and Time of the protocol into the PROTOCOL table (it's the C in CRUD - Create). On line 195, it opens the database, and on line 205, it closes the database.
app.post('/insereAtividadeDoProtocolo', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); 
	const { Atividade, Nome_Protocolo, Descricao, Data, Horario, Visualizado, Id_Usuario_FK } = req.body;
	sql = "INSERT INTO PROTOCOLO (Atividade, Nome_Protocolo, Descricao, Data, Horario, Visualizado, Id_Usuario_FK) VALUES (?, ?, ?, ?, ?, ?, ?)";
	console.log(sql);
	db.run(sql, [Atividade, Nome_Protocolo, Descricao, Data, Horario, Visualizado, Id_Usuario_FK],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>ATIVIDADE DO PROTOCOLO INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); 
	res.end();
});

// Retrieves all records from the PROTOCOL table (it's the R in CRUD - Read). On line 213, it opens the database, and on line 221, it closes the database. 
app.get('/protocolo', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const idUsuario = req.query.Id_Usuario_FK;
	var db = new sqlite3.Database(DBPATH);
	var sql = 'SELECT * FROM PROTOCOLO WHERE Id_Usuario_FK = ?';
		db.all(sql, [idUsuario],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); 
});

// Retrieves all records from the PROTOCOL table (it's the R in CRUD - Read). On line 213, it opens the database, and on line 221, it closes the database. 
app.get('/protocolo2', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const idProtocolo = req.query.Id_Protocolo;
	var db = new sqlite3.Database(DBPATH);
	var sql = 'SELECT * FROM PROTOCOLO WHERE Id_Protocolo = ?';
		db.all(sql, [idProtocolo],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); 
});

// Builds the form for updating the PROTOCOL table (it's the U in CRUD - Update). On line 231, it opens the database, and on line 238, it closes the database. 
app.get('/atualizaProtocolo', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const idProtocolo = req.query.Id_Protocolo;
	sql = "SELECT * FROM PROTOCOLO WHERE Id_Protocolo= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); 
	db.all(sql, [idProtocolo],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); 
});

// Updates a record of Activity, Protocol_Name, Description, Date, Time, Protocol_Id in the PROTOCOL table (it's the U in CRUD - Update). On line 248, it opens the database, and on line 256, it closes the database.
app.post('/atualizaProtocolo', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const { Atividade, Nome_Protocolo, Descricao, Data, Horario, Visualizado, Id_Usuario_FK, Id_Protocolo } = req.body;
	sql = "UPDATE PROTOCOLO SET Atividade = ?, Nome_Protocolo = ?, Descricao = ?, Data = ?, Horario = ?, Visualizado = ?, Id_Usuario_FK = ? WHERE Id_Protocolo = ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [Atividade, Nome_Protocolo, Descricao, Data, Horario, Visualizado, Id_Usuario_FK, Id_Protocolo],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>ATIVIDADE DO PROTOCOLO ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); 
});

// Deletes a record from the PROTOCOL table (it's the D in CRUD - Delete). On line 266, it opens the database, and on line 274, it closes the database. 
app.post('/removeProtocolo', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const { Id_Protocolo } = req.body; 
	sql = "DELETE FROM PROTOCOLO WHERE Id_Protocolo= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [Id_Protocolo],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>ATIVIDADE DO PROTOCOLO REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close();
});

// Retorna o número de registros da tabela protocolo com determinado id (é o R do CRUD - Read)
app.get('/numeroProtocolos', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const { Id_Usuario_FK } = req.query;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT COUNT(*) AS quantidade_campos FROM PROTOCOLO WHERE Id_Usuario_FK = ?;';
	db.all(sql, [Id_Usuario_FK], (err, rows) => {
	  if (err) {
		throw err;
	  }
	  res.json(rows);
	});
	db.close(); // Fecha o banco
  });  

  app.post('/insereResposta', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const data = req.body; // Obtém os dados enviados
	console.log('Dados do formulário:', data);
	var db = new sqlite3.Database(DBPATH);
	// Percorre os dados e insere cada resposta no banco de dados
	data.forEach(resposta => {
	  const { Respostatxt, Id_Pergunta_FK } = resposta;
	  const sql = "INSERT INTO RESPOSTA (Respostatxt, Id_Pergunta_FK) VALUES (?, ?)";
	  console.log(sql);
	  db.run(sql, [Respostatxt, Id_Pergunta_FK], function(err) {
		if (err) {
		  console.error('Erro ao inserir dados no banco de dados:', err);
		  res.status(500).json({ error: 'Erro interno do servidor' });
		  return;
		}
	  });
	});
	db.close(); // Feche a conexão com o banco de dados
	res.sendStatus(200);
  });

// Retrieves all records from the RESPONSE table (it's the R in CRUD - Read). On line 302, it opens the database, and on line 310, it closes the database. 
app.get('/respostas', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); 
	var sql = 'SELECT * FROM RESPOSTA';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); 
});

// Builds the form for updating the RESPONSE table (it's the U in CRUD - Update). On line 320, it opens the database, and on line 327, it closes the database.
app.get('/atualizaRespostas', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const idResposta = req.body.Id_Resposta;
	sql = "SELECT * FROM RESPOSTA WHERE Id_Resposta= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); 
	db.all(sql, [idResposta],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); 
});

// Updates a record in the RESPONSE table (it's the U in CRUD - Update). On line 337, it opens the database, and on line 345, it closes the database. 
app.post('/atualizaRespostas', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const { Respostatxt, Respostaimg, Id_Resposta, Id_Pergunta_FK } = req.body;
	sql = "UPDATE RESPOSTA SET Respostatxt = ?, Respostaimg = ?, Id_Pergunta_FK = ? WHERE Id_resposta = ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [Respostatxt, Respostaimg, Id_Resposta, Id_Pergunta_FK],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>RESPOSTA ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); 
});

// Deletes a record from the RESPONSE table (it's the D in CRUD - Delete). On line 355, it opens the database, and on line 363, it closes the database. 
app.post('/removeRespostas', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	const { Id_Resposta } = req.body; 
	sql = "DELETE FROM RESPOSTA WHERE Id_Resposta= ?";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [Id_Resposta],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>RESPOSTA REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); 
});

app.get('/JOIN_Pergunta_Resposta', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH);
	var sql = 'SELECT Pergunta.Id_Pergunta, Pergunta.Pergunta, Resposta.Id_Resposta, Resposta.Respostatxt, Resposta.Respostaimg FROM Pergunta INNER JOIN Resposta ON Pergunta.Id_Pergunta = Resposta.Id_Pergunta_FK';
	db.all(sql, [], (err, rows) => {
	  if (err) {
		throw err;
	  }
	  res.json(rows);
	  db.close();
	});
  });  
  
// Join between the PROTOCOL & QUESTION tables. The "JOIN" command in a database is used to combine information from two or more tables based on a specified condition. On line 385, it opens the database, and on line 393, it closes the database. 
app.get('/JOIN_Protocolo_Pergunta', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); 
	var sql = 'SELECT Protocolo.Atividade, Protocolo.Name_Protocolo, Pergunta.Pergunta FROM Protocolo INNER JOIN Pergunta ON Protocolo.Id_Protocolo = Pergunta.Id_Protocolo_FK';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); 
});

// Join between the USER & QUESTION tables. The "JOIN" command in a database is used to combine information from two or more tables based on a specified condition. On line 400, it opens the database, and on line 408, it closes the database.
app.get('/JOIN_Usuario_Pergunta', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); 
	var sql = 'SELECT Usuario.Nome, Usuario.Categoria, Protocolo.Name_Protocolo, Protocolo.Atividade FROM Usuario INNER JOIN Protocolo ON Usuario.Id_Usuario = Protocolo.Id_Usuario_FK';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); 
});

app.post('/respImg', upload.single('file'), (req, res) => {
	var db = new sqlite3.Database(DBPATH); 
	const file = req.file; // Arquivo enviado pelo cliente
	const Id_Pergunta_FK = req.body.Id_Pergunta_FK; // Valor do Id_Pergunta_FK
  
	// Verifique se o arquivo e o ID da pergunta são válidos
	if (!file || !Id_Pergunta_FK) {
	  console.error('Arquivo ou ID da pergunta inválido');
	  res.status(400).json({ error: 'Dados inválidos' });
	  return;
	}  
	// Salvar o arquivo no banco de dados como um blob
	console.log("estou aqui", file, Id_Pergunta_FK);
	const query = 'INSERT INTO RESPOSTA (Respostaimg, Id_Pergunta_FK) VALUES (?, ?)';
	db.run(query, [file, Id_Pergunta_FK], function(error) {
	  if (error) {
		console.error('Erro ao salvar o arquivo no banco de dados:', error);
		res.status(500).json({ error: 'Erro interno do servidor' });
		return;
	  }

	  console.log('Arquivo salvo no banco de dados e na pasta uploads com sucesso!', file, Id_Pergunta_FK);
	  res.json({ success: true });
	});
  });  
  
app.listen(port, hostname, () => {
	console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });