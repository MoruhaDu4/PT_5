class FootballTeam {
    constructor(name, coach, homeStadium, formation, league, points, matchesPlayed, wins) {
        this.name = name;
        this.coach = coach;
        this.homeStadium = homeStadium;
        this.formation = formation;
        this.league = league;
        this.points = points;
        this.matchesPlayed = matchesPlayed;
        this.wins = wins;
    }

    winPercentage() {
        return (this.wins / this.matchesPlayed) * 100;
    }
}



module.exports = FootballTeam;

