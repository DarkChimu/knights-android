const tracks = [
    {
        id: '0',
        url:
            'http://listen.radioking.com/radio/424084/stream/478684',
        title: 'Radio Caballeros de la virgen',
        album: 'Bajo la mirada de Maria',
        artist: 'Caballeros',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '1',
        url:
            'https://www.mboxdrive.com/Misterios%20Gloriosos%20del%20Rosario%20Mi%C3%A9rcoles%20y%20Domingo.mp3',
        title: 'Misterios Gloriosos',
        album: 'Caballeros de la Virgen',
        artist: 'Caballeros',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '2',
        url:
            'https://www.mboxdrive.com/Misterios%20Luminosos%20del%20Rosario%20Jueves.mp3',
        title: 'Misterios Luminosos',
        album: 'Caballeros de la Virgen',
        artist: 'Caballeros',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '3',
        url:
            'https://www.mboxdrive.com/Misterios%20Dolorosos%20del%20Rosario%20Martes%20y%20Viernes.mp3',
        title: 'Misterios Dolorosos',
        album: 'Caballeros de la Virgen',
        artist: 'Caballeros',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '4',
        url:   'https://www.mboxdrive.com/Misterios%20Gozosos%20del%20Rosario%20Lunes%20y%20S%C3%A1bado.mp3',
        title: 'Misterios Gozosos',
        album: 'Caballeros de la Virgen',
        artist: 'Caballeros',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '5',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misterios-Gloriosos-La-Coronacion-de-Nuestra-Senora-como-Reina-universal-de-todo-lo-creado.mp3?_=14',
        title: 'Santo Rosario',
        album: 'Cuarto Misterio Glorioso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '6',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misterios-Gloriosos-La-Ascencion-de-Senor-a-los-cielos.mp3?_=11',
        title: 'Santo Rosario',
        album: 'Segundo Misterio Glorioso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '7',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/04/Letanias-Lauretanas.mp3?_=16',
        title: 'Santo Rosario',
        album: 'Segundo Misterio Glorioso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '8',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/04/Misterios-Gozosos-La-anunciacion-del-angel-y-la-Encarnacion-del-Verbo.mp3?_=2',
        title: 'Santo Rosario',
        album: 'Primer Misterio Gosozo',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '9',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/04/Misterios-Gozosos-Visitacion-de-Maria-a-su-prima-Santa-Isabel.mp3?_=3',
        title: 'Santo Rosario',
        album: 'Segundo Misterio Gosozo',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '10',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/04/Misterios-Gozosos-El-Nacimiento-del-Nino-Jesus-en-Belen.mp3?_=4',
        title: 'Santo Rosario',
        album: 'Tercer Misterio Gosozo',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '11',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/04/Misterios-Gozosos-La-presentacion-del-Nino-Jesus-en-el-templo-y-la-purificacion-de-Maria.mp3?_=5',
        title: 'Santo Rosario',
        album: 'Cuarto Misterio Gosozo',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '12',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/04/Misterios-Gozosos-La-Perdida-y-hallazgo-del-Nino-Jesus-en-el-templo.mp3?_=6',
        title: 'Santo Rosario',
        album: 'Quinto Misterio Gosozo',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '13',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/04/Letanias-Lauretanas.mp3?_=8',
        title: 'Santo Rosario',
        album: 'Oraciones finales Misterios Gosozo',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '14',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misteros-Luminosos-El-Bautizo-de-Jesus-en-el-rio-Jordan.mp3?_=18',
        title: 'Santo Rosario',
        album: 'Primer Misterio Luminoso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '15',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misteros-Luminosos-La-realizaci%C3%B3n-del-primer-milagro-de-Jesus-transformando-el-agua-en-vino-en-las-bodas-de-Cana.mp3?_=19',
        title: 'Santo Rosario',
        album: 'Segundo Misterio Luminoso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '16',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misteros-Luminosos-La-predicacion-de-Jesus-anunciando-el-Reino-de-Dios-y-convidando-a-la-conversion.mp3?_=20',
        title: 'Santo Rosario',
        album: 'Tercer Misterio Luminoso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '17',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misteros-Luminosos-Transfiguracion-de-Jesus-en-el-Monte-de-Tabor.mp3?_=21',
        title: 'Santo Rosario',
        album: 'Cuarto Misterio Luminoso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '18',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misteros-Luminosos-La-institucion-de-la-Eucaristia-en-la-ultima-Cena.mp3?_=22',
        title: 'Santo Rosario',
        album: 'Quinto Misterio Luminoso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '19',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misterios-Dolorosos-La-agonia-de-Jesus-en-el-Huerto-de-los-Olivos.mp3?_=26',
        title: 'Santo Rosario',
        album: 'Primer Misterio Doloroso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '20',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misterios-Dolorosos-La-sangrienta-flagelacion-de-Jesus.mp3?_=27',
        title: 'Santo Rosario',
        album: 'Segundo Misterio Doloroso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '21',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misterios-Dolorosos-La-Conoracion-de-Espinas-de-Jesus.mp3?_=28',
        title: 'Santo Rosario',
        album: 'Tercer Misterio Doloroso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '22',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misterios-Dolorosos-jesus-con-la-Cruz-a-cuestas-camino-del-Calvario.mp3?_=29',
        title: 'Santo Rosario',
        album: 'Cuarto Misterio Doloroso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    },
    {
        id: '23',
        url: 'https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misteros-Luminosos-La-institucion-de-la-Eucaristia-en-la-ultima-Cena.mp3?_=22https://caballerosdelavirgen.org/wp-content/uploads/2019/11/Misterios-Dolorosos-la-Crucificion-y-Muerte-de-Jesus.mp3?_=30',
        title: 'Santo Rosario',
        album: 'Quinto Misterio Doloroso',
        artist: 'Caballeros de la virgen',
        artwork: 'https://i1.wp.com/caballerosdelavirgen.org/wp-content/uploads/2020/06/dolorosos-1.png'
    }
    

]

export default tracks
