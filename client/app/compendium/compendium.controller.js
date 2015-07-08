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
                            "name":"Aerys is the father of Cersei, Jaime, and/or Tyrion.",
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
                        },
                        {
                            "name":"Aerys caused the Others to come.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559867f2afdac3548f473479",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Aerys will save Westeros from the Long Night.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599af53afdac37b4ee80712",
                                    "number":"1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name":"Allyria Dayne",
                    "theories":[
                        {
                            "name":"Allyria is the daughter of Ashara and Ned."
                        }
                    ]
                },
                {
                    "name":"Alysane Mormont",
                    "theories":[
                        {
                            "name":"The father of Alysane's children is Tormund.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55987efeafdac35a6e64e530",
                                    "number":"1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name":"Arianne Martell",
                    "theories":[
                        {
                            "name":"Arianne is the younger queen in the Valonqar prophesy.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559a07a6afdac30c5d8b0f09",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Tyene told Doran about the conspiracy.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c3cb0afdac33dac79aa7b",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Sylva told Doran about the conspiracy.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c3bdaafdac33d94e77712",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Darkstar told Doran about the conspiracy.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559bdf49afdac33bc219c8c8",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"No one told Doran about the conspiracy.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c3c9aafdac33da3e2a6b4",
                                    "number":"1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name":"Arya Stark",
                    "theories":[
                        {
                            "name":"Arya will die and warg into Nymeria.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c4074afdac33db983a7c4",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Arya will kill Qyburn.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5598afc0afdac361319b7adf",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Arya will skinchange into cats to collect information.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55999c82afdac376213cdee1",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Theon will help Arya leave the Faceless Men.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5598b312afdac361be1fc787",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Arya will kill a Lannister.",
                        },
                    ]
                },
                {
                    "name":"Asha Greyjoy",
                    "theories":[
                        {
                            "name":"Asha is pregnant.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c4a60afdac33dd5630150",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Ashara Dayne",
                    "theories":[
                        {
                            "name":"Ashara helped Ned cover-up Jon's parentage.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55959845afdac3032a3229e0",
                                    "number":"1"
                                },
                                {
                                    "url":"writeup/id/5595943cafdac302ca49aad7",
                                    "number":"2"
                                }
                            ]
                        },
                        {
                            "name":"Ashara is Septa Lemore.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5595b27fafdac3063f1ee3b7",
                                    "number":"1"
                                },
                            ]
                        },
                        {
                            "name":"Brandon \"dishonored\" Ashara at the Tourney at Harrenhal.",
                        },
                        {
                            "name":"Ashara had fAegon with Ned.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559955b0afdac36f0f2beba5",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Ashara had a duaghter with Ned.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55987101afdac357d4fd8125",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Rhaegar deflowered Ashara at the Tourney at Harrenhal.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559a0819afdac30cace732de",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Ned + Ashara = Jon.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599666fafdac37197c674ba",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Lyanna had twins and Ashara raised one.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55994d74afdac36e68b1703e",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Aerys + Ashara = Daenerys",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c5369afdac33f0450399f",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Howland + Ashara = Meera and Jojen",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c73e1afdac3456124a22d",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Aurane Waters",
                    "theories":[
                        {
                            "name":"Aurane is headed to Meereen.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c542dafdac33f2f76c629",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
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
