//Define Variables
var Btn = document.getElementById('submit');
var usernameInput = document.getElementById('username');
var platformInput = document.getElementById('platform');
var result = document.querySelector('.result');


//Fetch Players
const fetchPlayers = async (username, platform) => {
    const call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/${platform}/${username}`, 
	{
        headers: {
            'TRN-Api-Key': 'b3cdd27a-0b0a-4b51-9114-8bb2834cb715'
        }
    });

    const data = await call.json();
    return { data }
};


  
//Show all the data using usernameInput and platformInput
const showData = () => {
    fetchPlayers(usernameInput.value, platformInput.value).then((respond) => {
        const markup = 
		`
            <div class="stats">
                <h1>${respond.data.epicUserHandle}'s profile (${respond.data.platformNameLong})</h1>
                <div class="row">
                    <div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[8].value}</h5>
                            <h6>Wins</h6>
                        </div>
                    </div>
				 	
					
                    <div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[10].value}</h5>
                            <h6>Kills</h6>
                        </div>
                    </div>

					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[9].value}</h5>
                            <h6>Win %</h6>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[6].value}</h5>
                            <h6>Score</h6>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[11].value}</h5>
                            <h6>K/D Ratio</h6>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[7].value}</h5>
                            <h6>Total Matches Played</h6>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[0].value}</h5>
                            <h6>Top 5's</h6>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[3].value}</h5>
                            <h6>Top 10's</h6>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[1].value}</h5>
                            <h6>Top 3's</h6>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[5].value}</h5>
                            <h6>Top 25's</h6>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[2].value}</h5>
                            <h6>Top 6's</h6>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h5>${respond.data.lifeTimeStats[4].value}</h5>
                            <h6>Top 12's</h6>
                        </div>
                    </div>
                </div>
				
                </div>
               </div>
            </div>
        `;
        result.insertAdjacentHTML('beforeend', markup);
    }) //Display error on console
        .catch(err => console.log(err));
};

const clearField = () => {
    usernameInput.value = '';
    platformInput.value = 'Choose Platform';
};

const clearPlayer = () => {
    result.innerHTML = '';
}

Btn.addEventListener('click', function () {
    showData();
    clearPlayer();
});


//Fetch JSON
let apiKey = "b3cdd27a-0b0a-4b51-9114-8bb2834cb715"

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.fortnitetracker.com/v1/profile/pc/DanThe_GamerMan"

fetch(proxyurl + url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "TRN-Api-Key": apiKey,
  }
}).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  });//Fetch JSON
  