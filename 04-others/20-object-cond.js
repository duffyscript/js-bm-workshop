let obj = {
    name: "clanek",
    tags: ['one', 'two', 'three'],
/*    picture: {
        id: 10
    }*/
}

console.log(obj?.picture?.id);

/*if (obj.picture !== undefined || obj.picture.id !== undefined) {

}*/

// vs

/*
if (obj?.picture?.id !== undefined) {

}*/
