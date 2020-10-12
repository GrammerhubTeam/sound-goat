// // WHAT GOAT DOESNT WRITE CODE // <==== make tshirts out of this

// // Write name under here for hacktober tshirt!!!!:
// // 1) 

// /**
//  * 1) Use authentication  -    
//  *      - sign in
//  *      - sign out
//  *      - refresh token
//  * 
//  * 2) Get Playlist
//  * 
//  * 
//  * 3) Find Song
//  * 
//  * 
//  * 4) Create Playlist
//  * 
//  * 
//  * 5) Play Song ?
//  * 
//  * 
//  * 6) Share Song ?
//  */


// //  ======================================================================================================
// //  State: { 
//     // playlists, playingState, shuffleBool, styling, 
//     // userInfo, nextSong, currentSong, thirdParties(links?), graphicArtLink 
// // }

// //  Methods: {
//     // auth: {
//         // signIn
//         // signOut
//         // refreshToken
//     // }
//     // getPlaylist(s)
//     // getSong
//     // createPlaylist
//     // playSong
//     // shareSong
// // }
// //  ======================================================================================================

export interface ITaskRunnerProps {
    [x: string]: any
}

export enum TASK_RUNNER_NAME {
    SPOTIFY = 'SPOTIFY'
}

export type VoidFunc = () => void


export interface AuthMethods {
    /** @description Sign in method */
    signIn: () => void;
    /** @description Sign out method */
    signOut: () => void;
    /** @description Gets a refresh token */
    refreshToken: () => void;
}

export class TaskRunner implements ITaskRunnerProps {
    // ----------------  STATE  --------------------
    // playlists: IPlaylist[] = []; // <================================== WE GOTTA DO THIS
    // playingState: PLAYING_STATES; // <================================== WE GOTTA DO THIS
    shuffle: boolean = false;
    styling: {[x: string]: string | number} = {};
    // userInfo: IUserInfo; // <================================== WE GOTTA DO THIS
    // nextSong: ISong; // <================================== WE GOTTA DO THIS
    // currentSong: ISong; // <================================== WE GOTTA DO THIS
    // thirdParties, // links for when we share the songs? 
    graphicArtLink: string = ''; // This should be some default soundGoat image 
    // ---------------------------------------------

    // ---------------- METHODS --------------------
    apiName: TASK_RUNNER_NAME = TASK_RUNNER_NAME.SPOTIFY;
    auth: AuthMethods = {
        signIn: () => {console.log('I am now signing in...')},
        signOut: () => {console.log('I am now signing out...')},
        refreshToken: () => {console.log('I am now refreshing token...')},
    };
    // ================================ /** @description Refresh auth token method */
    // ================================ refreshToken: () => void;
    /** @description Gets the play list*/
    getPlaylist: VoidFunc = 
        () => { console.log('getting playlist') };
    /** @description Gets a song*/
    getSong: VoidFunc  =
        () => {console.log('getting a song')};
    /** @description Creates a playlist*/
    createPlaylist: VoidFunc =
        () => {console.log('creating a playlist')};
    /** @description Play a song*/
    playSong: VoidFunc =
        () => {console.log('playing a song')};
    /** @description Share a song*/
    shareSong: VoidFunc =
        () => {console.log('sharing a song')};
    // ----------------------------------------------

    constructor(init: ITaskRunnerProps) {
        this.apiName = init.apiName || this.apiName;
        this.getSong = init.getSong || this.getSong;
        this.getPlaylist = init.getPlaylist || this.getPlaylist;
        this.createPlaylist = init.createPlaylist || this.createPlaylist;
        this.playSong = init.playSong || this.playSong;
        this.shareSong = init.shareSong || this.shareSong;
    }

}
// // Class: what props and methods object is gonna have

// // Constructor: set values to class' props
// // Note: you can add access modifiers

// // Interface: what rules and object needs to follow before creating an instance
// // Note: Don't use = sign or assign values to props, only data types

// // Array: Store a list of key-value pairs
// // Key: x (variable name) : String (data type)
 

// interface IPhotoLinks {
//     Adult_Photo_1: string,
//     Adult_Photo_2: string,
//     Adult_Photo_3: string,
//     Adult_Photo_4: string,
//     Adult_Photo_5: string,
//     Adult_Photo_6: string,
//     Adult_Photo_7: string,
//     Kid_Photo_1: string,
//     [x: string]: string
// }


// // const photoLinks: {[x: string]: string} = {
// const photoLinks: IPhotoLinks = {
//     Adult_Photo_1: 'blahblahblahroute',
//     Adult_Photo_2: 'blahblahblahroute',
//     Adult_Photo_3: 'blahblahblahroute',
//     Adult_Photo_4: 'blahblahblahroute',
//     Adult_Photo_5: 'blahblahblahroute',
//     Adult_Photo_6: 'blahblahblahroute',
//     Adult_Photo_7: 'blahblahblahroute',
//     Kid_Photo_1: 'yoyoyoyoyoyo',
// }

// // Object.keys(photoLinks).map((v: string) => {
// //     console.log(photoLinks[v])
// // })

// // Loop through each Adult_Photo
// // i will keep the number of photos

// // for (let i = 0; i < 100; i++) {
// //     if (photoLinks[`Adult_Photo_${i}`]) {
// //         console.log(photoLinks[`Adult_Photo_${3}`])
// //     }
// // }


export interface IAnimalProperties {
    name: string
    age: number
    sound?: string
    announceYourself?: () => void
    // ----------------------------------------------
    randomObj?: object
    stringedObject?: { [x: string]: string }
    boolVal?: boolean // same as "true | false"
    numArr?: number[] // Single array of numbers
    // numArrArr?: Array<number[]> // Also typed as Array<Array<number>>
    numArrArr?: Array<Array<number>> // Also typed as Array<number[]>
}

export interface IGoatProperties {
    writeCode?: () => void
}

 // Interface can implement another interface
 // Interface can extends other classes or interfaces
 
export class Animal implements IAnimalProperties { // donald wuz here
    name: string
    age: number
    sound: string
    announceYourself: () => void

    constructor(init?: IAnimalProperties){
        this.name = init?.name || 'Tony'
        this.age = init?.age || 70
        this.sound = init?.sound || "They're greeeeaaatttt!"
        this.announceYourself = init?.announceYourself || (() => {
            console.log(`${this.sound}! My name is ${this.name} and I'm ${this.age}`)
        })
    }

    
}

export class Dog extends Animal {
    // name: string
    // age: number
    // sound: string

    constructor(init?: IAnimalProperties) {
        super(init)
        // =====  AKA  =====
        // this.name = init?.name || 'Tony'
        // this.age = init?.age || 70
        // this.sound = init?.sound || "They're greeeeaaatttt!"
        // =================

        this.sound = 'woof' // override sound
    }
}

export class Pitbull extends Dog {
    constructor(init?: IAnimalProperties) {
        super(init)
        this.sound = 'im just a dog' // override sound
    }
}

export class Cow extends Animal {
    constructor(init?: IAnimalProperties) {
        super(init)
        this.sound = 'mooo'
    }
}

export class Goat extends Animal {
    writeCode: () => void

    constructor(init?: IAnimalProperties & IGoatProperties) {
        super(init)
        this.sound = 'you already did the goat?'
        this.writeCode = init?.writeCode || (() => {
            console.log('you never helped me with confidence...')
        })
    }
}


