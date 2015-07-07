'use strict';

angular.module('asotafApp')
  .controller('CompendiumCtrl', function ($scope, $http) {

    $scope.topics = [
        {
            "name":"Characters",
            "subtopics":[
                {
                    "name":"Aegor Rivers (Bittersteel)",
                    "theories":[
                        {
                            "name": "Bittersteel is the father of the female Blackfyre line.",
                            "hrefs": [
                                {
                                    "url":"writeup/id/559b26d0afdac333fc1d540f",
                                    "number":"1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name":"Aemon Targaryen (maester)",
                    "theories": [
                        {
                            "name":"Aemon's first temptation was a wildling.",
                            "hrefs": [
                                {
                                    "url":"writeup/id/55998f46afdac3758acc2ead",
                                    "number":"1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name":"Aerys II Targaryen (the Mad King)",
                    "theories": [
                        {
                            "name":"Aerys is the father of Jaime and Cersei.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55974407afdac32fdf27dfb2",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Cersei is the next Aerys.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599a663afdac378925b9c18",
                                    "number":"1"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name":"Houses"
        },
        {
            "name":"Legends"
        },
        {
            "name":"Prophesies"
        }
    ];
    // $scope.addTinfoil = function() {
    //   if($scope.tinfoil === '') {
    //     return;
    //   }
    //   $http.post('/api/tinfoil', { name: $scope.newTinfoil });
    //   $scope.newTinfoil = '';
    // };

    // $scope.deleteTinfoil = function(tinfoil) {
    //   $http.delete('/api/tinfoil/' + tinfoil._id);
    // };
  });
