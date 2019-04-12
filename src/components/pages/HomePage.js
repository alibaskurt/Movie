import React, { Component } from 'react'
import ActorList from '../ActorList'

class HomePage extends Component {
  
state = {
    actors : [
        {
            Ad : '1. Harrison Ford',
            Aciklama : 'Harrison Ford was born on July 13, 1942 in Chicago, Illinois, to Dorothy (Nidelman), a radio actress, and Christopher Ford (born John William Ford), an actor turned advertising executive',
            resim : 'https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg'

        },
        {
            Ad : '2. Robert De Niro',
            Aciklama : 'One of the greatest actors of all time, Robert De Niro was born on August 17, 1943 in Manhattan, New York City, to artists Virginia (Admiral) and Robert De Niro Sr.',
            resim : 'https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY209_CR9,0,140,209_AL_.jpg'
        },
        {
            Ad : '3. Morgan Freeman',
            Aciklama : 'With an authoritative voice and calm demeanor, this ever popular American actor has grown into one of the most respected figures in modern US cinema. ',
            resim : 'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX140_CR0,0,140,209_AL_.jpg'
        },
        {
            Ad : '4. Michael Caine',
            Aciklama : 'Michael Caine was born Maurice Joseph Micklewhite in London, to Ellen Frances Marie (Burchell), a charlady, and Maurice Joseph Micklewhite, a fish-market porter.',
            resim : 'https://m.media-amazon.com/images/M/MV5BMjAwNzIwNTQ4Ml5BMl5BanBnXkFtZTYwMzE1MTUz._V1_UY209_CR5,0,140,209_AL_.jpg'
        },
        {
            Ad : '5. Tom Hanks',
            Aciklama : 'Thomas Jeffrey Hanks was born in Concord, California, to Janet Marylyn (Frager), a hospital worker, and Amos Mefford Hanks, an itinerant cook.',
            resim : 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY209_CR2,0,140,209_AL_.jpg'
        },
        {
            Ad : '6. Leonardo DiCaprio',
            Aciklama : 'Few actors in the world have had a career quite as diverse as Leonardo DiCaprios. DiCaprio has gone from relatively humble beginnings',
            resim : 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY209_CR7,0,140,209_AL_.jpg'
        },
        {
            Ad : '7. Brad Pitt',
            Aciklama : 'An actor and producer known as much for his versatility as he is for his handsome face, Golden Globe-winner Brad Pitts most widely recognized role may be Tyler Durden in Fight Club (1999)',
            resim : 'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX140_CR0,0,140,209_AL_.jpg'
        },
        {
            Ad : '8. James Earl Jones',
            Aciklama : 'James Earl Jones was born on January 17, 1931 in Arkabutla, Mississippi, USA. At an early age, he started to take dramatic lessons to calm himself down.',
            resim : 'https://m.media-amazon.com/images/M/MV5BMTcwNTg1MzMwM15BMl5BanBnXkFtZTcwNTQyMDgyMg@@._V1_UX140_CR0,0,140,209_AL_.jpg'
        },
        {
            Ad : '9. John Rhys-Davies',
            Aciklama : 'Acclaimed Welsh actor John Rhys-Davies was born in Ammanford, Carmarthenshire, Wales, to Mary Margaretta Phyllis (Jones), a nurse, and Rhys Davies',
            resim : 'https://m.media-amazon.com/images/M/MV5BMjMwNDY3NjQxMF5BMl5BanBnXkFtZTcwMDc3NTYyOQ@@._V1_UY209_CR17,0,140,209_AL_.jpg'
        },
        {
            Ad : '10. Robert Duvall',
            Aciklama : 'Veteran actor and director Robert Selden Duvall was born on January 5, 1931, in San Diego, CA, to Mildred Virginia (Hart), an amateur actress, and William Howard Duvall,',
            resim : 'https://m.media-amazon.com/images/M/MV5BMjk1MjA2Mjc2MF5BMl5BanBnXkFtZTcwOTE4MTUwMg@@._V1_UY209_CR4,0,140,209_AL_.jpg'
        },

    ]
}

    render() {
        return (
            <div>
               <ActorList key={this.state.actors.resim} actors = {this.state.actors}/>
            </div>
        );
    }
}



export default HomePage