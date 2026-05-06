// spread Operator

const friends = ['Jack', "Mack"]

const schoolFriends = ['Hulk', 'Mac', "lou"]

const collegeFriends = ['Mark', 'Loki', "Tony"]

friends.push(...schoolFriends)
friends.push(...collegeFriends)

// rest Operator
const sendInvite = (...friends: string[])=>{
        // console.log(`send sendInvite to ${friend1}`)
        // console.log(`send sendInvite to ${friend2}`)
        // console.log(`send sendInvite to ${friend3}`)

        friends.forEach((friend : string) => {
            console.log(`send sendInvite to ${friend}`)
            
        });


    }

    sendInvite('pintu', 'cintu', 'mintu', 'maklu')