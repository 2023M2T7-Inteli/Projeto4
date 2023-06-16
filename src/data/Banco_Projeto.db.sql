BEGIN TRANSACTION;
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
CREATE TABLE IF NOT EXISTS "PERGUNTA" (
	"Id_Pergunta"	INTEGER NOT NULL,
	"Pergunta"	TEXT,
	"Id_Protocolo_FK"	INTEGER,
	"Tipo"	TEXT NOT NULL,
	"Titulo"	TEXT,
	PRIMARY KEY("Id_Pergunta"),
	FOREIGN KEY("Id_Protocolo_FK") REFERENCES "PROTOCOLO"("Id_Protocolo")
);
INSERT INTO "USUARIO" VALUES (1,'carlosP@gmail.com','Senha123','agricultor','Carlos Pereira','Abacate','Senha123');
INSERT INTO "PROTOCOLO" VALUES (1,'Ativo',1,'Abacate roxo','Esse protocolo tem o objetivo de estudar a cor do Abacate roxo e entender o porque dele ter essa cor. ','13/06/2023','14h11','False');
INSERT INTO "PROTOCOLO" VALUES (2,'A',NULL,'Açaí da barra','Esse protocolo tem o objetivo de estudar o açaí da barra','31/05/2023','5h12','False');
INSERT INTO "PROTOCOLO" VALUES (3,'Ativo',NULL,'Abacate roxo','Esse protocolo tem o objetivo de estudar a cor do Abacate roxo e entender o porque dele ter essa cor. ','13/06/2023','14h11','False');
INSERT INTO "PROTOCOLO" VALUES (4,'Ativo',1,'Abacate rosa','Esse protocolo tem o objetivo de estudar a cor do Abacate rosa e entender o porque dele ter essa cor. ','14/06/2023','14h11','False');
INSERT INTO "PROTOCOLO" VALUES (5,'Ativo',1,'Abacateosa','Esse protocolo tem o objetivo de estudar a cor do Abacate rosa e entender o porque dele ter essa cor. ','14/06/2023','14h11','False');
INSERT INTO "PROTOCOLO" VALUES (6,'Ativo',NULL,'Abacateosa','Esse protocolo tem o objetivo de estudar a cor do Abacate rosa e entender o porque dele ter essa cor. ','14/06/2023','14h11','False');
INSERT INTO "PERGUNTA" VALUES (1,'Quantos anos tem o abacate',1,'Text','Pergunta');
INSERT INTO "PERGUNTA" VALUES (2,'Tire uma foto do abacate',1,'Img','Foto do abacate');
INSERT INTO "PERGUNTA" VALUES (3,'Qual a cor do abacate?',1,'Text','Pergunta');
COMMIT;
