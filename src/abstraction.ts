// // oop- abstraction

// //idea
// interface MediaPlayer{
//     play(): void;
//     pause(): void;
//     stop(): void
// }

// // implementation
// class Musicplayer implements MediaPlayer{

//     play(){
//         console.log("Playing music...")
//     }
//     pause(){
//         console.log("Music Paused...")
//     }
//     stop(){
//         console.log(`Music Stopped`)
//     }
// }

// const AbidPlayer = new Musicplayer()
// AbidPlayer.play()


abstract class MediaPlayer{
    abstract  play() :void;
    abstract pause(): void;
    abstract  stop(): void;
}

class AbidPlayer extends MediaPlayer{
    play(){
        console.log(`Playing music`)
    }
    pause(){
        console.log(`music paused`)
    }
    stop(){
        console.log(`music stopped`)
    }
}

const AbidPlayer1 = new AbidPlayer()
AbidPlayer1.play()