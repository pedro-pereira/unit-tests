const fs = require("fs");

const Team = require("../models/team");

class TeamDAO {
    get(id) {
        const rawData = fs.readFileSync("data.json");
        const data = JSON.parse(rawData);

        const team = data.filter(team => team.id == id)[0];
        
        if(!team) throw Error("Team not found");
        
        return new Team(team.id, team.members);
    }
}

module.exports = TeamDAO;