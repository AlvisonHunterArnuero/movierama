  export const getRandomMovie=()=>{ 
    const rndTopMovies = [
        "harry potter",
        "star wars",
        "transformers",
        "spider man",
        "Batman",
        "X-Men",
        "shrek",
        "The Mummy",
        "Madea",
        "superman",
        "Ip Man",
        "Rocky",
        "Alien",
        "Teenage Mutant Ninja Turtles",
        "Alvin and the Chipmunks",
        "Men in Black",
        "Ice Age",
        "Pirates of the Caribbean",
        "avengers",
        "Twilight",
        "Lethal Weapon",
        "The Conjuring",
        "Iron Man",
        "Planet of the Apes",
        "mission impossible",
        "Die Hard",
        "fast and furious",
        "Indiana Jones",
        "Despicable Me",
        "Kill Bill",
        "The Chronicles of Narnia",
        "Back to the Future",
        "The Godfather",
        "Dark Knight",
        "Lord Of The Rings",
      ];
      return rndTopMovies[Math.floor(Math.random() * rndTopMovies.length)];
  }

