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
        "Asha Greyjoy",
        "Ashara Dayne",
        "Aurane Waters",
        "Balon Greyjoy",
        "Barbrey Dustin",
        "Ben Plumm",
        "Benjen Stark",
        "Brandon Stark (Lord Rickard Stark's eldest son)",
        "Brienne Tarth",
        "Bronn",
        "Brynden Tully (the Blackfish)",
        "Catelyn Tully",
        "Cersei Lannister",
        "Chataya",
        "Coldhands",
        "Daario Naharis",
        "Daemon I Blackfyre",
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
        "Gregor Clegane",
        "Hallis Mollen",
        "Harys Swyft",
        "Howland Reed",
        "Illyrio Mopatis",
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
