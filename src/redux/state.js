let state = {
    dialogPage: {
         names: [
        { name: "Hanna", id: '1', img: 'https://i.pinimg.com/564x/11/e5/3f/11e53f8bec11e025f0074171f06abe19.jpg' },
        { name: "Ulrich", id: '2', img: 'https://i.pinimg.com/564x/4f/57/f5/4f57f5f1bebf9abbd2bbcd768f8960d4.jpg' },
        { name: "Mikkel", id: '3', img: 'https://i.pinimg.com/564x/24/de/49/24de4970f8c3b4100357bee5a8d93f52.jpg' },
        { name: "Katarina", id: '4', img: 'https://i.pinimg.com/564x/89/b2/ea/89b2ea984f0503b463c80eb827076196.jpg' },
        { name: 'Johnas', id: '5', img: 'https://i.pinimg.com/564x/17/9d/39/179d39e4321a754522645ae781240c26.jpg' }
    ],
    messages: [
 { messageTo: 'Привет', messageFrom: "Здарова" },
        { messageTo: 'Гулять пойдешь? ', messageFrom: "Да нет, там что-то холодно" },
        { messageTo: 'Ну так оденься потеплей!', messageFrom: "Ой да ну..." },
    ]
    },
profilePage: {
posts: [
        { message: 'Почему никто не чешет пузико?', name: 'Пряничек', surname: 'Сладенький', count: '15' },
        { message: 'How are you', name: 'Ягодка', surname: 'Спелая', count: '15' },
        { message: 'Where are you', name: 'Эклерчик', surname: 'Ванильный', count: '20' },
        { message: 'I love you', name: 'Кексик', surname: 'Малиновый', count: '25' },
        { message: 'Why nobody loves me?', name: 'Кролик', surname: 'Апельсиновый', count: '14' }
    ]
},
sideBar:[
    { name: 'Профиль', url: '/profile'},
    { name: 'Музыка', url: '/music'},
    { name: 'Новости', url: '/news'},
    { name: 'Сообщения', url: '/dialogs'},
    { name: 'Настройки', url: '/settings'}
]
};

export default state;