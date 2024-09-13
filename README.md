# Cadastro de carro

[X] Deve ser possível cadastrar um novo carro.

[X] Não deve ser possível cadastrar um carro com uma placa já Xstente.
[X] O carro deve ser cadastrado com disponibilidade padrão = true.
[X] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

[X] Deve ser possível listar todos os carros disponíveis.
[X] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
[X] Deve ser possível listar todos os carros disponíveis pela marca.
[X] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

[X] O usuário não precisa estar logado no sistema para listar carros disponíveis.

# Cadastro de Especificação no carro

[X] Deve ser possível cadastrar uma especificação para um carro.

[X] Não deve ser posível cadastrar um especificação para um carro não cadastrado.
[X] Não deve ser possível cadastrar uma especificação já Xstente para o mesmo carro.
[X] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

[X] Deve ser possível cadastrar a imagem do carro.

[X] Utilizar o multer para upload dos arquivos.

[X] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
[X] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

[X] Deve ser possível cadastrar um aluguel.

[X] O aluguel de ter duração mínima de 24 hora.
[X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
[X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
[X] O usuário deve estar logado na aplicação.
[X] Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Devolução de carro

[X] Deve ser possível realizar a devolução de um carro.

[X] Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
[X] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
[X] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
[X] Ao realizar a devolução, deverá ser calculado o total do aluguel.
[X] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.

[X] Caso haja multa, deverá ser somado ao total do aluguel.
[X] O usuário deve estar logado na aplicação.

# Listagem de alugueis para usuário

[X] Deve ser possível realizar a busca de todos os alugueis para o usuário.
[X] O usuário deve estar logado na aplicação.

# Recuperar senha

[ ] Deve ser possível o usuário recuperar a senha informando o e-mail.
[ ] O usuário deve receber um e-mail com o passo a passo para a recuperação da senha.
[ ] O usuário deve conseguir inserir uma nova senha.
[ ] O usuário precisa informar uma nova senha.
[ ] O link enviado para a recuperação deve expirar em 3 horas.
