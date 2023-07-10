async function getAnimetrendData() {

    return await fetch("https://kitsu.io/api/edge/trending/anime")
        .then(data => data.json())
        .then(data => {
            
            const animeList = data.data;

            if(!animeList)return [];
            
            const relevantData = animeList.map(data => `${data.attributes.canonicalTitle}`); //, ${data.attributes.nextRelease}`);

            console.log({relevantData});

            document.getElementById("treniding").innerHTML = relevantData.map(data => `<li>${data} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));

}

async function getAnimeScheduleData() {

    return await fetch("https://api.jikan.moe/v4/schedules")
        .then(data => data.json())
        .then(data => {
            
            const animeList = data.data;

            if(!animeList)return [];
            
            const relevantData = animeList.map(data => `${data.aired.from}, ${data.title}`);

            console.log({relevantData});

            document.getElementById("schedule").innerHTML = relevantData.map(data => `<li>${data} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));

}

getAnimetrendData();
getAnimeScheduleData();