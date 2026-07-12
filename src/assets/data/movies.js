const movies = [
    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genre: ["sci-fi", "drama"],
        imdb: 8.7,
        poster: "/images/movies/poster/interstellar-550825f7cc108.jpg",
        background: "/images/movies/background/interstellar-687dce5a7fcfc.jpg",
        duration: "2h16min",
        highlights: true,
        trailerLink: "https://www.youtube.com/embed/i6avfCqKcQo?si=-6GMNGHD6bW3Fect",
        newReleases: false,
        sinopse: "Uma equipe de astronautas atravessa um buraco de minhoca para encontrar um novo planeta capaz de salvar a humanidade."
    },
    {
        id: 2,
        title: "A Clockwork Orange",
        year: 1971,
        genre: ["sci-fi", "crime"],
        imdb: 8.2,
        poster: "/images/movies/poster/a-clockwork-orange-53446e59bd73a.jpg",
        background: "/images/movies/background/a-clockwork-orange-537cf93a87d8b.jpg",
        duration: "2h49min",
        highlights: true,
        trailerLink: "https://www.youtube.com/embed/eRerbaI9axY?si=yR_RWU3xt6nLDvqK",
        newReleases: false,
        sinopse: "Um jovem violento é submetido a um experimento psicológico que promete eliminar seus instintos criminosos."
    },
    {
        id: 3,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genre: ["Fantasia", "aventura"],
        imdb: 8.9,
        poster: "/images/movies/poster/the-lord-of-the-rings-the-fellowship-of-the-ring-522af84750c20.jpg",
        background: "/images/movies/background/the-lord-of-the-rings-the-fellowship-of-the-ring-58647a6dc80e8.jpg",
        duration: "2h58min",
        highlights: true, //destaques
        trailerLink: "https://www.youtube.com/embed/0i86oM1nHjM?si=xOvHXDq3kBic6BCH",
        newReleases: false, //lançamentos
        sinopse: "Frodo recebe a missão de destruir o Um Anel e inicia uma jornada ao lado de uma improvável sociedade de heróis."
    },
    {
        id: 4,
        title: "Superman",
        year: 2025,
        genre: ["Ação", "sci-fi"],
        imdb: 7.4,
        poster: "/images/movies/poster/superman-6831cf020afdd.jpg",
        background: "/images/movies/background/superman-686f6aa06ccfd.jpg",
        duration: "2h09min",
        highlights: true, //destaques
        trailerLink: "https://www.youtube.com/embed/14qzQDMcTqM?si=yGHiJUXeGsZKgKdA",
        newReleases: true, //lançamentos
        sinopse: "Clark Kent tenta conciliar sua vida como jornalista e Superman enquanto enfrenta Lex Luthor e outras ameaças."
    },
    {
        id: 5,
        title: "The Matrix",
        year: 1999,
        genre: ["Ação", "sci-fi"],
        imdb: 8.7,
        poster: "/images/series/poster/the-matrix-58aceda793003.jpg",
        background: "/images/series/background/the-matrix-553be0c3bdeeb.jpg",
        duration: "2h16min",
        highlights: false, //destaques
        trailerLink: "https://www.youtube.com/embed/vKQi3bBA1y8?si=EfuqEMXL8p66ytXJ",
        newReleases: false, //lançamentos
        sinopse: "Um programador descobre que o mundo em que vive é uma simulação criada por máquinas."
    },
    {
        id: 6,
        title: "Jurassic World Rebirth",
        year: 2025,
        genre: ["Ação", "Aventura"],
        imdb: 6.3,
        poster: "/images/movies/poster/jurassic-world-rebirth-689a6e02dfa27.jpg",
        background: "/images/movies/background/jurassic-world-rebirth-68590943245d5.jpg",
        duration: "2h05min",
        highlights: false, //destaques
        trailerLink: "https://www.youtube.com/embed/jan5CFWs9ic?si=vNvuHQchLLmubMhH",
        newReleases: true, //lançamentos
        sinopse: "Uma equipe embarca em uma missão para coletar DNA de dinossauros e acaba encontrando criaturas ainda mais perigosas."
    },
    {
        id: 7,
        title: "How To Train Your Dragon",
        year: 2025,
        genre: ["Fantasia", "Aventura"],
        imdb: 8.1,
        poster: "/images/movies/poster/how-to-train-your-dragon-67b2582fdf183.jpg",
        background: "/images/movies/background/how-to-train-your-dragon-68761629ece98.jpg",
        duration: "2h16min",
        highlights: false, //destaques
        trailerLink: "https://www.youtube.com/embed/22w7z_lT6YM?si=_Hhbk6wAluNr9OfI",
        newReleases: true, //lançamentos
        sinopse: "O jovem Soluço desafia a tradição viking ao criar uma amizade com o dragão Banguela."
    },
    {
        id: 8,
        title: "F1",
        year: 2025,
        genre: ["Drama", "Esporte"],
        imdb: 7.8,
        poster: "/images/movies/poster/f1-the-movie-684ea2c38e2c7.jpg",
        background: "/images/movies/background/f1-68245aff73f91.jpg",
        duration: "2h35min",
        highlights: false, //destaques
        trailerLink: "https://www.youtube.com/embed/ZiDphkXCZsQ?si=OMFMYwxRLoJ4tOY0",
        newReleases: true, //lançamentos
        sinopse: "Um ex-piloto de Fórmula 1 retorna às pistas para orientar um jovem talento e tentar reviver sua carreira."
    },
]

export default movies