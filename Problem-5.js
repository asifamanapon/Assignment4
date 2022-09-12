
function isBestFriend(friend1, friend2) {

    if (typeof (friend1) == 'object' && typeof (friend2) == 'object') {
        if (friend1.Friend === friend2.Name && friend2.Friend === friend1.Name) {
            return true;
        }
        else {
            return false;
        }
    }

}
let object1 = {
    Name: 'Abul',
    Friend: 'Habul'
};

let object2 = {

    Name: 'Habul',
    Friend: 'Abul'
};
const friendsNames = isBestFriend(object1, object2);
console.log(friendsNames);