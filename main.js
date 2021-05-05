const search = document.getElementById('search');
const matchlist = document.getElementById('match-list');
 
const searchSates = async searchText => {
    const res = await fetch('../data/staes.json');
    const states = await res.json();


    let matches = states.filter(state =>{
        const regex = new RegExp(`^${searchText}`,'gi');
        return state.name.match(regex) || states.abbr.match(regex);
    });
    if(searchText === 0){
        matches = [];
        // matchlist.innerHTML = '';

    }
    outputHtml(matches);
    // console.log(matches);
};
const outputHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match =>`
        <div class="card card-body mb1">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
        </div>
        ` 
            ).join('');
            // console.log(html);
            matchlist.innerHTML = html;
    }
}

search.addEventListener('input' , () => searchSates(search.value));

// alert("w");