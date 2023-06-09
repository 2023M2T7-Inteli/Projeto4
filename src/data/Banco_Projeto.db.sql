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
CREATE TABLE IF NOT EXISTS "OPTION" (
	"Id_Option"	INTEGER NOT NULL,
	"resposta"	INTEGER,
	"nome_option"	TEXT NOT NULL,
	"Id_Pergunta_FK"	INTEGER,
	PRIMARY KEY("Id_Option")
);
INSERT INTO "RESPOSTA" VALUES (1,NULL,2,NULL);
INSERT INTO "RESPOSTA" VALUES (2,'oioioioio',1,NULL);
INSERT INTO "RESPOSTA" VALUES (3,'aiaiaiaiaiaiaiaia',3,NULL);
INSERT INTO "RESPOSTA" VALUES (4,'aaaaaaaaaaaaaaa',1,NULL);
INSERT INTO "RESPOSTA" VALUES (5,'zzzzzzzzzzzz',3,NULL);
INSERT INTO "RESPOSTA" VALUES (6,NULL,2,NULL);
INSERT INTO "RESPOSTA" VALUES (7,'aaaaaaaaaa',1,NULL);
INSERT INTO "RESPOSTA" VALUES (8,'zzzzzzzzzzz',3,NULL);
INSERT INTO "RESPOSTA" VALUES (9,'aaaaaaa',1,NULL);
INSERT INTO "RESPOSTA" VALUES (10,'m , ',3,NULL);
INSERT INTO "RESPOSTA" VALUES (11,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (12,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (13,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (14,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (15,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (16,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (17,NULL,2,NULL);
INSERT INTO "RESPOSTA" VALUES (18,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (19,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (20,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (21,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (22,NULL,2,NULL);
INSERT INTO "RESPOSTA" VALUES (23,NULL,2,NULL);
INSERT INTO "RESPOSTA" VALUES (24,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (25,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (26,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (27,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (28,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (29,NULL,2,NULL);
INSERT INTO "RESPOSTA" VALUES (30,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (31,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (32,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (33,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (34,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (35,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (36,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (37,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (38,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (39,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (40,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (41,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (42,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (43,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (44,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (45,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (46,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (47,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (48,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (49,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (50,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (51,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (52,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (53,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (54,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (55,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (56,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (57,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (58,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (59,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (60,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (61,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (62,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (63,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (64,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (65,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (66,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (67,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (68,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (69,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (70,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (71,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (72,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (73,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (74,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (75,NULL,2,'uploads/b5b86fd501dc2ca0ef9a2d018fb4e123.png');
INSERT INTO "RESPOSTA" VALUES (76,NULL,2,'uploads/8aba7a4065996982f07f0b492392ead2.jpg');
INSERT INTO "RESPOSTA" VALUES (77,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (78,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (79,'',3,NULL);
INSERT INTO "RESPOSTA" VALUES (80,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (81,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (82,NULL,2,'[object Object]');
INSERT INTO "RESPOSTA" VALUES (83,'',1,NULL);
INSERT INTO "RESPOSTA" VALUES (84,'',3,NULL);
INSERT INTO "USUARIO" VALUES (1,'carlosP@gmail.com','Senha123','agricultor','Carlos Pereira','Abacate','Senha123');
INSERT INTO "PROTOCOLO" VALUES (1,'Ativo',1,'Abacate roxo','Esse protocolo tem o objetivo de estudar a cor do Abacate roxo e entender o porque dele ter essa cor. ','13/06/2023','14h11','False');
INSERT INTO "PROTOCOLO" VALUES (2,'A',NULL,'Açaí da barra','Esse protocolo tem o objetivo de estudar o açaí da barra','31/05/2023','5h12','False');
INSERT INTO "PROTOCOLO" VALUES (3,'Ativo',NULL,'Abacate roxo','Esse protocolo tem o objetivo de estudar a cor do Abacate roxo e entender o porque dele ter essa cor. ','13/06/2023','14h11','False');
INSERT INTO "PROTOCOLO" VALUES (4,'Ativo',1,'Abacate rosa','Esse protocolo tem o objetivo de estudar a cor do Abacate rosa e entender o porque dele ter essa cor. ','14/06/2023','14h11','False');
INSERT INTO "PROTOCOLO" VALUES (5,'Atidddddddvo',1,'Abacatde33e roxo','Esse protocolo tem o objetivo de estudar a cor do Abacate roxo e entender o porque dele ter essa cor. ','13/06/2023','14h11','Fal3c3se');
INSERT INTO "PROTOCOLO" VALUES (6,'Ativo',NULL,'Abacateosa','Esse protocolo tem o objetivo de estudar a cor do Abacate rosa e entender o porque dele ter essa cor. ','14/06/2023','14h11','False');
INSERT INTO "PERGUNTA" VALUES (1,'Quantos anos tem o abacate',1,'Text','Pergunta');
INSERT INTO "PERGUNTA" VALUES (2,'Tire uma foto do abacate',1,'Img','Foto do abacate');
INSERT INTO "PERGUNTA" VALUES (3,'Qual a cor do abacate?',1,'Text','Pergunta');
INSERT INTO "PERGUNTA" VALUES (4,'Qual a cor do abacate?',4,'Text','Pergunta');
INSERT INTO "PERGUNTA" VALUES (5,'Qual a cor do abacaaazaaaazzzzzze?',1,'Checkbox','Checkbox do abacate');
INSERT INTO "PERGUNTA" VALUES (6,'Qual a cor do abacaaazaaaazzzzzze?',1,'Option','Option do abacate');
INSERT INTO "PERGUNTA" VALUES (7,'Qual a cor do abacaaazaaaazzzzzze?',1,'Option','Option dois');
INSERT INTO "PERGUNTA" VALUES (8,'Qual a cor do abacaaazaaaazzzzzze?',1,'Checkbox','Checkbox dois');
COMMIT;
