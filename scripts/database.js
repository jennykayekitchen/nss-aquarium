const database = {
    fish: [
        {
            id: 1,
            image: "https://cdn.mos.cms.futurecdn.net/4UdEs7tTKwLJbxZPUYR3hF.jpg",
            name: "Bart",
            food: "crustaceans",
            size: "3 inches",
            species: "Clownfish",
            harvestedFrom: "United States"
             
        },
        {
            id: 2,
            image: "https://www.liveaquaria.com/images/categories/large/lg_70158_Blue_Gold_Damselfish.jpg",
            name: "Lisa",
            food: "crustaceans",
            size: "3 inches",
            species: "Blue and Gold Damselfish",
            harvestedFrom: "United States" 
        },
        {
            id: 3,
            image: "https://www.liveaquaria.com/images/categories/large/lg_26143_Longnose_Hawkfish.jpg",
            name: "Marge",
            food: "crustaceans",
            size: "3 inches",
            species: "Longnose Hawkfish",
            harvestedFrom: "United States" 
        },
        {
            id: 4,
            image: "https://www.liveaquaria.com/images/categories/product/lg-0211201-075.jpg",
            name: "Homer",
            food: "crustaceans",
            size: "3 inches",
            species: "Redfin Wrasse",
            harvestedFrom: "United States" 
        },
        {
            id: 5,
            image: "https://www.liveaquaria.com/images/categories/large/lg_80388_Blue_Sapphire_Damselfish.jpg",
            name: "Maggie",
            food: "crustaceans",
            size: "3 inches",
            species: "Blue Sapphire Damselfish",
            harvestedFrom: "United States" 
        },
        {
            id: 6,
            image: "https://www.liveaquaria.com/images/categories/product/lg-75683-CarpentersFlasherWrasse-Male.jpg",
            name: "Ned",
            food: "crustaceans",
            size: "3 inches",
            species: "Carpenter's Flasher Wrasse",
            harvestedFrom: "United States" 
        },
        {
            id: 7,
            image: "https://www.liveaquaria.com/images/categories/product/lg91980OrchidDottyback.jpg",
            name: "Mr. Burns",
            food: "crustaceans",
            size: "3 inches",
            species: "Proaquatix Orchid Dottyback",
            harvestedFrom: "United States" 
        },
        {
            id: 8,
            image: "https://www.liveaquaria.com/images/categories/product/lg_91967_CinnamonClown.jpg",
            name: "Sideshow Bob",
            food: "crustaceans",
            size: "3 inches",
            species: "Proaquatix Captive-Bred Cinnamon Clownfish",
            harvestedFrom: "United States" 
        }
        
    ]
};

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

