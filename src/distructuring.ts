// object destructuring
// array destructuring

const user = {
    id: 123,
    name: {
        firstName: 'Ahnaf',
        middleName: 'Z',
        LastName: 'Abid'

    },
    gender:" male",
    favouriteColor: 'black'

}

const {favouriteColor: myFavouriteColor } = user;
console.log(myFavouriteColor)