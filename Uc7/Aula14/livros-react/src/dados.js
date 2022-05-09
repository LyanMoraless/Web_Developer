export const livrosDados = [
    {
        capa: "https://media.fstatic.com/nLOnFapc9niSdWH6VrEaCH1I0Zg=/290x478/smart/media/movies/covers/2017/07/1497867740.jpg",
        nome: "Transformers",
        autor: "Alex Kurtzman",
        genero: "Ação",
        ano: "2009",
        sinopse: "Sam Witwicky leaves the Autobots behind for a normal life. But when his mind is filled with cryptic symbols, the Decepticons target him and he is dragged back into the Transformers' war. A youth chooses manhood. The week Sam Witwicky starts college, the Decepticons make trouble in Shanghai.",
    },
    {
        capa: "https://images-na.ssl-images-amazon.com/images/I/71ZLavBjpRL.jpg",
        nome: "Senhor dos Anéis",
        autor: "J. R. R. Tolkien",
        genero: "Ficção",
        ano: "1954",
        sinopse: "A história narra o conflito contra o mal que se alastra pela Terra-média, através da luta de várias raças - Humanos, Anãos, Elfos, Ents e Hobbits - contra Orques, para evitar que o Anel do Poder volte às mãos de seu criador Sauron, o Senhor Sombrio.",
    
    },
    {
        capa: "https://images-na.ssl-images-amazon.com/images/I/61jgm6ooXzL.jpg",
        nome: "Harry Potter",
        autor: "J.K. Rowling",
        genero: "Ficção Científica",
        ano: "2001",
        sinopse: "Throughout the series, Harry is described as having his father's perpetually untidy black hair, his mother's bright green eyes, and a lightning bolt-shaped scar on his forehead. He is further described as small and skinny for his age with a thin face and knobbly knees, and he wears Windsor glasses.",
    }
];

const API = 'http://10.152.46.24:8000'

export const login = async (email, senha) => {

    const res = await fetch(`${API}/usuarios/login`, {
        method: "post",
        body: JSON.stringify({email, senha}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await res.json();
}

export const getLivros = async (token) => {
    const res = await fetch(`${API}/livros`, {
        headers: {
            'Authorization': `JWT ${token}`
        }
    })
    return await res.json();
}