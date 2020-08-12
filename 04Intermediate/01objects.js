//Function that takes and object and gives an object.


let myYoutubeVideoOne = {
    title : "Loops in Javascript",
    videoLength : 15,
    videoCreator : 'Hitesh Choudary',
    videoDescription : 'This is very long video description'
}

let myYoutubeVideoTwo = {
    title : "Functions in Javascript",
    videoLength : 10,
    videoCreator : 'Hitesh Choudary',
    videoDescription : 'This is very long video description'
}

let changeVideoLength = function(myObject){
   return {
   format1 : `Time of this video is ${myObject.videoLength + 2}`,
   format2 : `Time of this video is ${myObject.videoLength + 1}`

   }
}

let ad1 = changeVideoLength(myYoutubeVideoTwo);
console.log(ad1.format1);
console.log(ad1.format2);