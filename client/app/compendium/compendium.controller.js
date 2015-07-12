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
                    "name":"Aeron Greyjoy (Damphair)",
                    "theories": [
                        {
                            "name":"Aeron is going to rally the ironborn on Great Wyk against Euron.",
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
                        {
                            "name":"Cersei pushed Melara down the well.",
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
                {
                    "name":"Daario Naharis",
                    "theories":[
                        {
                            "name":"Daario is Euron.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55985436afdac34f694cf15f",
                                    "number":"1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name":"Daemon I Blackfyre",
                    "theories":[
                        {
                            "name":"Daemon is the true Targaryen heir.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a13f0aafdac37b9cdc729a",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Daenerys Targaryen",
                    "theories":[
                        {
                            "name":"Dany will take control of Khal Jhaqo's horde.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a143c8afdac37bc2120fb8",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Dany will marry Euron.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a1418cafdac37bae6f89a3",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Dany will marry Jon Snow.",
                        },
                        {
                            "name":"Dany's house with the red door is in Oldtown.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55988317afdac35b1c166460",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Dany's house with the red door is in the Water Gardens.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c5369afdac33f0450399f",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Dany's betrayal for love will be Ser Barristan.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a141fcafdac37bb7487ffd",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Domeric Bolton",
                    "theories":[
                        {
                            "name":"Domeric wasn't killed by Ramsay.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a149f1afdac37bd34103b0",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Drogo",
                    "theories":[
                        {
                            "name":"Drogo's blood hatched the dragons.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a14c02afdac37bdd1e47a8",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Eddard Stark (Ned)",
                    "theories":[
                        {
                            "name":"Ned performed a Caesarean section on Lyanna.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a14f0aafdac37c67cd4b8a",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Eddison Tollett (Dolorous Edd)",
                    "theories":[
                        {
                            "name":"Dolorous Edd is cursed.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a158c2afdac37c8303a3bc",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Edmure Tully",
                    "theories":[
                        {
                            "name":"Edmure hates Tom O' Seven Strings.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a159d6afdac37c8cad55f5",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Euron Greyjoy (the Crow's Eye)",
                    "theories":[
                        {
                            "name":"Euron molested Aeron (Damphair).",
                        },
                        {
                            "name":"Euron is baiting the Redwyne fleet into a trap.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55995cedafdac3701691812d",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Euron hired a faceless man to kill Balon.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559cacdaafdac346e4df257e",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Euron is the Corsair King.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599a5c7afdac3785c36e6e0",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Euron's Silence is made out of weirwood.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a162beafdac37d28df4dd1",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Euron killed Gerion Lannister",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599a41dafdac377d9aecf0b",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Euron is attempting to ally with the Faceless Men.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55a159d6afdac37c8cad55f5",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Galazza Galare (the Green Grace)",
                    "theories":[
                        {
                            "name":"The Green Grace is the Harpy.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559c87d3afdac34636ee7eff",
                                    "number":"1"
                                },
                                {
                                    "url":"writeup/id/559985ceafdac37492b2a489",
                                    "number":"2"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Gendry",
                    "theories":[
                        {
                            "name":"Gendry learned how to reforge Valyrian steel from Tobho Mott.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5599939aafdac375b67d40e3",
                                    "number":"1"
                                },
                            ]
                        },
                        {
                            "name":"Gendry will be the hammer of the waters.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55986df5afdac35734dd62c6",
                                    "number":"1"
                                },
                            ]
                        },
                        {
                            "name":"Gendry is the future of house Baratheon.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55987ab8afdac359bbffef5e",
                                    "number":"1"
                                },
                            ]
                        },
                        {
                            "name":"Gendry will use Robert's warhammmer. ",
                        },
                    ]
                },
                {
                    "name":"Gerold Dayne (Darkstar)",
                    "theories":[
                        {
                            "name":"Darkstar is working for Doran.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559bdf49afdac33bc219c8c8",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Gerris Drinkwater",
                    "theories":[
                        {
                            "name":"Gerris is lying about what happened to Quentyn.",
                        },
                    ]
                },
                {
                    "name":"Ghost of High Heart",
                    "theories":[
                        {
                            "name":"The Ghost of High Heart was the woodswitch that was friends with Jenny of Oldstones.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559960c1afdac3710771cc9d",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"The Ghost of High Heart is a child of the forest.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/559950eeafdac36e80cd1d0a",
                                    "number":"1"
                                }
                            ]
                        },
                    ]
                },
                {
                    "name":"Gregor Clegane (the Mountain)",
                    "theories":[
                        {
                            "name":"Gregor is Ser Robert Strong.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/5595b61dafdac30685ebc474",
                                    "number":"1"
                                }
                            ]
                        },
                        {
                            "name":"Ser Robert Strong will fight the Hound.",
                            "hrefs":[
                                {
                                    "url":"writeup/id/55994a2dafdac36e266e54b6",
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
