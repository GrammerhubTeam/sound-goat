// WHAT GOAT DOESNT WRITE CODE // <==== make tshirts out of this

// Write name under here for hacktober tshirt!!!!:
// 1) 

/**
 * 1) Use authentication  -    
 *      - sign in
 *      - sign out
 *      - refresh token
 * 
 * 2) Get Playlist
 * 
 * 
 * 3) Find Song
 * 
 * 
 * 4) Create Playlist
 * 
 * 
 * 5) Play Song ?
 * 
 * 
 * 6) Share Song ?
 */

// Class: what props and methods object is gonna have

// Constructor: set values to class' props
// Note: you can add access modifiers

// Interface: what rules and object needs to follow before creating an instance
// Note: Don't use = sign or assign values to props, only data types

// Array: Store a list of key-value pairs
// Key: x (variable name) : String (data type)
 

interface IPhotoLinks {
    Adult_Photo_1: string,
    Adult_Photo_2: string,
    Adult_Photo_3: string,
    Adult_Photo_4: string,
    Adult_Photo_5: string,
    Adult_Photo_6: string,
    Adult_Photo_7: string,
    Kid_Photo_1: string,
    [x: string]: string
}


// const photoLinks: {[x: string]: string} = {
const photoLinks: IPhotoLinks = {
    Adult_Photo_1: 'blahblahblahroute',
    Adult_Photo_2: 'blahblahblahroute',
    Adult_Photo_3: 'blahblahblahroute',
    Adult_Photo_4: 'blahblahblahroute',
    Adult_Photo_5: 'blahblahblahroute',
    Adult_Photo_6: 'blahblahblahroute',
    Adult_Photo_7: 'blahblahblahroute',
    Kid_Photo_1: 'yoyoyoyoyoyo',
}

// Object.keys(photoLinks).map((v: string) => {
//     console.log(photoLinks[v])
// })

// Loop through each Adult_Photo
// i will keep the number of photos

// for (let i = 0; i < 100; i++) {
//     if (photoLinks[`Adult_Photo_${i}`]) {
//         console.log(photoLinks[`Adult_Photo_${3}`])
//     }
// }


export interface IAnimalProperties {
    name: string
    age: number
    sound?: string
    announceYourself?: () => void
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

    constructor(init?: IAnimalProperties){
        this.name = init?.name || 'Tony'
        this.age = init?.age || 70
        this.sound = init?.sound || "They're greeeeaaatttt!"
    }

    announceYourself = () => {
        console.log(`${this.sound}! My name is ${this.name} and I'm ${this.age}`)
    }
}


export class Dog extends Animal {
    constructor(init?: IAnimalProperties) {
        super(init)
        this.sound = 'woof'
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


