/**
 * Created by margotfilleton on 15/02/2017.
 */

import firebase from 'firebase';

const connexion = {
    userLoggedCallback: null,

    //TO DO read data
    readData: function (date) {
        firebase.database().ref('/data/'+date).once('value').then(function(snapshot) {
            var listData = snapshot.val();
            return(listData);
        });
    },


    sendData: function (location, airQuality) {
        var tmpDate = new Date();

       firebase.database().ref('data/'+ tmpDate ).push({

            date: tmpDate.toString(),
            location: location,
            airQuality: airQuality
        });
    },

    userSingOut: function () {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            // Handle Errors use this infos in a real Log further
            console.error('Sing Out Fail ' + error)

        });
    },
    userSingIn: function (email, password) {
        if (firebase.auth().currentUser)
            return;
        firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {

        }).catch((error) => {
            // Handle Errors here maybe use this infos in a real Log further
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.error('error ' + error)

        });
    },
    userIsLogged: function () {
        return firebase.auth().currentUser ? true : false;
    },

}

module.exports = connexion;