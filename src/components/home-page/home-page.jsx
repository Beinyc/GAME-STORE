import React from "react";
import './home-page.css'
import { GameItem } from "../game-item/gameItem";


const GAMES = [
  {
      image: 'https://store-images.s-microsoft.com/image/apps.33953.13718773309227929.bebdcc0e-1ed5-4778-8732-f4ef65a2f445.9428b75f-2c08-4e70-9f95-281741b15341',
      title: 'Forza Horizon 5',
      genres: ['Гонки', 'Симулятор', 'Открытый мир'],
      price: 2343,
      video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
      id: 1,
      description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
      image: 'https://staticg.sportskeeda.com/editor/2021/12/ac704-16403616744806-1920.jpg',
      title: 'Battlefield 2042',
      genres: ['Экшен', 'Шутер', 'Война'],
      video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
      price: 2433,
      id: 2,
      description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
  },
  {
      image: 'https://d3wo5wojvuv7l.cloudfront.net/t_rss_itunes_square_1400/images.spreaker.com/original/1774f44a3190c1ff33689fa6c51a2c97.jpg',
      title: 'Life is Strange True Colors',
      genres: ['Глубокий сюжет', 'Протагонистка'],
      video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
      price: 3021,
      id: 3,
      description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
  },
  {
      image: 'https://i.rutab.net/upload/2021/userfiles/intro161728751994732.jpg',
      title: 'Grand Theft Auto V',
      genres: ['Открытый мир', 'Экшен'],
      video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
      price: 789,
      id: 4,
      description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
  },
  {
      image: 'https://images.hdqwalls.com/download/5k-tom-clancys-rainbow-six-siege-l9-2560x1700.jpg',
      title: 'Tom Clancy\'s Rainbow Six® Siege',
      video: 'https://www.youtube.com/embed/6wlvYh0h63k',
      genres: ['Тактика', 'Шутер'],
      price: 982,
      id: 5,
      description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
  },
  {
      image: 'https://crackgods.org/wp-content/uploads/2021/02/Assassins-Creed-Valhalla-guides-and-features-hub-.jpg',
      title: 'Assassin’s Creed Valhalla',
      genres: ['Паркур', 'РПГ', 'Открытый мир'],
      video: 'https://www.youtube.com/embed/ssrNcwxALS4',
      price: 2863,
      id: 6,
      description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
]


export const HomePage = () => {
    return (
        <div className="home-page">
          {GAMES.map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    );
  }