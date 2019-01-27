var app_firebase={};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2i_o_PO09tPO6wLb5VT4a2xeWcLrG9Rc",
    authDomain: "esb-dashboard.firebaseapp.com",
    databaseURL: "https://esb-dashboard.firebaseio.com",
    projectId: "esb-dashboard",
    storageBucket: "esb-dashboard.appspot.com",
    messagingSenderId: "158570298229"
  };
  firebase.initializeApp(config);
  app_firebase=firebase;
})()
