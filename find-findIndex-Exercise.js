//Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

const users = [
    {username: 'fatima'},
    {username: 'millena'},
    {username: 'bob'}
  ];
function findUserByUsername(users, username){
return users.find(function(user){
    return user.username === username;
})
}

//Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.
function removeUser(users, username){
const foundIndex = users.findIndex(function(user){
return user.username === username;
})
if(foundIndex === -1) return;

return users.splice(foundIndex, 1) [0];
}