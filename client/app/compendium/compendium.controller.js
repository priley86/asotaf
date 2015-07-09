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
                {
                    "name":"Balon Greyjoy",
                    "theories":[
                        {
                            "name":"Balon was killed by a Faceless Man.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559cacdaafdac346e4df257e",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Barbrey Dustin",
                    "theories":[
                        {
                            "name":"Lady Dustin worked with Mance to free Jeyne Poole and assisted him with the pink letter.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559a0827afdac30cbfce34be",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Ben Plumm",
                    "theories":[
                        {
                            "name":"Ben is descended from Elaena and Aegon IV Targaryen (the Unworthy)",
                        },
                    ]
                },
                {
                    "name":"Benjen Stark",
                    "theories":[
                        {
                            "name":"Benjen is disguised as a man with a blue beard and an eye patch....",
                        },
                        {
                            "name":"Benjen was captured by the Others.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55999f9bafdac37696a90a6c",
                                    "number":"1"
                                },
                                {
                                    "url":"writeup/id/559d98deafdac34b3592c691",
                                    "number":"2"
                                },
                                {
                                    "url":"writeup/id/559d9a0aafdac34b42494c57",
                                    "number":"3"
                                },
                                {
                                    "url":"writeup/id/559d9d4dafdac34b54557aaf",
                                    "number":"4"
                                },
                                {
                                    "url":"writeup/id/55995ba1afdac36fc10c0725",
                                    "number":"5"
                                },
                            ]
                        },
                        {
                            "name":"Benjen gave Lyanna away to Rhaegar during their wedding.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55994e96afdac36e71d97549",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Benjen knew about Lyanna and Rhaegar's romance, and joined the Watch out of guilt due to her death.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599835cafdac37459936b38",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Benjen joined the Night's Watch in preparation for having Jon join later.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559d9a96afdac34b4b892ee9",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Benjen has been helping Bloodraven.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559d9659afdac34b2c76fcf0",
                                    "number":"1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name":"Brandon Stark (Lord Rickard Stark's eldest son)",
                    "theories":[
                        {
                            "name":"Brandon \"dishonored\" Ashara at the tourney at Harrenhal."
                        },
                    ]
                },
                {
                    "name":"Brienne Tarth",
                    "theories":[
                        {
                            "name":"Brienne will forge Lightbringer by killing Cat with Oathkeeper.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55986dceafdac3571bb29f73",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Brienne is descended from Ser Duncan the Tall.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559dae4aafdac34b7cfe6f10",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Brienne is the more beautiful one from Cersei's Valonqar prophesy.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55974689afdac33020531cbd",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Brienne and Pod will meet Howland Reed.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559985efafdac374a1218f45",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Bronn",
                    "theories":[
                        {
                            "name":"Bronn will inherit Stokeworth and Rosby.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5598a960afdac35f1a08cca6",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Bronn was a wildling.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55995dc5afdac37041d80101",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Brynden Rivers (Bloodraven)",
                    "theories":[
                        {
                            "name":"Bloodraven is wrong about being able to communicate with people from the past.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55987399afdac358369193eb",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Bloodraven + Shiera Seastar = Melisandre.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55997dceafdac373ffebaf8e",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Bloodraven skinchanged into Jeor Mormont's raven.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55994924afdac36dffe003f3",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Bloodraven is deceiving Bran to speed up his growth as a greenseer.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599c578afdac37d5fedf99c",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Brynden Tully (the Blackfish)",
                    "theories":[
                        {
                            "name":"The Blackfish is heading to the Vale.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55996158afdac3711e11675e",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"The Blackfish escaped Riverrun with Jeyne Westerling.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5598b0b7afdac3614d689227",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"The Blackfish is hiding in Riverrun.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559dc3f8afdac34bc1263b93",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Catelyn Tully",
                    "theories":[
                        {
                            "name":"Catelyn is being affected by the curse of Harrenhal.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559dde49afdac34cde5ad16e",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Cersei Lannister",
                    "theories":[
                        {
                            "name":"Cersei will burn King's Landing.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559de0b3afdac34cf90d11a4",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Jaime is the Valonqar and will kill Cersei.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55998975afdac375191fd246",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Cersei is pregnant and will have an abortion.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559de2d4afdac34d048c49a9",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Chataya",
                    "theories":[
                        {
                            "name":"Tywin + Chataya = Alayaya.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599b689afdac37c84dadaee",
                                    "number":"1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name":"Coldhands",
                    "theories":[
                        {
                            "name":"Coldhands is from Skagos.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599b5b0afdac37c79dcf740",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Coldhands is Ser Duncan the Tall.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55997ee0afdac3741123f948",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Coldhands is Craster's father.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559deac8afdac34e86fb7049",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Coldhands is the Night's King.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599743dafdac37345290229",
                                    "number":"1"
                                },
                                {
                                    "url":"writeup/id/559c77cbafdac3460416bce8",
                                    "number":"2"
                                }
                            ]
                        },
                        {
                            "name":"Coldhands is the last hero.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5598ae7bafdac360ed872664",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Coldhands is Bran the Builder.",
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
