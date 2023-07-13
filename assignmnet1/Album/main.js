// Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums.
//  Print each return value to show that Objects are storing the album information correctly. 
//  Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//  If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//  Make at least one new function call that includes the number of tracks on an album.
var make_album = function (artist_name, album_title, track) {
    if (track === void 0) { track = undefined; }
    if (track)
        return { 'artist_name': artist_name, 'album_title': album_title, 'track': track };
    return { 'artist_name': artist_name, 'album_title': album_title };
};
console.log(make_album('Artist_1', 'Album_1'));
console.log(make_album('Artist_2', 'Album_2'));
console.log(make_album('Artist_3', 'Album_3'));
console.log(make_album('Artist_4', 'Album_4', 6));
