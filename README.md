# Cadastro de carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas a categorias.

**RN** => Regra de negócio
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado com disponibilidade padrão = true.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF** => Requisitos funcionais
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pela marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN** => Regra de negócio
O usuário não precisa estar logado no sistema para listar carros disponíveis.

# Cadastro de Especificação no carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN** => Regra de negócio
Não deve ser posível cadastrar um especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF** => Requisitos não funcionais
Utilizar o multer para upload dos arquivos.

**RN** => Regra de negócio
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar um aluguel.

**RN** => Regra de negócio
O aluguel de ter duração mínima de 24 hora.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
