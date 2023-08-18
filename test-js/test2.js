function divideIntoTeams(weights) {
    let team1 = 0;
    let team2 = 0;

    for (let i = 0; i < weights.length; i++) {
        if (i % 2 === 0) {
            team1 += weights[i];
        } else {
            team2 += weights[i];
        }
    }

    return [team1, team2];
}

const inputWeights = [60, 40, 55, 75, 64];
const teamWeights = divideIntoTeams(inputWeights);
console.log(teamWeights);