var rootref= firebase.database().ref().child("data");

rootref.on("child_added",snap=>{
var  name=snap.child("label").val();

});
console.log(name);
(function(){
  var contents=[];
firebase.database().ref('data/').once('value', function(snap){
  contents=JSON.stringify(snap.val())
    console.log(contents)
})
console.log(contents);
})()
