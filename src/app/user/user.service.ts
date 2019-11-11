import { Injectable, Input, EventEmitter} from '@angular/core';
import { IMovie } from '../user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Input()
    movies: IMovie[] = [{
    id: 1,
    name: ' Avengers (End Game)',
    year: 'April 26, 2019',
    imageUrl: '/assets/avengersendgame.png',
    plot: `Adrift in space with no food or water,
    Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle.
    Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner --
     must figure out a way to bring back their vanquished allies for an epic showdown with Thanos --
      the evil demigod who decimated the planet and
     the universe.`,
     time: '03:02:06',
     favorite: []

  },
  {
    id: 2,
    name: 'Hobbs and Shaw',
    year: 'April 26, 2019',
    imageUrl: '/assets/HB.jpg',
    plot: `Brixton Lorr is a cybernetically enhanced soldier who possesses superhuman strength, a brilliant mind and a lethal pathogen that could wipe out half of the world's population. It's now up to hulking lawman Luke Hobbs and lawless operative Deckard Shaw to put aside their past differences and work together to prevent the seemingly indestructible Lorr from destroying humanity`,
    time: '02:16:08',
    favorite: []
  },
  {
    id: 3,
    name: 'Joker',
    year: 'April 26, 2019',
    imageUrl: '/assets/joker.png',
    plot: `Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.`,
    time: '02:02:02',
    favorite: []
  },
  {
    id: 4,
    name: 'Captain Marvel',
    year: 'April 26, 2019',
    imageUrl: '/assets/CP.jpg',
    plot: `Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls`,
    time: '02:05:19',
    favorite: []
  },
  {
    id: 5,
    name: 'Far from Home',
    year: 'April 26, 2019',
    imageUrl: '/assets/SP.jpg',
    plot: `Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent`,
    time: '02:09:19',
    favorite: []
  },
  {
    id: 6,
    name: 'Lion King',
    year: 'April 26, 2019',
    imageUrl: '/assets/LK.jpg',
    plot: `Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother -- and former heir to the throne -- has plans of his own. The battle for Pride Rock is soon ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. Now, with help from a curious pair of newfound friends, Simba must figure out how to grow up and take back what is rightfully his.`,
    time: '01:58:19',
    favorite: []
  },
  {
    id: 7,
    name: 'Aladdin',
    year: 'April 26, 2019',
    imageUrl: '/assets/aladdin.png',
    plot: `Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine's kingdom`,
    time: '02:05:29',
    favorite: []
  },
  {
    id: 8,
    name: 'Black Panther',
    year: 'April 26, 2019',
    imageUrl: '/assets/BP.jpg',
    plot: `After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people`,
    time: '02:15:22',
    favorite: []
  },
  {
    id: 9,
    name: 'Batman Hush',
    year: 'April 26, 2019',
    imageUrl: '/assets/batman.jpg',
    plot: `A mysterious villain uses Catwoman, Riddler, Ra's al Ghul and several of Batman's other enemies and allies in a game to create chaos in Batman's life.`,
    time: '01:21:19',
    favorite: []
  },
  {
    id: 10,
    name: 'John Wick 3',
    year: 'April 26, 2019',
    imageUrl: '/assets/johnwick.jpg',
    plot: `After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.`,
    time: '02:14:11',
    favorite: []
  }
  ];
    getMovies() {
      // tslint:disable-next-line: no-use-before-declare
      return this.movies;
    }

    getMovie(id: number):IMovie {
      return this.movies.find(movie => movie.id === id )
    }

    saveMovie(movie) {
      movie.id = 12;
      this.movies.push(movie);
    }
    searchMovies(searchTerm: string){
      let results: IMovie[] = []
      results = results.filter((val) => val.name.includes(searchTerm.toLocaleLowerCase()));
      console.log(results)

      const emitter = new EventEmitter(true);
      setTimeout(() => {
        emitter.emit(results)
      }, 100);
      return emitter;
    }
}
