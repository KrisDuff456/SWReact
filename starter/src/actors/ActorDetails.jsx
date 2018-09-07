import React from 'react';

const actors = [
  {actorId: "HF", actor_name : "Harrison Ford", character_name : "Han Solo", quote:"'Never tell me the odds'" , bio : "Harrison Ford (born July 13, 1942) is an American actor and film producer. He gained worldwide fame for his starring roles as Han Solo in the original Star Wars epic space opera trilogy and the title character of the Indiana Jones film series. Ford is also known for his roles as Rick Deckard in the neo-noir dystopian science fiction film Blade Runner (1982), John Book in the thriller Witness (1985), and Jack Ryan in the action films Patriot Games (1992) and Clear and Present Danger (1994). Most recently, Ford reprised his role of Han Solo in Star Wars: The Force Awakens (2015)."},
  {actorId: "MH", actor_name : "Mark Hamill", character_name : "Luke Skywalker", quote:"'I am a Jedi, like my father before me.'", bio : "Mark Richard Hamill (born September 25, 1951) is an American actor, voice actor and writer. He is known for his portrayal of Luke Skywalker in the Star Wars film series. Hamill also starred in the films Corvette Summer (1978), The Big Red One (1980), and Kingsman: The Secret Service (2015). His extensive voice acting work includes a long-standing role as the Joker, commencing with Batman: The Animated Series in 1992."},
  {actorId: "CF", actor_name : "Carrie Fisher", character_name : "Princess Leia", quote:"'Aren't you a little short for a stormtrooper?'", bio : "Carrie Frances Fisher (born October 21, 1956) is an American actress and writer. She is best known for her role as Princess Leia in the original Star Wars trilogy (1977–83) and Star Wars: The Force Awakens (2015). Fisher is also known for her semi-autobiographical novels, including Postcards from the Edge, and the screenplay for the film of the same name, as well as her autobiographical one-woman play, and its nonfiction book, Wishful Drinking, based on the show. Her other film roles include Shampoo (1975), The Blues Brothers (1980), Hannah and Her Sisters (1986), The 'Burbs (1989), and When Harry Met Sally... (1989)."},
  {actorId: "HC", actor_name : "Hayden Christensen", character_name : "Anakin Skywalker", bio : "Hayden Christensen(born April 19, 1981) is an Canadian actor and film producer. Christensen gained international fame for his portrayal of Anakin Skywalker in the Star Wars Trilogy. Since his Star Wars days, Hayden has headlined several action films, including Jumper (2008) and Takers (2010)."},
  {actorId: "EM", actor_name : "Ewan McGregor", character_name : "Obi-Wan Kenobi", quote:"'Hello There'", bio : "Ewan Gordon McGregor OBE is a Scottish actor, known internationally for his various film roles, including independent dramas, science-fiction epics, and musicals. He is now one of the most critically acclaimed actors of his generation, and portrays Obi-Wan Kenobi in the first three Star Wars episodes. Ewan made his directorial debut with American Pastoral (2016), an adaptation of Philip Roth's book, in which Ewan also starred. In 2018 McGregor won an Golden Globe for his work in the TV Series Fargo."},
  {actorId: "NP", actor_name : "Natalie Portman", character_name : "Padame Amidala", bio : "Natalie was born Natalie Hershlag on June 9, 1981, in Jerusalem, Israel. She is the only child of Avner Hershlag, a Israeli-born doctor, and Shelley Stevens, an American-born artist (from Cincinnati, Ohio), who also acts as Natalie's agent. Her parents are both of Ashkenazi Jewish descent. Natalie's family left Israel for Washington, D.C., when she was still very young.She reprised her role as Padme Amidala in the last two episodes of the Star Wars prequel trilogy: Star Wars: Episode II - Attack of the Clones (2002) and Star Wars: Episode III - Revenge of the Sith (2005). She received an Academy Award and a Golden Globe Award for Best Actress in Black Swan (2010). She received a second nomination for Best Actress, for playing Jacqueline Kennedy in Jackie (2016)."},
];

const ActorDetails = (props) => {
    let [actorToDisplay] = actors.filter(actor => (
        actor.actorId === props.match.params.actorId
    ))
    return (
        <div>
            <h3>{actorToDisplay.actor_name}</h3>
            <h4>Character Played: {actorToDisplay.character_name}</h4>
			<h5>{actorToDisplay.quote}</h5>
            <p>{actorToDisplay.bio}</p>
        </div>
    );
}
 
export default ActorDetails;
