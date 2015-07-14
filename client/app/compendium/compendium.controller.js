'use strict';

angular.module('asotafApp')
  .controller('CompendiumCtrl', function ($scope, $http) {

    $http.get('../components/topics.json').success(function(data) {
       $scope.theories = data;
       console.log($scope.theories);
    });

    var characters = [
        "Aegor Rivers (Bittersteel)",
        "Aemon Targaryen (maester)",
        "Aeron Greyjoy (Damphair)",
        "Aerys II Targaryen",
        "Allyria Dayne",
        "Alysane Mormont",
        "Arianne Martell",
        "Arya Stark",
        "Asha Greyjoy (Yara Greyjoy)",
        "Ashara Dayne",
        "Aurane Waters",
        "Balon Greyjoy",
        "Barbrey Dustin",
        "Ben Plumm (Brown Ben Plumm)",
        "Benjen Stark",
        "Brandon Stark (son of Rickard Stark)",
        "Brienne of Tarth",
        "Bronn",
        "Brynden Rivers",
        "Brynden Tully (the Blackfish)",
        "Catelyn Stark",
        "Cersei Lannister",
        "Chataya",
        "Coldhands",
        "Daario Naharis",
        "Daemon I Blackfyre (the Black Dragon)",
        "Daenerys Targaryen",
        "Domeric Bolton",
        "Drogo",
        "Eddard Stark (Ned)",
        "Eddison Tollett (Dolorous Edd)",
        "Edmure Tully",
        "Euron Greyjoy",
        "Galazza Galare (the Green Grace)",
        "Gendry",
        "Gerold Dayne (Darkstar)",
        "Gerris Drinkwater",
        "Ghost of High Heart",
        "Gregor Clegane (the Mountain)",
        "Hallis Mollen",
        "Harys Swyft",
        "Howland Reed",
        "Illyrio Mopatis",
        "Jaime Lannister (the Kingslayer)",
        "Jalabhar Xho",
        "Janos Slynt",
        "Jaqen H'ghar",
        "Jason Mallister"
    ];

    var houses = [
        "Dayne",
        "Stark",
        "Targaryen"
    ];

    $scope.topics = [
        {
            "name":"Characters",
            "subtopics":characters
        },
        {
            "name":"Houses",
            "subtopics":houses
        }
    ];

  });
