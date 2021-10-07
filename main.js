document.getElementById("day").onclick = () => {
    
    text();
    fetch("data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            document.getElementById("work-hour").innerHTML = result[0].timeframes.daily.current + "hrs";
            document.getElementById("prev-hour").innerHTML = "Previous - " + result[0].timeframes.daily.previous + "hrs";
            //play

            document.getElementById("play-hr").innerHTML = result[1].timeframes.daily.current + "hrs";
            document.getElementById("play-prev").innerHTML = "Previous - " + result[1].timeframes.daily.previous + "hrs";

            //study
            document.getElementById("study-hr").innerHTML = result[2].timeframes.daily.current + "hrs";
            document.getElementById("study-prev").innerHTML = "Previous - " + result[2].timeframes.daily.previous + "hrs";

            //Exercise
            document.getElementById("exe-hr").innerHTML = result[3].timeframes.daily.current + "hrs";
            document.getElementById("exe-prev").innerHTML = "Previous - " + result[3].timeframes.daily.previous + "hrs";
            //social 
            document.getElementById("social-hr").innerHTML = result[4].timeframes.daily.current + "hrs";
            document.getElementById("social-prev").innerHTML = "Previous - " + result[4].timeframes.daily.previous + "hrs";
            //self-care
            document.getElementById("sc-hr").innerHTML = result[5].timeframes.daily.current + "hrs";
            document.getElementById("sc-prev").innerHTML = "Previous - " + result[5].timeframes.daily.previous + "hrs";
            //end of day
        });

};


document.getElementById("week").onclick = () => {
    text1();
    fetch("data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            //work
            document.getElementById("work-hour").innerHTML = result[0].timeframes.weekly.current + "hrs";
            document.getElementById("prev-hour").innerHTML = "Last week - " + result[0].timeframes.weekly.previous + "hrs";
            //play
        
            document.getElementById("play-hr").innerHTML = result[1].timeframes.weekly.current + "hrs";
            document.getElementById("play-prev").innerHTML = "Last week - " + result[1].timeframes.weekly.previous + "hrs";
        
            //study
            document.getElementById("study-hr").innerHTML = result[2].timeframes.weekly.current + "hrs";
            document.getElementById("study-prev").innerHTML = "Last week - " + result[2].timeframes.weekly.previous + "hrs";
        
            //Exercise
            document.getElementById("exe-hr").innerHTML = result[3].timeframes.weekly.current + "hrs";
            document.getElementById("exe-prev").innerHTML = "Last week - " + result[3].timeframes.weekly.previous + "hrs";
            //social 
            document.getElementById("social-hr").innerHTML = result[4].timeframes.weekly.current + "hrs";
            document.getElementById("social-prev").innerHTML = "Last week - " + result[4].timeframes.weekly.previous + "hrs";
            //self-care
            document.getElementById("sc-hr").innerHTML = result[5].timeframes.weekly.current + "hrs";
            document.getElementById("sc-prev").innerHTML = "Last week - " + result[5].timeframes.weekly.previous + "hrs";
        });
    
};

document.getElementById("month").onclick = () => {
    text2();
    fetch("data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            document.getElementById("month").style.color = "white";
            //work
            document.getElementById("work-hour").innerHTML = result[0].timeframes.monthly.current + "hrs";
            document.getElementById("prev-hour").innerHTML = "Last month - " + result[0].timeframes.monthly.previous + "hrs";
            //play
        
            document.getElementById("play-hr").innerHTML = result[1].timeframes.monthly.current + "hrs";
            document.getElementById("play-prev").innerHTML = "Last month - " + result[1].timeframes.monthly.previous + "hrs";
        
            //study
            document.getElementById("study-hr").innerHTML = result[2].timeframes.monthly.current + "hrs";
            document.getElementById("study-prev").innerHTML = "Last month - " + result[2].timeframes.monthly.previous + "hrs";
        
            //Exercise
            document.getElementById("exe-hr").innerHTML = result[3].timeframes.monthly.current + "hrs";
            document.getElementById("exe-prev").innerHTML = "Last month - " + result[3].timeframes.monthly.previous + "hrs";
            //social 
            document.getElementById("social-hr").innerHTML = result[4].timeframes.monthly.current + "hrs";
            document.getElementById("social-prev").innerHTML = "Last month - " + result[4].timeframes.monthly.previous + "hrs";
            //self-care
            document.getElementById("sc-hr").innerHTML = result[5].timeframes.monthly.current + "hrs";
            document.getElementById("sc-prev").innerHTML = "Last month - " + result[5].timeframes.monthly.previous + "hrs";
        });
    
};

function text() {
    document.getElementById("day").style.color = "white";
    document.getElementById("week").style.color = "hsl(235, 45%, 61%)";
    document.getElementById("month").style.color = "hsl(235, 45%, 61%)";
}

function text1() {
    document.getElementById("day").style.color = "hsl(235, 45%, 61%)";
    document.getElementById("week").style.color = "white";
    document.getElementById("month").style.color = "hsl(235, 45%, 61%)";
}

function text2() {
    document.getElementById("day").style.color = "hsl(235, 45%, 61%)";
    document.getElementById("week").style.color = "hsl(235, 45%, 61%)";
    document.getElementById("month").style.color = "white";
}