module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 80,
    tabWidth: 2,
    endOfLine: 'auto',
  }

  /*
  interface Usuario {
    id: number,
    usuario: string;
    nome_pessoa: string;
    nome_empresa: string | null;
    perfis: number[];
}

const usuarios = [
    {
        id: 1,
        usuario: 'administrador',
        nome_pessoa: 'ADMINISTRADOR',
        nome_empresa: null,
        perfis: 2
    },
    {
        id: 1,
        usuario: 'administrador',
        nome_pessoa: 'ADMINISTRADOR',
        nome_empresa: null,
        perfis: 3
    },
    {
        id: 1,
        usuario: 'administrador',
        nome_pessoa: 'ADMINISTRADOR',
        nome_empresa: null,
        perfis: 1
    },
    {
        id: 5,
        usuario: 'usuarioteste',
        nome_pessoa: 'TESTE 1',
        nome_empresa: 'EMPRESATST',
        perfis: 2
    },
    {
        id: 6,
        usuario: 'usuarioteste2',
        nome_pessoa: 'TESTE 2',
        nome_empresa: 'EMPRESATST',
        perfis: 2
    },
    
    {
        id: 7,
        usuario: 'usuarioteste2',
        nome_pessoa: 'MATHEUS GADELHA FARIAS',
        nome_empresa: 'EMPRESATST',
        perfis: 2
    }
]

const usuariosAgrupados = usuarios.reduce<Usuario[]>((acc, current) => {
    const usuarioExistente = acc.find((user) => user.id === current.id);

    if (usuarioExistente) {
        usuarioExistente.perfis.push(current.perfis);
    } else {
        acc.push({ ...current, perfis: [current.perfis] });
    }

    return acc;
}, []);

const result_list = usuariosAgrupados.map(({id, ...rest }) => rest)

console.log(result_list);
  */