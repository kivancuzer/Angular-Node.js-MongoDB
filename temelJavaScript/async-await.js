const user = { id: 10, name: "mehmet" };
const friends = [{ id: 11, name: "kivanc" }, { id: 12, name: "murat" }];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject("arkadaş listesine ulaşılmamadı!");
            resolve(user);
        }, 1000);
    });
};


const getFriends = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends);
        }, 500)
    });
};

//callback hell
/*let userId;
getUser().then(function (user) {
    userId = user.id;
    console.log(user);
});

getFriends(userId).then(function (friends) {
    console.log(friends);
});*/

//promise chain

/*getUser().then((user) => {
    return getFriends(user.id);
})
    .then((friends)=>{
        console.log(friends);
        
    })*/

async function asenkronAkis() {
    try {
        // console.log("islem başladı");
        const user = await getUser();
        // console.log("user serivisi bitti");
        const friends = await getFriends(user.id);
        // console.log("friends servisi bitti")

        console.log({ user, friends });
    } catch (error) {
        console.log(error);
    }

};

asenkronAkis();