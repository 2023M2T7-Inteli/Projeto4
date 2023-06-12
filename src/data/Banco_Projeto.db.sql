BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "PERGUNTA" (
	"Id_Pergunta"	INTEGER NOT NULL,
	"Pergunta"	TEXT NOT NULL,
	"Id_Protocolo_FK"	INTEGER,
	"Tipo"	TEXT NOT NULL,
	PRIMARY KEY("Id_Pergunta"),
	FOREIGN KEY("Id_Protocolo_FK") REFERENCES "PROTOCOLO"("Id_Protocolo")
);
CREATE TABLE IF NOT EXISTS "RESPOSTA" (
	"Id_Resposta"	INTEGER NOT NULL,
	"Respostatxt"	TEXT,
	"Id_Pergunta_FK"	INTEGER,
	"Respostaimg"	BLOB,
	PRIMARY KEY("Id_Resposta"),
	FOREIGN KEY("Id_Pergunta_FK") REFERENCES "PERGUNTA"("Id_Pergunta")
);
CREATE TABLE IF NOT EXISTS "USUARIO" (
	"Id_Usuario"	INTEGER NOT NULL,
	"Email"	TEXT NOT NULL,
	"Senha"	NUMERIC NOT NULL,
	"Categoria"	NUMERIC NOT NULL,
	"Nome"	TEXT NOT NULL,
	"TipoDePlantacao"	TEXT NOT NULL,
	"ConfirmarSenha"	TEXT NOT NULL,
	PRIMARY KEY("Id_Usuario")
);
CREATE TABLE IF NOT EXISTS "PROTOCOLO" (
	"Id_Protocolo"	INTEGER NOT NULL,
	"Atividade"	TEXT NOT NULL,
	"Id_Usuario_FK"	INTEGER,
	"Nome_Protocolo"	TEXT NOT NULL,
	"Descricao"	TEXT NOT NULL,
	"Data"	TEXT NOT NULL,
	"Horario"	TEXT,
	"Visualizado"	TEXT,
	PRIMARY KEY("Id_Protocolo"),
	FOREIGN KEY("Id_Usuario_FK") REFERENCES "USUARIO"("Id_Usuario")
);
COMMIT;
