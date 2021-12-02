
USE prova2;

CREATE TABLE team (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR(50),
    estado VARCHAR(2),
    website VARCHAR(50)
);

INSERT INTO team (nome, estado, website) VALUES ("São Paulo", "SP", "https://www.saopaulo.sp.gov.br/");
INSERT INTO team (nome, estado, website) VALUES ("Cruzeiro", "MG", "https://www.cruzeiro.com.br/");
