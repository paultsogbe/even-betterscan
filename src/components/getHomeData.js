export const COLLECTION_CHUNK = 10;
export const TOKEN_CHUNK = 50;

export function getHomeData() {
    return Promise.resolve({
        extensionBar: {
            isExtensionInstalled: false,
        },

        topBar: {
            language: [
                "fr-FR",
                "English",
                "polski",
                "中文",
                "日本語",
                "Deutsch",
                "Francais",
                "Deutsch",
                "Español",
                "Русский",
                "Português",
            ],
        },

        stats: {
            ethPrice: "1 600 $", // in $
            averageTransactionFee: "0. 5 $", // in $ cents
            gazPrice: " (15gwei)", // in GWEI
            lastBlock: "1 650 500",
            lastBlockTime: "2023-02-22T11:00:33.793Z",
            emission: "-1.13", // in ETH/min
            maxEmissionScale: 2.5,
        },
        collectionsFirstChunk: {
            byTrend: [
                {
                    imgUrl: "https://i.seadn.io/gcs/files/9a2e372bbda133246295543f3633a949.jpg?auto=format&dpr=1&w=256",
                    name: " Monkey Ape",
                    floorPrice: 9800000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/JjzAmt556x6BY_Cgy6mUH26UDrhFrHQLcFbEVdCU01V2WKqaKQl-G-wJ7Vj8xsvTw2kVLsdR7eCqoScguPEUwAN3KUHUwm-ZrtuF6w?auto=format&dpr=1&w=384",
                    name: "Moon fall",
                    floorPrice: 1000000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/lhGu0apzMSfQwijQu7CqXvnFO1LqVf7Hku8xljtyHFSY4ufzLOGDA3LX9ahnm4O3RuLxB8FsfThfnpKiG6uUEOmxF7oaXnvyp1RiPbs?auto=format&dpr=1&w=1000",
                    name: "Monkey Sun",
                    floorPrice: 57000000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/47010146d8d22127d24d1aa0bf32a1eb.jpg?auto=format&dpr=1&w=1000",
                    name: "Wired Human",
                    floorPrice: 80000000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/e26686121be2c6beaa01de5895736a2c.png?auto=format&w=1000",
                    name: "Paint girl",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/rw0EgUZecZ7Z8XsGr76Fr8vG_TuK53gY3V8T7kwfoYzCKzVSNVZagFOcHQvqaiu6FQYTUUNJR2SgWetzlaWnfnfmneDPU2Uq5qJUMQ?auto=format&dpr=1&w=1000",
                    name: "Race-To-Go",
                    floorPrice: 7100000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/GfPAPMX_Nl_hj-i0kC57QItUJu2_YmorVZpjyY5GB7n14Z_VxAs6fEszWbAD0zIgVb1mdA24UVzwjfQJX5gQAm2CqJnbyUCwmAsHtw?auto=format&dpr=1&w=256",
                    name: " Girlies NFT",
                    floorPrice: 14900000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/l2yU9czv-mF0mxIxQ2KolM99m6cdiAxQn3fjVnEIYReYe1IzzD_MDkOF1klfyeI3MYi3Kb6xfa67T-cBX23eziqKNe8AiMhDWgso?auto=format&dpr=1&w=384",
                    name: "Monkey king Sun Wukong",
                    floorPrice: 100000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/EPIWT9QicYKA5EZ9tejy_xQ31bEgvWhIxKk8pJSj1wTE7Aky5Pq1IH1SteDdXcVaFCau-tDafWMFgZ2wfOtc1ipB10sdyDZH-2WG?auto=format&dpr=1&w=1000",
                    name: "The Black Girl NFT",
                    floorPrice: 2500000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/10579216d77a7580dd8cf08db689324f.jpg?auto=format&w=1000",
                    name: "Uncle Seize",
                    floorPrice: 63900000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/IMdCkRdMeq9RX2SicFa_dFGH92cZXN7BDnysUmh3Y_5CFU4ffOesYYGNvL1lk_TW8RwbzUacM8DV1RsqWmAT_y9-xHEz728IgKm5cqQ?auto=format&w=1000",
                    name: "Astro Monkey King #31",
                    floorPrice: 900000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c906380faa8f7f348ce2304601336a25.jpg?auto=format&w=1000",
                    name: "Painted Flower Girl#8",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fc0047a5c769cea34ffd09408d17d507.png?auto=format&w=1000",
                    name: "MoonFall",
                    floorPrice: 400000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/sc_lFfsrWhJzx4NLqUlwZqgRTQOduGBWT4UxhcQGPxr-u56ZJoaIDma2b3UyJablqCJCZXWIPVdal7bAvFm9PKZtPy3E3utrJ24N5w?auto=format&w=384",
                    name: "PaintxGirls #24",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/l2yU9czv-mF0mxIxQ2KolM99m6cdiAxQn3fjVnEIYReYe1IzzD_MDkOF1klfyeI3MYi3Kb6xfa67T-cBX23eziqKNe8AiMhDWgso?auto=format&w=384",
                    name: "Monkey king Sun Wukong",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bfef8aabb9179111efbbb2044fe51736.png?auto=format&w=1000",
                    name: "DeGod #7122",
                    floorPrice: 115000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yF358tbb-TwWfAqV687kyL0hau8rn-EAb1DynmjbjOd0efwCA-cidLV8r5cDCrj4YjAsjdHc3HYXUG3nvq5E3Wuh14QYE0XKDpth?auto=format&w=1000",
                    name: "Unhuman",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/ShXZN8tRoebtz50ObKu17mdsXy4fpvEE77-bA4J4XmLasTJs9YacH47EzrA0GBxhUTMmCAePXTTbbGwMmecVbMQ8ZxCioU0v9e3ZkA?auto=format&w=1000",
                    name: "Astro Monkey King #80",
                    floorPrice: 900000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FKs29aVef0171DhtSkPgbr3xofRfe8FRUinSmcNONFapnqYdhgpuoxRrkx3EyDCZGZZiTK8veRaU93zg_nr797cGl8zv1eDh_suO6g?auto=format&w=1000",
                    name: "Wired Fashionista",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/_1tWS4klvg8POMRslhQ-r9kttLUlxATJyYWYQG_HVLxR0bn3VLgXG_wuMVz1CGTrNqtJQ5mzgG5hpcc8agDHojMbNTW5AVZZy6U_xbU?auto=format&w=1000",
                    name: "paint girl",
                    floorPrice: 40000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/k6rXbJJWiBdRlnDj1FmtBh0DPAHb3XTAIHcf6rt-fkPAsoYFZMNVTyKPSxfFEqGWVBb7z2EjYfLAuSrKckxgSkPcmWn2Bcktv8jh2Q?auto=format&w=1000",
                    name: "Off to the races",
                    floorPrice: 10000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/s/production/2aef4903-b79a-4837-aea0-9e0253d1f1b5.png?w=500&auto=format",
                    name: "DeGods",
                    floorPrice: 850000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/28a5879d8cbd9cefa4e3c88061d430c9.png?auto=format&w=1000",
                    name: "DeGod #5610",
                    floorPrice: 89000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/bH7Hqqi3WeKhwub7vnVOxdd9JFyK-qNIAfgvaDeRrDa-TOoQIlateBWcZmfqLRADxI2TMvYfpR2C3dkYCCusSy1hXIpT4uM7H-iE8A?auto=format&w=500&h=500",
                    name: "Snoop Dogg on Sound XYZ",
                    floorPrice: 3000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dedd567b6a97259aa6444777939a7d41.jpg?auto=format&w=256",
                    name: "Omnimorphs",
                    floorPrice: 249000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/mWWlvYxQhV36qyVoDfBIHd70qc_wPQ-cnCvRTllceCgidhLUHwQDbzfkDrGBGyr5WII5p2BXmxUYohGwZYu6YQmGDppNhSjjGN7F6g?auto=format&w=256",
                    name: "WORK PLAY EAT & PRAY - An Ode to Asia",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2c011e8ea2da88a624e4b73bae8beb8e.gif?auto=format&w=256",
                    name: "Rorschach's",
                    floorPrice: 8000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Jngha-aFUJh72GycQvzetxPcV-Q459pbX_yaE7Te9lHLCrbNDgeuCARD079Al7VhHYnN2nwueDscSrdTasxRD8RPKVn73rDJrQSgIQ?auto=format&w=1000",
                    name: "Girl with a box",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0UCPT-S3xYewIpFboWsOEiMVRjo_xVeGIVpoCQV18N9dRwgPxLlRptmfQDRcC2P8shuQVu9v9ajeOEH7HgbOiGZkPmKIU-Ry5zC5bA?auto=format&w=384",
                    name: "PaintxGirls #12",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3af0df69192f0fc8fbaf3996274b248.png?auto=format&w=256",
                    name: " Painted women AI",
                    floorPrice: 100000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Val1DZKwKpwU-jOABSUiDi2wUyAYQaoZqmW2jHlkZAS0Q86MhkmMA2cNJv-nbX1tb_6NQl3Czmfs8FJO3Eml-yJ8fDLT5vlC3Qm5?auto=format&w=1000",
                    name: "Beautiful Sexy Girl",
                    floorPrice: 10000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/rnAoDTVXe4NK9iJJY5KouI2kI4k1Mmi3jFd5jSIViJ0P_piZWOJzAHUMaV53_ziiDUyEkYjXLHCxp_6WuaQHBG7sjr10hhL6hiZE?auto=format&w=1000",
                    name: "Attractive Girl",
                    floorPrice: 10000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/ipAyQg6Xlgvwxma0Qp0a1gqdsZepRvHR4ZLsPN3mOFvIR1aznNiWFEgba2gcVqQwJS5BoJilLPrA2DRq2DVOnwKc3tDovmEdjR4qb-0?auto=format&w=256",
                    name: "PROOF Collective",
                    floorPrice: 14597900000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/8EGVWfGMwaUCdJrCU5MI2pBMTTyOmxlhVmtAbJYz0CEnyFdm6kgdS9aAWqpY4CHLlXITzynNTk234oNQlxbuGxFX?auto=format&w=1000",
                    name: "DeepBlack #5101",
                    floorPrice: 2910000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/w0vZ23rwTf5mnbvRO4FViE0lFhrNlW3Z3yq690AxN9q0Rh0Zs6aaYtFAEFOyCjNoa9-w0Nya9Qdit2d1rTe1SuireG_F9D5S45Upo40?auto=format&w=384",
                    name: "wired Humane",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },

                // ----------------------------------------------------------------
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                    name: "A Punk In A CROWD",
                    floorPrice: 4000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                    name: "MadBalls",
                    floorPrice: 1345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                    name: "The News",
                    floorPrice: 195000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                    name: "Vintage Vibes",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                    name: "Beramonium Chronicles: Genesis",
                    floorPrice: 496000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                    name: "OnChainBandits",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                    name: "Savage Nation",
                    floorPrice: 69000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                    name: "Mayfair Witches Pass",
                    floorPrice: 325000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                    name: "Checks - VV Originals",
                    floorPrice: 9478000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                    name: "Beep Boop Battery",
                    floorPrice: 87000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                    name: "Bowels",
                    floorPrice: 190000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                    name: " AppliedPrimate Allegiance Pass",

                    floorPrice: 20000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                    name: "McPepe's",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                    name: "Beep Boop Toolbox",

                    floorPrice: 11000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                    name: "Khuga by Khuga Labs",
                    floorPrice: 479000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                    name: "Notable Pepes",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                    name: "Ghost Boy",
                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/pkxkdeDZjzxZOUlBkM8dhDzjy3QBSuhdy9C-_VfUqBd2VXW3EWkJ0c_cp1PPcfLTLGQRDcZATqYh0kHprQ5ODrRDFLlMDOO2LUzW?auto=format&w=384",
                    name: "Sesy Girls painted",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                    name: " Little Tinas Fantasy",

                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                    name: "Ordinal Kubz",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                    name: "Pudgy Rods",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                    name: "Moonbirds Oddities",
                    floorPrice: 7645000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                    name: "goodboiborzoi",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                    name: "Hoshiboshi Aries",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 215000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                    name: "Super PUMA",
                    floorPrice: 1599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                    name: "Kubz Relic",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                    name: "MERGE VV",
                    floorPrice: 399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                    name: "Moonie Moo Genesis",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                    name: "The Ordinal War",
                    floorPrice: 107000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                    name: "IROIRO",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                    name: "Honey Comb",
                    floorPrice: 703000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                    name: "MoonQuacks",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                    name: "Memo Angeles Presents: The Killa Chronicles",
                    floorPrice: 389000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                    name: "Chungos",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                    name: "JOMOHippo",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                    name: "Dream Girls | By Kyu Yong Eom",
                    floorPrice: 294000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                    name: "Base, Introduced",
                    floorPrice: 29000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                    name: "Cells",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                    name: "MISTFITS PROJECT",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                    name: "FOOD FOR DEGENS",
                    floorPrice: 109000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 445000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 56789000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                    name: "The Captainz",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                    name: "Urbit ID: Galaxy",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                    name: "Terraforms by Mathcastles",
                    floorPrice: 232000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                    name: "KILLABEARS",
                    floorPrice: 3469000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                    name: "Kanpai Pandas",
                    floorPrice: 193000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                    name: "Alpha Prestige - Fusionist",
                    floorPrice: 72000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                    name: "The Potatoz",
                    floorPrice: 229000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 5099000000000000000, // WEI
                    currency: "ETH",
                },
                // -------15---------------------------------------------------------------------

                // REPEAT

                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/A5nAj6MPasM20z0KcEpAIQz4Fw8H70X9aQ_BH6r4aJNcG6-StYreJNnh1XDNsCjab4__bPL8_HEgfkzAV4agOmjpn7ppgyn6-Eyr?auto=format&w=384",
                    name: "sexy Girls painted",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },

                // ----------------------------------------------------------------
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                    name: "A Punk In A CROWD",
                    floorPrice: 4000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                    name: "MadBalls",
                    floorPrice: 1345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                    name: "The News",
                    floorPrice: 195000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                    name: "Vintage Vibes",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                    name: "Beramonium Chronicles: Genesis",
                    floorPrice: 496000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                    name: "OnChainBandits",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                    name: "Savage Nation",
                    floorPrice: 69000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                    name: "Mayfair Witches Pass",
                    floorPrice: 325000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                    name: "Checks - VV Originals",
                    floorPrice: 9478000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                    name: "Beep Boop Battery",
                    floorPrice: 87000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                    name: "Bowels",
                    floorPrice: 190000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                    name: " AppliedPrimate Allegiance Pass",

                    floorPrice: 20000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                    name: "McPepe's",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                    name: "Beep Boop Toolbox",

                    floorPrice: 11000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                    name: "Khuga by Khuga Labs",
                    floorPrice: 479000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                    name: "Notable Pepes",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                    name: "Ghost Boy",
                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                    name: " Little Tinas Fantasy",

                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                    name: "Ordinal Kubz",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                    name: "Pudgy Rods",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                    name: "Moonbirds Oddities",
                    floorPrice: 7645000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                    name: "goodboiborzoi",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                    name: "Hoshiboshi Aries",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 215000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                    name: "Super PUMA",
                    floorPrice: 1599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                    name: "Kubz Relic",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                    name: "MERGE VV",
                    floorPrice: 399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                    name: "Moonie Moo Genesis",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                    name: "The Ordinal War",
                    floorPrice: 107000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                    name: "IROIRO",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                    name: "Honey Comb",
                    floorPrice: 703000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                    name: "MoonQuacks",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                    name: "Memo Angeles Presents: The Killa Chronicles",
                    floorPrice: 389000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                    name: "Chungos",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                    name: "JOMOHippo",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                    name: "Dream Girls | By Kyu Yong Eom",
                    floorPrice: 294000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                    name: "Base, Introduced",
                    floorPrice: 29000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                    name: "Cells",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                    name: "MISTFITS PROJECT",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                    name: "FOOD FOR DEGENS",
                    floorPrice: 109000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 445000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 56789000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                    name: "The Captainz",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                    name: "Urbit ID: Galaxy",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                    name: "Terraforms by Mathcastles",
                    floorPrice: 232000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                    name: "KILLABEARS",
                    floorPrice: 3469000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                    name: "Kanpai Pandas",
                    floorPrice: 193000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                    name: "Alpha Prestige - Fusionist",
                    floorPrice: 72000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                    name: "The Potatoz",
                    floorPrice: 229000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 5099000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },

                // ----------------------------------------------------------------
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                    name: "A Punk In A CROWD",
                    floorPrice: 4000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                    name: "MadBalls",
                    floorPrice: 1345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                    name: "The News",
                    floorPrice: 195000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                    name: "Vintage Vibes",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                    name: "Beramonium Chronicles: Genesis",
                    floorPrice: 496000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                    name: "OnChainBandits",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                    name: "Savage Nation",
                    floorPrice: 69000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                    name: "Mayfair Witches Pass",
                    floorPrice: 325000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                    name: "Checks - VV Originals",
                    floorPrice: 9478000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                    name: "Beep Boop Battery",
                    floorPrice: 87000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                    name: "Bowels",
                    floorPrice: 190000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                    name: " AppliedPrimate Allegiance Pass",

                    floorPrice: 20000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                    name: "McPepe's",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                    name: "Beep Boop Toolbox",

                    floorPrice: 11000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                    name: "Khuga by Khuga Labs",
                    floorPrice: 479000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                    name: "Notable Pepes",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                    name: "Ghost Boy",
                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                    name: " Little Tinas Fantasy",

                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                    name: "Ordinal Kubz",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                    name: "Pudgy Rods",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                    name: "Moonbirds Oddities",
                    floorPrice: 7645000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                    name: "goodboiborzoi",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                    name: "Hoshiboshi Aries",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 215000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                    name: "Super PUMA",
                    floorPrice: 1599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                    name: "Kubz Relic",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                    name: "MERGE VV",
                    floorPrice: 399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                    name: "Moonie Moo Genesis",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                    name: "The Ordinal War",
                    floorPrice: 107000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                    name: "IROIRO",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                    name: "Honey Comb",
                    floorPrice: 703000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                    name: "MoonQuacks",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                    name: "Memo Angeles Presents: The Killa Chronicles",
                    floorPrice: 389000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                    name: "Chungos",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                    name: "JOMOHippo",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                    name: "Dream Girls | By Kyu Yong Eom",
                    floorPrice: 294000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                    name: "Base, Introduced",
                    floorPrice: 29000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                    name: "Cells",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                    name: "MISTFITS PROJECT",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                    name: "FOOD FOR DEGENS",
                    floorPrice: 109000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 445000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 56789000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                    name: "The Captainz",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                    name: "Urbit ID: Galaxy",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                    name: "Terraforms by Mathcastles",
                    floorPrice: 232000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                    name: "KILLABEARS",
                    floorPrice: 3469000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                    name: "Kanpai Pandas",
                    floorPrice: 193000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                    name: "Alpha Prestige - Fusionist",
                    floorPrice: 72000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                    name: "The Potatoz",
                    floorPrice: 229000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 5099000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },

                // ----------------------------------------------------------------
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                    name: "A Punk In A CROWD",
                    floorPrice: 4000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                    name: "MadBalls",
                    floorPrice: 1345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                    name: "The News",
                    floorPrice: 195000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                    name: "Vintage Vibes",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                    name: "Beramonium Chronicles: Genesis",
                    floorPrice: 496000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                    name: "OnChainBandits",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                    name: "Savage Nation",
                    floorPrice: 69000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                    name: "Mayfair Witches Pass",
                    floorPrice: 325000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                    name: "Checks - VV Originals",
                    floorPrice: 9478000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                    name: "Beep Boop Battery",
                    floorPrice: 87000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                    name: "Bowels",
                    floorPrice: 190000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                    name: " AppliedPrimate Allegiance Pass",

                    floorPrice: 20000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                    name: "McPepe's",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                    name: "Beep Boop Toolbox",

                    floorPrice: 11000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                    name: "Khuga by Khuga Labs",
                    floorPrice: 479000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                    name: "Notable Pepes",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                    name: "Ghost Boy",
                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                    name: " Little Tinas Fantasy",

                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                    name: "Ordinal Kubz",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                    name: "Pudgy Rods",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                    name: "Moonbirds Oddities",
                    floorPrice: 7645000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                    name: "goodboiborzoi",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                    name: "Hoshiboshi Aries",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 215000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                    name: "Super PUMA",
                    floorPrice: 1599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                    name: "Kubz Relic",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                    name: "MERGE VV",
                    floorPrice: 399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                    name: "Moonie Moo Genesis",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                    name: "The Ordinal War",
                    floorPrice: 107000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                    name: "IROIRO",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                    name: "Honey Comb",
                    floorPrice: 703000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                    name: "MoonQuacks",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                    name: "Memo Angeles Presents: The Killa Chronicles",
                    floorPrice: 389000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                    name: "Chungos",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                    name: "JOMOHippo",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                    name: "Dream Girls | By Kyu Yong Eom",
                    floorPrice: 294000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                    name: "Base, Introduced",
                    floorPrice: 29000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                    name: "Cells",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                    name: "MISTFITS PROJECT",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                    name: "FOOD FOR DEGENS",
                    floorPrice: 109000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 445000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 56789000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                    name: "The Captainz",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                    name: "Urbit ID: Galaxy",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                    name: "Terraforms by Mathcastles",
                    floorPrice: 232000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                    name: "KILLABEARS",
                    floorPrice: 3469000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                    name: "Kanpai Pandas",
                    floorPrice: 193000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                    name: "Alpha Prestige - Fusionist",
                    floorPrice: 72000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                    name: "The Potatoz",
                    floorPrice: 229000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 5099000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },

                // ----------------------------------------------------------------
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                    name: "A Punk In A CROWD",
                    floorPrice: 4000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                    name: "MadBalls",
                    floorPrice: 1345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                    name: "The News",
                    floorPrice: 195000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                    name: "Vintage Vibes",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                    name: "Beramonium Chronicles: Genesis",
                    floorPrice: 496000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                    name: "OnChainBandits",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                    name: "Savage Nation",
                    floorPrice: 69000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                    name: "Mayfair Witches Pass",
                    floorPrice: 325000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                    name: "Checks - VV Originals",
                    floorPrice: 9478000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                    name: "Beep Boop Battery",
                    floorPrice: 87000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                    name: "Bowels",
                    floorPrice: 190000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                    name: " AppliedPrimate Allegiance Pass",

                    floorPrice: 20000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                    name: "McPepe's",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                    name: "Beep Boop Toolbox",

                    floorPrice: 11000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                    name: "Khuga by Khuga Labs",
                    floorPrice: 479000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                    name: "Notable Pepes",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                    name: "Ghost Boy",
                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                    name: " Little Tinas Fantasy",

                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                    name: "Ordinal Kubz",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                    name: "Pudgy Rods",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                    name: "Moonbirds Oddities",
                    floorPrice: 7645000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                    name: "goodboiborzoi",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                    name: "Hoshiboshi Aries",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 215000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                    name: "Super PUMA",
                    floorPrice: 1599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                    name: "Kubz Relic",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                    name: "MERGE VV",
                    floorPrice: 399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                    name: "Moonie Moo Genesis",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                    name: "The Ordinal War",
                    floorPrice: 107000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                    name: "IROIRO",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                    name: "Honey Comb",
                    floorPrice: 703000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                    name: "MoonQuacks",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                    name: "Memo Angeles Presents: The Killa Chronicles",
                    floorPrice: 389000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                    name: "Chungos",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                    name: "JOMOHippo",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                    name: "Dream Girls | By Kyu Yong Eom",
                    floorPrice: 294000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                    name: "Base, Introduced",
                    floorPrice: 29000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                    name: "Cells",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                    name: "MISTFITS PROJECT",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                    name: "FOOD FOR DEGENS",
                    floorPrice: 109000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 445000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 56789000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                    name: "The Captainz",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                    name: "Urbit ID: Galaxy",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                    name: "Terraforms by Mathcastles",
                    floorPrice: 232000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                    name: "KILLABEARS",
                    floorPrice: 3469000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                    name: "Kanpai Pandas",
                    floorPrice: 193000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                    name: "Alpha Prestige - Fusionist",
                    floorPrice: 72000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                    name: "The Potatoz",
                    floorPrice: 229000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 5099000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },

                // ----------------------------------------------------------------
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                    name: "A Punk In A CROWD",
                    floorPrice: 4000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                    name: "MadBalls",
                    floorPrice: 1345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                    name: "The News",
                    floorPrice: 195000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                    name: "Vintage Vibes",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                    name: "Beramonium Chronicles: Genesis",
                    floorPrice: 496000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                    name: "OnChainBandits",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                    name: "Savage Nation",
                    floorPrice: 69000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                    name: "Mayfair Witches Pass",
                    floorPrice: 325000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                    name: "Checks - VV Originals",
                    floorPrice: 9478000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                    name: "Beep Boop Battery",
                    floorPrice: 87000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                    name: "Bowels",
                    floorPrice: 190000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                    name: " AppliedPrimate Allegiance Pass",

                    floorPrice: 20000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                    name: "McPepe's",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                    name: "Beep Boop Toolbox",

                    floorPrice: 11000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                    name: "Khuga by Khuga Labs",
                    floorPrice: 479000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                    name: "Notable Pepes",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                    name: "Ghost Boy",
                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                    name: " Little Tinas Fantasy",

                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                    name: "Ordinal Kubz",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                    name: "Pudgy Rods",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                    name: "Moonbirds Oddities",
                    floorPrice: 7645000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                    name: "goodboiborzoi",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                    name: "Hoshiboshi Aries",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 215000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                    name: "Super PUMA",
                    floorPrice: 1599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                    name: "Kubz Relic",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                    name: "MERGE VV",
                    floorPrice: 399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                    name: "Moonie Moo Genesis",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                    name: "The Ordinal War",
                    floorPrice: 107000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                    name: "IROIRO",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                    name: "Honey Comb",
                    floorPrice: 703000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                    name: "MoonQuacks",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                    name: "Memo Angeles Presents: The Killa Chronicles",
                    floorPrice: 389000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                    name: "Chungos",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                    name: "JOMOHippo",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                    name: "Dream Girls | By Kyu Yong Eom",
                    floorPrice: 294000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                    name: "Base, Introduced",
                    floorPrice: 29000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                    name: "Cells",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                    name: "MISTFITS PROJECT",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                    name: "FOOD FOR DEGENS",
                    floorPrice: 109000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 445000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 56789000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                    name: "The Captainz",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                    name: "Urbit ID: Galaxy",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                    name: "Terraforms by Mathcastles",
                    floorPrice: 232000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                    name: "KILLABEARS",
                    floorPrice: 3469000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                    name: "Kanpai Pandas",
                    floorPrice: 193000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                    name: "Alpha Prestige - Fusionist",
                    floorPrice: 72000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                    name: "The Potatoz",
                    floorPrice: 229000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 5099000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },

                // ----------------------------------------------------------------
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                    name: "A Punk In A CROWD",
                    floorPrice: 4000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                    name: "MadBalls",
                    floorPrice: 1345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                    name: "The News",
                    floorPrice: 195000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                    name: "Vintage Vibes",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                    name: "Beramonium Chronicles: Genesis",
                    floorPrice: 496000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                    name: "OnChainBandits",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                    name: "Savage Nation",
                    floorPrice: 69000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                    name: "Mayfair Witches Pass",
                    floorPrice: 325000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                    name: "Checks - VV Originals",
                    floorPrice: 9478000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                    name: "Beep Boop Battery",
                    floorPrice: 87000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                    name: "Bowels",
                    floorPrice: 190000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                    name: " AppliedPrimate Allegiance Pass",

                    floorPrice: 20000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                    name: "McPepe's",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                    name: "Beep Boop Toolbox",

                    floorPrice: 11000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                    name: "Khuga by Khuga Labs",
                    floorPrice: 479000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                    name: "Notable Pepes",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                    name: "Ghost Boy",
                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                    name: " Little Tinas Fantasy",

                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                    name: "Ordinal Kubz",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                    name: "Pudgy Rods",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                    name: "Moonbirds Oddities",
                    floorPrice: 7645000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                    name: "goodboiborzoi",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                    name: "Hoshiboshi Aries",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 215000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                    name: "Super PUMA",
                    floorPrice: 1599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                    name: "Kubz Relic",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                    name: "MERGE VV",
                    floorPrice: 399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                    name: "Moonie Moo Genesis",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                    name: "The Ordinal War",
                    floorPrice: 107000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                    name: "IROIRO",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                    name: "Honey Comb",
                    floorPrice: 703000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                    name: "MoonQuacks",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                    name: "Memo Angeles Presents: The Killa Chronicles",
                    floorPrice: 389000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                    name: "Chungos",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                    name: "JOMOHippo",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                    name: "Dream Girls | By Kyu Yong Eom",
                    floorPrice: 294000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                    name: "Base, Introduced",
                    floorPrice: 29000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                    name: "Cells",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                    name: "MISTFITS PROJECT",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                    name: "FOOD FOR DEGENS",
                    floorPrice: 109000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 445000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 56789000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                    name: "The Captainz",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                    name: "Urbit ID: Galaxy",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                    name: "Terraforms by Mathcastles",
                    floorPrice: 232000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                    name: "KILLABEARS",
                    floorPrice: 3469000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                    name: "Kanpai Pandas",
                    floorPrice: 193000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                    name: "Alpha Prestige - Fusionist",
                    floorPrice: 72000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                    name: "The Potatoz",
                    floorPrice: 229000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 5099000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },

                // ----------------------------------------------------------------
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                    name: "A Punk In A CROWD",
                    floorPrice: 4000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                    name: "MadBalls",
                    floorPrice: 1345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                    name: "The News",
                    floorPrice: 195000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                    name: "Vintage Vibes",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                    name: "Beramonium Chronicles: Genesis",
                    floorPrice: 496000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                    name: "OnChainBandits",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                    name: "Savage Nation",
                    floorPrice: 69000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                    name: "Mayfair Witches Pass",
                    floorPrice: 325000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                    name: "Checks - VV Originals",
                    floorPrice: 9478000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                    name: "Beep Boop Battery",
                    floorPrice: 87000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                    name: "Bowels",
                    floorPrice: 190000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                    name: " AppliedPrimate Allegiance Pass",

                    floorPrice: 20000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                    name: "McPepe's",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                    name: "Beep Boop Toolbox",

                    floorPrice: 11000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                    name: "Khuga by Khuga Labs",
                    floorPrice: 479000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                    name: "Notable Pepes",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                    name: "Ghost Boy",
                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                    name: " Little Tinas Fantasy",

                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                    name: "Ordinal Kubz",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                    name: "Pudgy Rods",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                    name: "Moonbirds Oddities",
                    floorPrice: 7645000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                    name: "goodboiborzoi",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                    name: "Hoshiboshi Aries",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 215000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                    name: "Super PUMA",
                    floorPrice: 1599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                    name: "Kubz Relic",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                    name: "MERGE VV",
                    floorPrice: 399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                    name: "Moonie Moo Genesis",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                    name: "The Ordinal War",
                    floorPrice: 107000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                    name: "IROIRO",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                    name: "Honey Comb",
                    floorPrice: 703000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                    name: "MoonQuacks",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                    name: "Memo Angeles Presents: The Killa Chronicles",
                    floorPrice: 389000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                    name: "Chungos",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                    name: "JOMOHippo",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                    name: "Dream Girls | By Kyu Yong Eom",
                    floorPrice: 294000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                    name: "Base, Introduced",
                    floorPrice: 29000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                    name: "Cells",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                    name: "MISTFITS PROJECT",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                    name: "FOOD FOR DEGENS",
                    floorPrice: 109000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 445000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 56789000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                    name: "The Captainz",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                    name: "Urbit ID: Galaxy",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                    name: "Terraforms by Mathcastles",
                    floorPrice: 232000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                    name: "KILLABEARS",
                    floorPrice: 3469000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                    name: "Kanpai Pandas",
                    floorPrice: 193000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                    name: "Alpha Prestige - Fusionist",
                    floorPrice: 72000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                    name: "The Potatoz",
                    floorPrice: 229000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 5099000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },

                // ----------------------------------------------------------------
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                    name: "A Punk In A CROWD",
                    floorPrice: 4000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                    name: "MadBalls",
                    floorPrice: 1345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                    name: "The News",
                    floorPrice: 195000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                    name: "Vintage Vibes",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                    name: "Beramonium Chronicles: Genesis",
                    floorPrice: 496000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                    name: "OnChainBandits",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                    name: "Savage Nation",
                    floorPrice: 69000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                    name: "Mayfair Witches Pass",
                    floorPrice: 325000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                    name: "Checks - VV Originals",
                    floorPrice: 9478000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                    name: "Beep Boop Battery",
                    floorPrice: 87000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                    name: "Bowels",
                    floorPrice: 190000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                    name: " AppliedPrimate Allegiance Pass",

                    floorPrice: 20000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                    name: "McPepe's",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                    name: "Beep Boop Toolbox",

                    floorPrice: 11000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                    name: "Khuga by Khuga Labs",
                    floorPrice: 479000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                    name: "Notable Pepes",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                    name: "Ghost Boy",
                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                    name: " Little Tinas Fantasy",

                    floorPrice: 95000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                    name: "Ordinal Kubz",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                    name: "Pudgy Rods",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                    name: "Moonbirds Oddities",
                    floorPrice: 7645000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                    name: "goodboiborzoi",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                    name: "Hoshiboshi Aries",
                    floorPrice: 7000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 215000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                    name: "Super PUMA",
                    floorPrice: 1599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                    name: "Kubz Relic",
                    floorPrice: 169000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                    name: "MERGE VV",
                    floorPrice: 399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                    name: "Moonie Moo Genesis",
                    floorPrice: 45000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                    name: "The Ordinal War",
                    floorPrice: 107000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                    name: "IROIRO",
                    floorPrice: 105000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                    name: "Honey Comb",
                    floorPrice: 703000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                    name: "MoonQuacks",
                    floorPrice: 64000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                    name: "Memo Angeles Presents: The Killa Chronicles",
                    floorPrice: 389000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                    name: "Chungos",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                    name: "JOMOHippo",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                    name: "Dream Girls | By Kyu Yong Eom",
                    floorPrice: 294000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                    name: "Base, Introduced",
                    floorPrice: 29000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                    name: "Cells",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                    name: "MISTFITS PROJECT",
                    floorPrice: 19000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                    name: "FOOD FOR DEGENS",
                    floorPrice: 109000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 445000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 56789000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                    name: "The Captainz",
                    floorPrice: 539000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                    name: "Urbit ID: Galaxy",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                    name: "Terraforms by Mathcastles",
                    floorPrice: 232000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                    name: "KILLABEARS",
                    floorPrice: 3469000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                    name: "Kanpai Pandas",
                    floorPrice: 193000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                    name: "Alpha Prestige - Fusionist",
                    floorPrice: 72000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                    name: "The Potatoz",
                    floorPrice: 229000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 5099000000000000000, // WEI
                    currency: "ETH",
                },
            ],
            // ---------OPTION 1-----------

            allTime: [
                {
                    imgUrl: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&w=256",
                    name: "CryptoPunks",
                    floorPrice: 0, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=256",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 775000000000000000, // WEI
                    currency: "ETH",
                },
                // ____________________Continuer à partir d'ici
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&w=256",
                    name: "CryptoPunks",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=256",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 775000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=256",
                    name: "Mutant Ape Yacht Club",
                    floorPrice: 16199000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1515000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg?auto=format&w=256",
                    name: "CLONE X - X TAKASHI MURAKAMI",
                    floorPrice: 15243000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75?auto=format&w=256",
                    name: "Moonbirds",
                    floorPrice: 65555000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 565000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=256",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 77000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A?auto=format&w=256",
                    name: "The Sandbox",
                    floorPrice: 843000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/hbe_-yi5K_UjPXiGj8IlxsR6ZMOy9AZs17vcCLIEbvS5Q7VaPCM7JwYmAioddCJ71rnEu_b11Dcyn2JXzhetqloLgHgnSrtJ3sRP?auto=format&w=256",
                    name: "Elemental by Fang Lijun",
                    floorPrice: 1123000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3d5365caab0a25b656daa3bfceecadb6.jpg?auto=format&w=256",
                    name: "MechMindsAI",
                    floorPrice: 699000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On?auto=format&w=256",
                    name: "BEANZ Official",
                    floorPrice: 16196000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 54999000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FG0QJ00fN3c_FWuPeUr9-T__iQl63j9hn5d6svW8UqOmia5zp3lKHPkJuHcvhZ0f_Pd6P2COo9tt9zVUvdPxG_9BBw?auto=format&w=256",
                    name: "Rarible",
                    floorPrice: 0, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/EFAQpIktMBU5SU0TqSdPWZ4byHr3hFirL_mATsR8KWhM5z-GJljX8E73V933lkyKgv2SAFlfRRjGsWvWbQQmJAwu3F2FDXVa1C9F?auto=format&w=256",
                    name: "World of Women",
                    floorPrice: 2079000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/g-NFUWjS4IGgym8PHBxyhg5-G_B4x-IHgPKRkxo00JQFE3LOd-95yU2uhrokITVmV7KHEav6OMfAhfJ4roC5hwP-0tI9dMRd9wQLdw?auto=format&w=256",
                    name: "Loot (for Adventurers)",
                    floorPrice: 559000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/iofetZEyiEIGcNyJKpbOafb_efJyeo7QOYnTog8qcQJhqoBU-Vu9l3lXidZhXOAdu6dj4fzWW6BZDU5vLseC-K03rMMu-_j2LvwcbHo?auto=format&w=256",
                    name: "CrypToadz by GREMPLIN",
                    floorPrice: 127000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gae/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ?auto=format&w=256",
                    name: "ENS: Ethereum Name Service",
                    floorPrice: 14000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY?auto=format&w=256",
                    name: "Decentraland",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0qG8Y78s198F2GZHhURw8_TEfxFlpS2XYnuLV_OW6TJin5AV1G2WOSpcLGnEmv5g2gZ6R6Pxjd4v1DP2p0bxptckM6ZJ3cMIvQmrgDM?auto=format&w=256",
                    name: "Chromie Squiggle by Snowfro",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 507000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Mf4vImKbzrJUcj7f7RZNOl9iZSEEJgkvpiUp9ugXc9dcpxFe6fvVgxYcRmTI1PnvfL_X1bD3mH4e66j6aJhqLEYm0vvpC8Jy8XJNZOI?auto=format&w=256",
                    name: "Bored Ape Chemistry Club",
                    floorPrice: 1855000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3f76da086f4bbd07d8e6cdac14e3c02f.png?auto=format&w=256",
                    name: "HAPE PRIME",
                    floorPrice: 3289000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/gp39NTyxBPazqowYV9XTFxAU4eNk1i7FlmonHW4Zr7eS9UxEvrZ7f04rOLEhDxcuGxsbUx1Rm_N6Ky_Dp4A1ZQYHFAaEWj5YdBF0qg?auto=format&w=256",
                    name: "RTFKT - MNLTH",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ae70936496054650faf8ee38a7cab5e8.png?auto=format&w=256",
                    name: "FFidenza by Tyler Hobbs",
                    floorPrice: 733000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/J2iIgy5_gmA8IS6sXGKGZeFVZwhldQylk7w7fLepTE9S7ICPCn_dlo8kypX8Ju0N6wvLVOKsbP_7bNGd8cpKmWhFQmqMXOC8q2sOdqw?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 14399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/cb_wdEAmvry_noTfeuQzhqKpghhZWQ_sEhuGS9swM03UM8QMEVJrndu0ZRdLFgGVqEPeCUzOHGTUllxug9U3xdvt0bES6VFdkRCKPqg?auto=format&w=256",
                    name: "goblintown.wtf",
                    floorPrice: 599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fb08eacd7e9c4f21303e5d771eb4a2eb.png?auto=format&w=256",
                    name: "NFT Worlds",
                    floorPrice: 13499000000000000000, // WEI
                    currency: "ETH",
                },
                // -------15-------
            ],
        },

        tokensFirstChunk: {
            byMarketCap: [
                {
                    name: "Tether USD",
                    symbol: "USDT",
                    price: 1.002,
                    holders: 4073124,
                    onChainMarketCap: 39902766084,
                    img: " https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
                },
                {
                    name: "BNB",
                    symbol: "BNB",
                    price: 310.1656,
                    holders: 302196,
                    onChainMarketCap: 5142395350,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
                },
                {
                    name: "USD Coin",
                    symbol: "USDC",
                    price: 1.003,
                    holders: 1621848,
                    onChainMarketCap: 46742238132,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
                },
                {
                    name: "OKB",
                    symbol: "OKB",
                    price: 51.8,
                    holders: 50754,
                    onChainMarketCap: 15540000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3897.png",
                },
                {
                    name: "Matic Token",
                    symbol: "MATIC",
                    price: 1.3766,
                    holders: 585583,
                    onChainMarketCap: 13766145539,
                    img: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=024",
                },
                {
                    name: "Binance USD",
                    symbol: "BUSD",
                    price: 1.002,
                    holders: 176526,
                    onChainMarketCap: 17610244995,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png",
                },
                {
                    name: "HEX",
                    symbol: "HEX",
                    price: 0.0623,
                    holders: 320831,
                    onChainMarketCap: 35992343636,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5015.png",
                },
                {
                    name: "stETH",
                    symbol: "stETH",
                    price: 1,
                    holders: 165848,
                    onChainMarketCap: 3074488567,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/8085.png",
                },
                {
                    name: "SHIBA INU",
                    symbol: "SHIB",
                    price: 0,
                    holders: 1311120,
                    onChainMarketCap: 13199892204,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
                },
                {
                    name: "ANY Litecoin",
                    symbol: "anyLTC",
                    price: 95.2324,
                    holders: 15,
                    onChainMarketCap: 6856,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
                },
                {
                    name: "Uniswap",
                    symbol: "UNI",
                    price: 7.01,
                    holders: 370338,
                    onChainMarketCap: 7010000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
                },
                {
                    name: "Theta Token",
                    symbol: "THETA",
                    price: 5.2667,
                    holders: 28147,
                    onChainMarketCap: 5266695404,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png",
                },
                {
                    name: "Dai Stablecoin",
                    symbol: "DAI",
                    price: 1.001,
                    holders: 499978,
                    onChainMarketCap: 9809451981,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png",
                },
                {
                    name: "Wrapped BTC",
                    symbol: "WBTC",
                    price: 24,
                    holders: 64481,
                    onChainMarketCap: 6293223118,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png",
                },
                {
                    name: "ChainLink Token",
                    symbol: "LINK",
                    price: 7.99,
                    holders: 651892,
                    onChainMarketCap: 7990000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
                },
                {
                    name: "Wrapped TON Coin",
                    symbol: "TONCOIN",
                    price: 2.49,
                    holders: 5733,
                    onChainMarketCap: 18293300,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png",
                },
                {
                    name: "Bitfinex LEO Token",
                    symbol: "LEO",
                    price: 3.34,
                    holders: 2634,
                    onChainMarketCap: 2204400000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3957.png",
                },
                {
                    name: "Lido DAO Token",
                    symbol: "LDO",
                    price: 3.16,
                    holders: 31731,
                    onChainMarketCap: 3160000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/8000.png",
                },
                {
                    name: "VeChain",
                    symbol: "VEN",
                    price: 0.0304,
                    holders: 46185,
                    onChainMarketCap: 30370624,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/8908.png",
                },
                {
                    name: "NEAR",
                    symbol: "NEAR",
                    price: 2.51,
                    holders: 1019,
                    onChainMarketCap: 986181,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png",
                },
                {
                    name: "Cronos Coin",
                    symbol: "CRO",
                    price: 0.083,
                    holders: 292973,
                    onChainMarketCap: 8302700000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png",
                },
                {
                    name: "ApeCoin",
                    symbol: "APE",
                    price: 5.6,
                    holders: 113957,
                    onChainMarketCap: 5600000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png",
                },
                {
                    name: "Quant",
                    symbol: "QNT",
                    price: 135.47,
                    holders: 117765,
                    onChainMarketCap: 6159414490,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3155.png",
                },
                {
                    name: "Graph Token",
                    symbol: "GRT",
                    price: 0.1676,
                    holders: 130173,
                    onChainMarketCap: 1725104971,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png",
                },
                {
                    name: "Fantom Token",
                    symbol: "FTM",
                    price: 0.5029,
                    holders: 106023,
                    onChainMarketCap: 1075328857,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png",
                },
                {
                    name: "SAND",
                    symbol: "SAND",
                    price: 0.7622,
                    holders: 220583,
                    onChainMarketCap: 2286522000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6210.png",
                },
                {
                    name: "Decentraland",
                    symbol: "MANA",
                    price: 0.7053,
                    holders: 311391,
                    onChainMarketCap: 1547256827,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png",
                },
                {
                    name: "Wrapped Decentraland MANA",
                    symbol: "wMANA",
                    price: 0.7053,
                    holders: 0,
                    onChainMarketCap: 22033174,
                    img: "https://s2.coinmarketcap.com/static/cloud/img/dex/default-icon-day.svg?_=79e4688",
                },
                {
                    name: "Aave Interest bearing Aave Token",
                    symbol: "aAAVE",
                    price: 86.68,
                    holders: 144,
                    onChainMarketCap: 451689,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/8920.png",
                },
                {
                    name: "Aave Token",
                    symbol: "AAVE",
                    price: 86.68,
                    holders: 154759,
                    onChainMarketCap: 1386880000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png",
                },
                {
                    name: "Staked Aave",
                    symbol: "stkAAVE",
                    price: 86.68,
                    holders: 19577,
                    onChainMarketCap: 245275795,
                    img: "https://s2.coinmarketcap.com/static/cloud/img/dex/default-icon-day.svg?_=79e4688",
                },
                {
                    name: "Frax",
                    symbol: "FRAX",
                    price: 0.998,
                    holders: 7547,
                    onChainMarketCap: 2647848116,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6952.png",
                },
                {
                    name: "Rocket Pool",
                    symbol: "RPL",
                    price: 50.88,
                    holders: 6738,
                    onChainMarketCap: 926181410,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2943.png",
                },
                {
                    name: "TrueUSD",
                    symbol: "TUSD",
                    price: 1.002,
                    holders: 51013,
                    onChainMarketCap: 1139855851,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2563.png",
                },
                {
                    name: "KuCoin Token",
                    symbol: "KCS",
                    price: 8.7696,
                    holders: 5920,
                    onChainMarketCap: 1459518577,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2087.png",
                },
                {
                    name: "HuobiToken",
                    symbol: "HT",
                    price: 5.3,
                    holders: 51765,
                    onChainMarketCap: 2650000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png",
                },
                {
                    name: "Synthetix Network Token",
                    symbol: "SNX",
                    price: 2.72,
                    holders: 94547,
                    onChainMarketCap: 659651884,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2586.png",
                },
                {
                    name: "Frax Share",
                    symbol: "FXS",
                    price: 11.27,
                    holders: 12731,
                    onChainMarketCap: 1125827356,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6953.png",
                },
                {
                    name: "Immutable X",
                    symbol: "IMX",
                    price: 1.048,
                    holders: 46811,
                    onChainMarketCap: 2096000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/10603.png",
                },
                {
                    name: "BitDAO",
                    symbol: "BIT",
                    price: 0.6019,
                    holders: 18723,
                    onChainMarketCap: 6019320000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/11221.png",
                },
                {
                    name: "chiliZ",
                    symbol: "CHZ",
                    price: 0.1398,
                    holders: 175676,
                    onChainMarketCap: 1242311110,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/4066.png",
                },
                {
                    name: "Decentralized USD",
                    symbol: "USDD",
                    price: 0.9989,
                    holders: 838,
                    onChainMarketCap: 3096447,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/19891.png",
                },
                {
                    name: "Pax Dollar",
                    symbol: "USDP",
                    price: 1.002,
                    holders: 109564,
                    onChainMarketCap: 1086096875,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3330.png",
                },
                {
                    name: "BitTorrent",
                    symbol: "BTT",
                    price: 0,
                    holders: 17153,
                    onChainMarketCap: 10752888,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/16086.png",
                },
                {
                    name: "Maker",
                    symbol: "MKR",
                    price: 758.56,
                    holders: 93225,
                    onChainMarketCap: 741591771,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png",
                },
                {
                    name: "Compound USD Coin",
                    symbol: "cUSDC",
                    price: 0.0228,
                    holders: 216941,
                    onChainMarketCap: 2736322261,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5265.png",
                },
                {
                    name: "Zilliqa",
                    symbol: "ZIL",
                    price: 0.0358,
                    holders: 23537,
                    onChainMarketCap: 5977421,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2469.png",
                },
                {
                    name: "Gemini dollar",
                    symbol: "GUSD",
                    price: 1.001,
                    holders: 9958,
                    onChainMarketCap: 251493478,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3306.png",
                },
                {
                    name: "EnjinCoin",
                    symbol: "ENJ",
                    price: 0.5522,
                    holders: 185497,
                    onChainMarketCap: 552176000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2130.png",
                },
                {
                    name: "Compound Dai",
                    symbol: "cDAI",
                    price: 0.0222,
                    holders: 18942,
                    onChainMarketCap: 2963131630,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5263.png",
                },
                {
                    name: "LoopringCoin V2",
                    symbol: "LRC",
                    price: 0.4153,
                    holders: 166080,
                    onChainMarketCap: 570510563,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1934.png",
                },
                {
                    name: "1INCH Token",
                    symbol: "1INCH",
                    price: 0.627,
                    holders: 95455,
                    onChainMarketCap: 940501500,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/8104.png",
                },
                {
                    name: "Render Token",
                    symbol: "RNDR",
                    price: 1.63,
                    holders: 24323,
                    onChainMarketCap: 854095313,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5690.png",
                },
                {
                    name: "SingularityNET Token",
                    symbol: "AGIX",
                    price: 0.4016,
                    holders: 45634,
                    onChainMarketCap: 401624000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2424.png",
                },
                {
                    name: "BAT",
                    symbol: "BAT",
                    price: 0.3223,
                    holders: 464718,
                    onChainMarketCap: 483400500,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1697.png",
                },
                {
                    name: "Compound Ether",
                    symbol: "cETH",
                    price: 33.27,
                    holders: 72978,
                    onChainMarketCap: 1750883222,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/4338.png",
                },
                {
                    name: "FLOKI",
                    symbol: "FLOKI",
                    price: 0,
                    holders: 69137,
                    onChainMarketCap: 490400000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/10804.png",
                },
                {
                    name: "Convex Token",
                    symbol: "CVX",
                    price: 6.289,
                    holders: 18344,
                    onChainMarketCap: 527739521,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/9903.png",
                },
                {
                    name: "Fetch",
                    symbol: "FET",
                    price: 0.4474,
                    holders: 40221,
                    onChainMarketCap: 515816525,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3773.png",
                },
                {
                    name: "Paxos Gold",
                    symbol: "PAXG",
                    price: 1,
                    holders: 26513,
                    onChainMarketCap: 359146085,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/4705.png",
                },
                {
                    name: "Tether Gold",
                    symbol: "XAUt",
                    price: 1,
                    holders: 746,
                    onChainMarketCap: 417351591,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5176.png",
                },
                {
                    name: "Ethereum Name Service",
                    symbol: "ENS",
                    price: 16.63,
                    holders: 64065,
                    onChainMarketCap: 1663000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/13855.png",
                },
                {
                    name: "Nexo",
                    symbol: "NEXO",
                    price: 0.7621,
                    holders: 77186,
                    onChainMarketCap: 762115000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2694.png",
                },
                {
                    name: "dYdX",
                    symbol: "DYDX",
                    price: 2.73,
                    holders: 37100,
                    onChainMarketCap: 2730000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/11156.png",
                },
                {
                    name: "HoloToken",
                    symbol: "HOT",
                    price: 0.0023,
                    holders: 136149,
                    onChainMarketCap: 399791149,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2682.png",
                },
                {
                    name: "Wrapped Celo",
                    symbol: "wCELO",
                    price: 0.8216,
                    holders: 250,
                    onChainMarketCap: 1196832,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/8288.png",
                },
                {
                    name: "DeFiChain Token",
                    symbol: "DFI",
                    price: 0.5984,
                    holders: 2159,
                    onChainMarketCap: 4984338,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5804.png",
                },
                {
                    name: "Blur",
                    symbol: "BLUR",
                    price: 0.9903,
                    holders: 45196,
                    onChainMarketCap: 2971017000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/23121.png",
                },
                {
                    name: "Wootrade Network",
                    symbol: "WOO",
                    price: 0.2317,
                    holders: 13985,
                    onChainMarketCap: 694959000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/7501.png",
                },
                {
                    name: "XinFin XDCE",
                    symbol: "XDCE",
                    price: 0.0269,
                    holders: 5836,
                    onChainMarketCap: 11017861,
                    img: "https://s2.coinmarketcap.com/static/cloud/img/dex/default-icon-day.svg?_=79e4688",
                },
                {
                    name: "WQtum",
                    symbol: "WQTUM",
                    price: 3.5612,
                    holders: 41,
                    onChainMarketCap: 383979695,
                    img: "https://cryptologos.cc/logos/qtum-qtum-logo.png?v=024",
                },
                {
                    name: "Compound",
                    symbol: "COMP",
                    price: 53.93,
                    holders: 208888,
                    onChainMarketCap: 539300000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png",
                },
                {
                    name: "Rocket Pool ETH",
                    symbol: "rETH",
                    price: 1,
                    holders: 10412,
                    onChainMarketCap: 81319959,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/15060.png",
                },
                {
                    name: "Amp",
                    symbol: "AMP",
                    price: 0.0064,
                    holders: 94478,
                    onChainMarketCap: 637781301,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6945.png",
                },
                {
                    name: "Gala",
                    symbol: "GALA",
                    price: 0.0449,
                    holders: 210782,
                    onChainMarketCap: 1655160074,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/7080.png",
                },
                {
                    name: "HarmonyOne",
                    symbol: "ONE",
                    price: 0.0249,
                    holders: 195,
                    onChainMarketCap: 310389495,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3945.png",
                },
                {
                    name: "NXM",
                    symbol: "NXM",
                    price: 47.68,
                    holders: 4092,
                    onChainMarketCap: 328562880,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5830.png",
                },
                {
                    name: "yearn.finance",
                    symbol: "YFI",
                    price: 9,
                    holders: 55472,
                    onChainMarketCap: 350180832,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5864.png",
                },
                {
                    name: "Injective Token",
                    symbol: "INJ",
                    price: 3.99,
                    holders: 12027,
                    onChainMarketCap: 399000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png",
                },
                {
                    name: "Synapse",
                    symbol: "SYN",
                    price: 1.57,
                    holders: 7504,
                    onChainMarketCap: 180193826,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/12147.png",
                },
                {
                    name: "Olympus",
                    symbol: "OHM",
                    price: 10.44,
                    holders: 5869,
                    onChainMarketCap: 119464241,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/9067.png",
                },
                {
                    name: "IoTeX Network",
                    symbol: "IOTX",
                    price: 0.0304,
                    holders: 20374,
                    onChainMarketCap: 304349223,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2777.png",
                },
                {
                    name: "Balancer",
                    symbol: "BAL",
                    price: 7.24,
                    holders: 45391,
                    onChainMarketCap: 345782400,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5728.png",
                },
                {
                    name: "Gnosis",
                    symbol: "GNO",
                    price: 108.62,
                    holders: 17148,
                    onChainMarketCap: 1086200000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1659.png",
                },
                {
                    name: "SSV Token",
                    symbol: "SSV",
                    price: 39.58,
                    holders: 2349,
                    onChainMarketCap: 435697471,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/12999.png",
                },
                {
                    name: "SushiToken",
                    symbol: "SUSHI",
                    price: 1.42,
                    holders: 112966,
                    onChainMarketCap: 340967373,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png",
                },
                {
                    name: "BandToken",
                    symbol: "BAND",
                    price: 2.21,
                    holders: 33623,
                    onChainMarketCap: 221000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/4679.png",
                },
                {
                    name: "Onyxcoin",
                    symbol: "XCN",
                    price: 0.0114,
                    holders: 10080,
                    onChainMarketCap: 786707036,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/18679.png",
                },
                {
                    name: "Golem Network Token",
                    symbol: "GLM",
                    price: 0.2697,
                    holders: 17867,
                    onChainMarketCap: 150987651,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1455.png",
                },
                {
                    name: "Mask Network",
                    symbol: "MASK",
                    price: 3.93,
                    holders: 11721,
                    onChainMarketCap: 393000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/8536.png",
                },
                {
                    name: "GreenMetaverseToken",
                    symbol: "GMT",
                    price: 0.4352,
                    holders: 10461,
                    onChainMarketCap: 25280742,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png",
                },
                {
                    name: "Dogelon",
                    symbol: "ELON",
                    price: 0,
                    holders: 148185,
                    onChainMarketCap: 460842000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/9436.png",
                },
                {
                    name: "OMG Network",
                    symbol: "OMG",
                    price: 1.79,
                    holders: 682436,
                    onChainMarketCap: 251039262,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1808.png",
                },
                {
                    name: "MCO",
                    symbol: "MCO",
                    price: 15.9471,
                    holders: 26498,
                    onChainMarketCap: 503733050,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1776.png",
                },
                {
                    name: "Reserve Rights",
                    symbol: "RSR",
                    price: 0.0055,
                    holders: 13383,
                    onChainMarketCap: 549564000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3964.png",
                },
                {
                    name: "ZRX",
                    symbol: "ZRX",
                    price: 0.2828,
                    holders: 196685,
                    onChainMarketCap: 282802000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1896.png",
                },
                {
                    name: "Livepeer Token",
                    symbol: "LPT",
                    price: 8.45,
                    holders: 2333927,
                    onChainMarketCap: 210381509,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3640.png",
                },
                {
                    name: "SKALE",
                    symbol: "SKL",
                    price: 0.0544,
                    holders: 23301,
                    onChainMarketCap: 251545007,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5691.png",
                },
                {
                    name: "Alchemy",
                    symbol: "ACH",
                    price: 0.045,
                    holders: 20475,
                    onChainMarketCap: 450391900,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6958.png",
                },
                {
                    name: "IOSToken",
                    symbol: "IOST",
                    price: 0.012,
                    holders: 41366,
                    onChainMarketCap: 252877908,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2405.png",
                },
            ],
            // -------------OPTION 2-------------

            allTime: [
                {
                    imgUrl: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&w=256",
                    name: "CryptoPunks",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=256",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 775000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=256",
                    name: "Mutant Ape Yacht Club",
                    floorPrice: 16199000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1515000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg?auto=format&w=256",
                    name: "CLONE X - X TAKASHI MURAKAMI",
                    floorPrice: 15243000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75?auto=format&w=256",
                    name: "Moonbirds",
                    floorPrice: 65555000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 565000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=256",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 77000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A?auto=format&w=256",
                    name: "The Sandbox",
                    floorPrice: 843000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/hbe_-yi5K_UjPXiGj8IlxsR6ZMOy9AZs17vcCLIEbvS5Q7VaPCM7JwYmAioddCJ71rnEu_b11Dcyn2JXzhetqloLgHgnSrtJ3sRP?auto=format&w=256",
                    name: "Elemental by Fang Lijun",
                    floorPrice: 1123000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3d5365caab0a25b656daa3bfceecadb6.jpg?auto=format&w=256",
                    name: "MechMindsAI",
                    floorPrice: 699000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On?auto=format&w=256",
                    name: "BEANZ Official",
                    floorPrice: 16196000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 54999000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FG0QJ00fN3c_FWuPeUr9-T__iQl63j9hn5d6svW8UqOmia5zp3lKHPkJuHcvhZ0f_Pd6P2COo9tt9zVUvdPxG_9BBw?auto=format&w=256",
                    name: "Rarible",
                    floorPrice: 0, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/EFAQpIktMBU5SU0TqSdPWZ4byHr3hFirL_mATsR8KWhM5z-GJljX8E73V933lkyKgv2SAFlfRRjGsWvWbQQmJAwu3F2FDXVa1C9F?auto=format&w=256",
                    name: "World of Women",
                    floorPrice: 2079000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/g-NFUWjS4IGgym8PHBxyhg5-G_B4x-IHgPKRkxo00JQFE3LOd-95yU2uhrokITVmV7KHEav6OMfAhfJ4roC5hwP-0tI9dMRd9wQLdw?auto=format&w=256",
                    name: "Loot (for Adventurers)",
                    floorPrice: 559000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/iofetZEyiEIGcNyJKpbOafb_efJyeo7QOYnTog8qcQJhqoBU-Vu9l3lXidZhXOAdu6dj4fzWW6BZDU5vLseC-K03rMMu-_j2LvwcbHo?auto=format&w=256",
                    name: "CrypToadz by GREMPLIN",
                    floorPrice: 127000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gae/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ?auto=format&w=256",
                    name: "ENS: Ethereum Name Service",
                    floorPrice: 14000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY?auto=format&w=256",
                    name: "Decentraland",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0qG8Y78s198F2GZHhURw8_TEfxFlpS2XYnuLV_OW6TJin5AV1G2WOSpcLGnEmv5g2gZ6R6Pxjd4v1DP2p0bxptckM6ZJ3cMIvQmrgDM?auto=format&w=256",
                    name: "Chromie Squiggle by Snowfro",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 507000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Mf4vImKbzrJUcj7f7RZNOl9iZSEEJgkvpiUp9ugXc9dcpxFe6fvVgxYcRmTI1PnvfL_X1bD3mH4e66j6aJhqLEYm0vvpC8Jy8XJNZOI?auto=format&w=256",
                    name: "Bored Ape Chemistry Club",
                    floorPrice: 1855000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3f76da086f4bbd07d8e6cdac14e3c02f.png?auto=format&w=256",
                    name: "HAPE PRIME",
                    floorPrice: 3289000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/gp39NTyxBPazqowYV9XTFxAU4eNk1i7FlmonHW4Zr7eS9UxEvrZ7f04rOLEhDxcuGxsbUx1Rm_N6Ky_Dp4A1ZQYHFAaEWj5YdBF0qg?auto=format&w=256",
                    name: "RTFKT - MNLTH",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ae70936496054650faf8ee38a7cab5e8.png?auto=format&w=256",
                    name: "FFidenza by Tyler Hobbs",
                    floorPrice: 733000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/J2iIgy5_gmA8IS6sXGKGZeFVZwhldQylk7w7fLepTE9S7ICPCn_dlo8kypX8Ju0N6wvLVOKsbP_7bNGd8cpKmWhFQmqMXOC8q2sOdqw?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 14399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/cb_wdEAmvry_noTfeuQzhqKpghhZWQ_sEhuGS9swM03UM8QMEVJrndu0ZRdLFgGVqEPeCUzOHGTUllxug9U3xdvt0bES6VFdkRCKPqg?auto=format&w=256",
                    name: "goblintown.wtf",
                    floorPrice: 599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fb08eacd7e9c4f21303e5d771eb4a2eb.png?auto=format&w=256",
                    name: "NFT Worlds",
                    floorPrice: 13499000000000000000, // WEI
                    currency: "ETH",
                },
                // -------15----------------------------------------------------------------------------------
            ],

            byVolume: [
                {
                    name: "Tether USD",
                    symbol: "USDT",
                    price: 1.002,
                    holders: 4073124,
                    onChainMarketCap: 39902766084,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
                },
                {
                    name: "Binance USD",
                    symbol: "BUSD",
                    price: 1.002,
                    holders: 176526,
                    onChainMarketCap: 17610244995,
                    img: "https://altcoinsbox.com/wp-content/uploads/2023/01/binance-usd-busd-logo.webp",
                },
                {
                    name: "USD Coin",
                    symbol: "USDC",
                    price: 1.003,
                    holders: 1621848,
                    onChainMarketCap: 46742238132,
                    img: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
                },
                {
                    name: "ChainLink Token",
                    symbol: "LINK",
                    price: 7.99,
                    holders: 651892,
                    onChainMarketCap: 7990000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
                },
                {
                    name: "Matic Token",
                    symbol: "MATIC",
                    price: 1.3766,
                    holders: 585583,
                    onChainMarketCap: 13766145539,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
                },
                {
                    name: "ANY Litecoin",
                    symbol: "anyLTC",
                    price: 95.2324,
                    holders: 15,
                    onChainMarketCap: 6856,
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/1200px-LTC-400.png",
                },
                {
                    name: "BNB",
                    symbol: "BNB",
                    price: 310.1656,
                    holders: 302196,
                    onChainMarketCap: 5142395350,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
                },
                {
                    name: "SHIBA INU",
                    symbol: "SHIB",
                    price: 0,
                    holders: 1311120,
                    onChainMarketCap: 13199892204,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
                },
                {
                    name: "Fantom Token",
                    symbol: "FTM",
                    price: 0.5029,
                    holders: 106023,
                    onChainMarketCap: 1075328857,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png",
                },
                {
                    name: "Alchemy",
                    symbol: "ACH",
                    price: 0.045,
                    holders: 20475,
                    onChainMarketCap: 450391900,
                    img: "https://mma.prnewswire.com/media/1055937/Alchemy_Logo.jpg?p=facebook",
                },
                {
                    name: "Lido DAO Token",
                    symbol: "LDO",
                    price: 3.16,
                    holders: 31731,
                    onChainMarketCap: 3160000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/8000.png",
                },
                {
                    name: "Theta Token",
                    symbol: "THETA",
                    price: 5.2667,
                    holders: 28147,
                    onChainMarketCap: 5266695404,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png",
                },
                {
                    name: "yearn.finance",
                    symbol: "YFI",
                    price: 9,
                    holders: 55472,
                    onChainMarketCap: 350180832,
                    img: "https://cryptologos.cc/logos/yearn-finance-yfi-logo.png",
                },
                {
                    name: "Blur",
                    symbol: "BLUR",
                    price: 0.9903,
                    holders: 45196,
                    onChainMarketCap: 2971017000,
                    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8b8f6c0-484f-46f0-82f9-7c40c85b2b9d/d22sz5i-57747757-1f48-471d-93f9-ed2c5c61803f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4YjhmNmMwLTQ4NGYtNDZmMC04MmY5LTdjNDBjODViMmI5ZFwvZDIyc3o1aS01Nzc0Nzc1Ny0xZjQ4LTQ3MWQtOTNmOS1lZDJjNWM2MTgwM2YuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B4BLTbDbyLGuAzAacZ41gVCAbeNGUNHEoovI9wghLnU",
                },
                {
                    name: "EnjinCoin",
                    symbol: "ENJ",
                    price: 0.5522,
                    holders: 185497,
                    onChainMarketCap: 552176000,
                    img: "https://cryptologos.cc/logos/enjin-coin-enj-logo.png",
                },
                {
                    name: "SAND",
                    symbol: "SAND",
                    price: 0.7622,
                    holders: 220583,
                    onChainMarketCap: 2286522000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6210.png",
                },
                {
                    name: "Wrapped BTC",
                    symbol: "WBTC",
                    price: 24,
                    holders: 64481,
                    onChainMarketCap: 6293223118,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png",
                },
                {
                    name: "Dai Stablecoin",
                    symbol: "DAI",
                    price: 1.001,
                    holders: 499978,
                    onChainMarketCap: 9809451981,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png",
                },
                {
                    name: "dYdX",
                    symbol: "DYDX",
                    price: 2.73,
                    holders: 37100,
                    onChainMarketCap: 2730000000,
                    img: "https://blog.bitnovo.com/wp-content/uploads/2022/02/dYdX2.jpg",
                },
                {
                    name: "Gala",
                    symbol: "GALA",
                    price: 0.0449,
                    holders: 210782,
                    onChainMarketCap: 1655160074,
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Gala_Logo_2020.svg/1200px-Gala_Logo_2020.svg.png",
                },
                {
                    name: "Fetch",
                    symbol: "FET",
                    price: 0.4474,
                    holders: 40221,
                    onChainMarketCap: 515816525,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1e62cNlRkqf_jX0TlxDIa6nVos3Vm8yqriFXWDO1JA&s",
                },
                {
                    name: "Graph Token",
                    symbol: "GRT",
                    price: 0.1676,
                    holders: 130173,
                    onChainMarketCap: 1725104971,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png",
                },
                {
                    name: "Zilliqa",
                    symbol: "ZIL",
                    price: 0.0358,
                    holders: 23537,
                    onChainMarketCap: 5977421,
                    img: "https://w7.pngwing.com/pngs/443/1014/png-transparent-zilliqa-crypto-zilliqa-logo-zilliqa-sign-zilliqa-symbol-zilliqa-coin-zilliqa-3d-icon-thumbnail.png",
                },
                {
                    name: "NEAR",
                    symbol: "NEAR",
                    price: 2.51,
                    holders: 1019,
                    onChainMarketCap: 986181,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png",
                },
                {
                    name: "Wrapped Decentraland MANA",
                    symbol: "wMANA",
                    price: 0.7053,
                    holders: 0,
                    onChainMarketCap: 22033174,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png",
                },
                {
                    name: "ApeCoin",
                    symbol: "APE",
                    price: 5.6,
                    holders: 113957,
                    onChainMarketCap: 5600000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png",
                },
                {
                    name: "SingularityNET Token",
                    symbol: "AGIX",
                    price: 0.4016,
                    holders: 45634,
                    onChainMarketCap: 401624000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/2424.png",
                },
                {
                    name: "Synapse",
                    symbol: "SYN",
                    price: 1.57,
                    holders: 7504,
                    onChainMarketCap: 180193826,
                    img: "https://go.timextender.com/hubfs/azure%20synapse%20analytics.jpeg",
                },
                {
                    name: "DODO bird",
                    symbol: "DODO",
                    price: 0.2448,
                    holders: 13354,
                    onChainMarketCap: 244756000,
                    img: "https://scalebranding.com/wp-content/uploads/2020/12/Dodo-Bird-Logo-MockUp.jpg",
                },
                {
                    name: "SelfKey",
                    symbol: "KEY",
                    price: 0.0136,
                    holders: 15561,
                    onChainMarketCap: 81432419,
                    img: "https://cdn.worldvectorlogo.com/logos/selfkey.svg",
                },
                {
                    name: "chiliZ",
                    symbol: "CHZ",
                    price: 0.1398,
                    holders: 175676,
                    onChainMarketCap: 1242311110,
                    img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/u3mzepegllnxslgkeqx6",
                },
                {
                    name: "GreenMetaverseToken",
                    symbol: "GMT",
                    price: 0.4352,
                    holders: 10461,
                    onChainMarketCap: 25280742,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/18069.png",
                },
                {
                    name: "Uniswap",
                    symbol: "UNI",
                    price: 7.01,
                    holders: 370338,
                    onChainMarketCap: 7010000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
                },
                {
                    name: "VeChain",
                    symbol: "VEN",
                    price: 0.0304,
                    holders: 46185,
                    onChainMarketCap: 30370624,
                    img: "https://pbs.twimg.com/profile_images/1571919423337816064/-hd_M7JR_400x400.png",
                },
                {
                    name: "Aave Interest bearing Aave Token",
                    symbol: "aAAVE",
                    price: 86.68,
                    holders: 144,
                    onChainMarketCap: 451689,
                    img: "https://zerion.io/blog/content/images/2022/11/Aave-V2.png",
                },
                {
                    name: "Staked Aave",
                    symbol: "stkAAVE",
                    price: 86.68,
                    holders: 19577,
                    onChainMarketCap: 245275795,
                    img: "https://www.cryptocompare.com/media/39383069/stkaave.png",
                },
                {
                    name: "PolkaBridge",
                    symbol: "PBR",
                    price: 0.117,
                    holders: 13358,
                    onChainMarketCap: 9578593,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/8320.png",
                },
                {
                    name: "FLOKI",
                    symbol: "FLOKI",
                    price: 0,
                    holders: 69137,
                    onChainMarketCap: 490400000,
                    img: "https://cryptologos.cc/logos/floki-inu-floki-logo.png",
                },
                {
                    name: "Mask Network",
                    symbol: "MASK",
                    price: 3.93,
                    holders: 11721,
                    onChainMarketCap: 393000000,
                    img: "https://mask.io/assets/icons/logo.svg",
                },
                {
                    name: "LoopringCoin V2",
                    symbol: "LRC",
                    price: 0.4153,
                    holders: 166080,
                    onChainMarketCap: 570510563,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1934.png",
                },
                {
                    name: "Amp",
                    symbol: "AMP",
                    price: 0.0064,
                    holders: 94478,
                    onChainMarketCap: 637781301,
                    img: "https://thumbs.dreamstime.com/b/amp-letter-logo-design-template-vector-eps-electric-technology-purpose-ready-to-use-creative-modern-letter-amp-logo-design-168997431.jpg",
                },
                {
                    name: "Frax Share",
                    symbol: "FXS",
                    price: 11.27,
                    holders: 12731,
                    onChainMarketCap: 1125827356,
                    img: "https://cryptologos.cc/logos/frax-share-fxs-logo.png",
                },
                {
                    name: "Render Token",
                    symbol: "RNDR",
                    price: 1.63,
                    holders: 24323,
                    onChainMarketCap: 854095313,
                    img: "https://thegivingblock.com/wp-content/uploads/2021/12/render-token-RNDR.png",
                },
                {
                    name: "BAT",
                    symbol: "BAT",
                    price: 0.3223,
                    holders: 464718,
                    onChainMarketCap: 483400500,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1697.png",
                },
                {
                    name: "SushiToken",
                    symbol: "SUSHI",
                    price: 1.42,
                    holders: 112966,
                    onChainMarketCap: 340967373,
                    img: "https://cryptologos.cc/logos/sushiswap-sushi-logo.png",
                },
                {
                    name: "WQtum",
                    symbol: "WQTUM",
                    price: 3.5612,
                    holders: 41,
                    onChainMarketCap: 383979695,
                    img: "https://cryptologos.cc/logos/qtum-qtum-logo.png",
                },
                {
                    name: "Synthetix Network Token",
                    symbol: "SNX",
                    price: 2.72,
                    holders: 94547,
                    onChainMarketCap: 659651884,
                    img: "https://thegivingblock.com/wp-content/uploads/2021/07/Synthetix-Logo.png",
                },
                {
                    name: "StargateToken",
                    symbol: "STG",
                    price: 1.092,
                    holders: 19545,
                    onChainMarketCap: 1092000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/18934.png",
                },
                {
                    name: "ZRX",
                    symbol: "ZRX",
                    price: 0.2828,
                    holders: 196685,
                    onChainMarketCap: 282802000,
                    img: "https://cryptologos.cc/logos/0x-zrx-logo.svg?v=025",
                },
                {
                    name: "1INCH Token",
                    symbol: "1INCH",
                    price: 0.627,
                    holders: 95455,
                    onChainMarketCap: 940501500,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/8104.png",
                },
                {
                    name: "VIB",
                    symbol: "VIB",
                    price: 0.1343,
                    holders: 10803,
                    onChainMarketCap: 26868600,
                    img: "https://inkythuatso.com/uploads/thumbnails/800/2021/12/logo-vib-inkythuatso-3-21-13-44-34.jpg",
                },
                {
                    name: "TrueUSD",
                    symbol: "TUSD",
                    price: 1.002,
                    holders: 51013,
                    onChainMarketCap: 1139855851,
                    img: "https://images.prismic.io/tusd-homepage/fb4d581a-95ed-404c-b9de-7ab1365c1386_%E5%9B%BE%E5%B1%82+1.png?auto=compress,format",
                },
                {
                    name: "Storj",
                    symbol: "STORJ",
                    price: 0.4753,
                    holders: 93297,
                    onChainMarketCap: 202021624,
                    img: "https://cryptologos.cc/logos/storj-storj-logo.png",
                },
                {
                    name: "ALICE",
                    symbol: "ALICE",
                    price: 2.12,
                    holders: 8224,
                    onChainMarketCap: 195040000,
                    img: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/fb/Alice_%28logo%29.svg/1200px-Alice_%28logo%29.svg.png",
                },
                {
                    name: "Hashflow",
                    symbol: "HFT",
                    price: 0.7166,
                    holders: 8308,
                    onChainMarketCap: 716625000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/22461.png",
                },
                {
                    name: "[FCT] FirmaChain Token",
                    symbol: "FCT",
                    price: 0.074,
                    holders: 12707,
                    onChainMarketCap: 44392200,
                    img: "https://pbs.twimg.com/profile_images/1547105326704787456/-sWWIK9N_400x400.png",
                },
                {
                    name: "Decentralized USD",
                    symbol: "USDD",
                    price: 0.9989,
                    holders: 838,
                    onChainMarketCap: 3096447,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/18861.png",
                },
                {
                    name: "Ocean Token",
                    symbol: "OCEAN",
                    price: 0.4453,
                    holders: 44537,
                    onChainMarketCap: 273026535,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2s700RmYQF7Qwyo55qpgq09dN7PURUWM7ukabSvF4A&s",
                },
                {
                    name: "Injective Token",
                    symbol: "INJ",
                    price: 3.99,
                    holders: 12027,
                    onChainMarketCap: 399000000,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcLRR4evZtdlO7d_-CIMNh_BRZfBFaJreQuI1p_kSLg&s",
                },
                {
                    name: "OKB",
                    symbol: "OKB",
                    price: 51.8,
                    holders: 50754,
                    onChainMarketCap: 15540000000,
                    img: "https://cryptologos.cc/logos/okb-okb-logo.png",
                },
                {
                    name: "SSV Token",
                    symbol: "SSV",
                    price: 39.58,
                    holders: 2349,
                    onChainMarketCap: 435697471,
                    img: "https://pbs.twimg.com/profile_images/1462629470460727300/44rQmYKo_400x400.png",
                },
                {
                    name: "Immutable X",
                    symbol: "IMX",
                    price: 1.048,
                    holders: 46811,
                    onChainMarketCap: 2096000000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/10603.png",
                },
                {
                    name: "Linear Token",
                    symbol: "LINA",
                    price: 0.0121,
                    holders: 13890,
                    onChainMarketCap: 121214800,
                    img: "https://icodrops.com/wp-content/uploads/2020/09/Linear_logo.jpg",
                },
                {
                    name: "ARPA Token",
                    symbol: "ARPA",
                    price: 0.0477,
                    holders: 10169,
                    onChainMarketCap: 71619779,
                    img: "https://cryptologos.cc/logos/arpa-chain-arpa-logo.png",
                },
                {
                    name: "Ethereum Name Service",
                    symbol: "ENS",
                    price: 16.63,
                    holders: 64065,
                    onChainMarketCap: 1663000000,
                    img: "https://img.freepik.com/vector-premium/ens-ethereum-name-service-token-token-cryptocurrency-logo-circulo-icono-moneda-aislado-sobre-fondo-blanco_337410-1834.jpg?w=2000",
                },
                {
                    name: "stETH",
                    symbol: "stETH",
                    price: 1,
                    holders: 165848,
                    onChainMarketCap: 3074488567,
                    img: "https://cryptologos.cc/logos/steth-steth-logo.png",
                },
                {
                    name: "AlphaToken",
                    symbol: "ALPHA",
                    price: 0.1518,
                    holders: 9452,
                    onChainMarketCap: 151832000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/7232.png",
                },
                {
                    name: "PlayDapp Token",
                    symbol: "PLA",
                    price: 0.2636,
                    holders: 2683,
                    onChainMarketCap: 184533248,
                    img: "https://altcoinsbox.com/wp-content/uploads/2023/04/playdapp-logo.jpg",
                },
                {
                    name: "Coin98",
                    symbol: "C98",
                    price: 0.3202,
                    holders: 2279,
                    onChainMarketCap: 16007562,
                    img: "https://bitcoin.es/wp-content/uploads/2019/05/cip-binance.png",
                },
                {
                    name: "ConstitutionDAO",
                    symbol: "PEOPLE",
                    price: 0.028,
                    holders: 16918,
                    onChainMarketCap: 141599834,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/14806.png",
                },
                {
                    name: "UMA Voting Token v1",
                    symbol: "UMA",
                    price: 2.39,
                    holders: 20218,
                    onChainMarketCap: 253806272,
                    img: "https://token-icons.s3.amazonaws.com/0x04fa0d235c4abf4bcf4787af4cf447de572ef828.png",
                },
                {
                    name: "Wrapped TON Coin",
                    symbol: "TONCOIN",
                    price: 2.49,
                    holders: 5733,
                    onChainMarketCap: 18293300,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png",
                },
                {
                    name: "Reserve Rights",
                    symbol: "RSR",
                    price: 0.0055,
                    holders: 13383,
                    onChainMarketCap: 549564000,
                    img: "https://www.thecoinrepublic.com/wp-content/uploads/2022/10/rsr-1140x641.jpg",
                },
                {
                    name: "Quant",
                    symbol: "QNT",
                    price: 135.47,
                    holders: 117765,
                    onChainMarketCap: 6159414490,
                    img: "https://s2.coinmarketcap.com/static/img/coins/64x64/3155.png",
                },
                {
                    name: "StaFi",
                    symbol: "FIS",
                    price: 0.7477,
                    holders: 2222,
                    onChainMarketCap: 16832202,
                    img: "https://icodrops.com/wp-content/uploads/2020/06/Stafi_logo.jpg",
                },
                {
                    name: "Kyber Network Crystal v2",
                    symbol: "KNC",
                    price: 0.8732,
                    holders: 14189,
                    onChainMarketCap: 167323650,
                    img: "https://stakingcrypto.info/static/assets/coins/kyber-network-crystal-v2-logo.png",
                },
                {
                    name: "Moss Coin",
                    symbol: "MOC",
                    price: 0.1204,
                    holders: 6598,
                    onChainMarketCap: 60177500,
                    img: "https://stakingcrypto.info/static/assets/coins/moss-coin-logo.png",
                },
                {
                    name: "Measurable Data Token",
                    symbol: "MDT",
                    price: 0.0665,
                    holders: 27272,
                    onChainMarketCap: 66483000,
                    img: "https://cryptologos.cc/logos/measurable-data-token-mdt-logo.png",
                },
                {
                    name: "CelerToken",
                    symbol: "CELR",
                    price: 0.025,
                    holders: 19186,
                    onChainMarketCap: 250180700,
                    img: "https://celer.network/static/Black-4d795924d523c9d8d45540e67370465a.png",
                },
                {
                    name: "VERA",
                    symbol: "VRA",
                    price: 0.0087,
                    holders: 80350,
                    onChainMarketCap: 169834073,
                    img: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122011/untitled-1_69.png?itok=CmIvHpAn",
                },
                {
                    name: "Compound",
                    symbol: "COMP",
                    price: 53.93,
                    holders: 208888,
                    onChainMarketCap: 539300000,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0Io8Zoydng6PH3ZKpvRV7Cvz__wCaYvWu0oP7Lk&s",
                },
                {
                    name: "Wootrade Network",
                    symbol: "WOO",
                    price: 0.2317,
                    holders: 13985,
                    onChainMarketCap: 694959000,
                    img: "https://cryptologos.cc/logos/wootrade-woo-logo.png",
                },
                {
                    name: "HarmonyOne",
                    symbol: "ONE",
                    price: 0.0249,
                    holders: 195,
                    onChainMarketCap: 310389495,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcdDJv-gFMKXyCkpAo3K6eEwOgG3yRJaNaVjodeyAgw&s",
                },
                {
                    name: "OMG Network",
                    symbol: "OMG",
                    price: 1.79,
                    holders: 682436,
                    onChainMarketCap: 251039262,
                    img: "https://ih1.redbubble.net/image.1627481397.3250/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
                },
                {
                    name: "Gifto",
                    symbol: "GTO",
                    price: 0.0789,
                    holders: 111853,
                    onChainMarketCap: 78886000,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/2289.png",
                },
                {
                    name: "USDK",
                    symbol: "USDK",
                    price: 1.002,
                    holders: 3871,
                    onChainMarketCap: 42563668,
                    img: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/32/Logo_du_USDK.png/378px-Logo_du_USDK.png",
                },
                {
                    name: "IoTeX Network",
                    symbol: "IOTX",
                    price: 0.0304,
                    holders: 20374,
                    onChainMarketCap: 304349223,
                    img: "https://cryptologos.cc/logos/iotex-iotx-logo.png",
                },
                {
                    name: "Onyxcoin",
                    symbol: "XCN",
                    price: 0.0114,
                    holders: 10080,
                    onChainMarketCap: 786707036,
                    img: "https://stakingcrypto.info/static/assets/coins/onyxcoin-logo.png",
                },
                {
                    name: "Cronos Coin",
                    symbol: "CRO",
                    price: 0.083,
                    holders: 292973,
                    onChainMarketCap: 8302700000,
                    img: "https://cryptologos.cc/logos/cronos-cro-logo.png",
                },
                {
                    name: "IOSToken",
                    symbol: "IOST",
                    price: 0.012,
                    holders: 41366,
                    onChainMarketCap: 252877908,
                    img: "https://upload.wikimedia.org/wikipedia/en/9/9d/IOStoken_logo.jpg",
                },
                {
                    name: "Bifrost",
                    symbol: "BFC",
                    price: 0.081,
                    holders: 3564,
                    onChainMarketCap: 324072000,
                    img: "https://s3.ap-northeast-2.amazonaws.com/thebifrost.io/logo/img_logo_big.png",
                },
                {
                    name: "HuobiToken",
                    symbol: "HT",
                    price: 5.3,
                    holders: 51765,
                    onChainMarketCap: 2650000000,
                    img: "https://cryptologos.cc/logos/huobi-token-ht-logo.png",
                },
                {
                    name: "BandToken",
                    symbol: "BAND",
                    price: 2.21,
                    holders: 33623,
                    onChainMarketCap: 221000000,
                    img: "https://www.bandprotocol.com/static/images/band-token-blue.svg",
                },
                {
                    name: "Smooth Love Potion",
                    symbol: "SLP",
                    price: 0.0033,
                    holders: 56557,
                    onChainMarketCap: 14134994,
                    img: "https://www.asiacryptotoday.com/wp-content/uploads/2021/07/smooth-love-potion-slp.jpg",
                },
                {
                    name: "Chroma",
                    symbol: "CHR",
                    price: 0.1917,
                    holders: 10390,
                    onChainMarketCap: 108747700,
                    img: "https://upload.wikimedia.org/wikipedia/fr/0/00/Logo_Chroma.jpg",
                },
                {
                    name: "HoloToken",
                    symbol: "HOT",
                    price: 0.0023,
                    holders: 136149,
                    onChainMarketCap: 399791149,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/2682.png",
                },
                {
                    name: "Maker",
                    symbol: "MKR",
                    price: 758.56,
                    holders: 93225,
                    onChainMarketCap: 741591771,
                    img: "https://play-lh.googleusercontent.com/2Ejh5f496Q0hvaaUyMVFM2lwhqQxvJptqsjoXj2wAS6PWVrTi2TpXGTymmuqNcD6N2yH",
                },
                {
                    name: "Swipe",
                    symbol: "SXP",
                    price: 0.3366,
                    holders: 26571,
                    onChainMarketCap: 96056275,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3w8wKDWJ2eNB21ky9U_nKaxFOCudladM4EqM--T9&s",
                },
                {
                    name: "Frax",
                    symbol: "FRAX",
                    price: 0.998,
                    holders: 7547,
                    onChainMarketCap: 2647848116,
                    img: "https://cryptologos.cc/logos/frax-frax-logo.png",
                },
                {
                    name: "Tellor Tributes",
                    symbol: "TRB",
                    price: 19.14,
                    holders: 6637,
                    onChainMarketCap: 45647215,
                    img: "https://s2.coinmarketcap.com/static/img/coins/200x200/4944.png",
                },
            ],
        },
    });
}
