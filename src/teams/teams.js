'use strict';

const fs = require("fs");

function retrieveTeamMembers(teamId){
    try { 
        if(!teamId || isNaN(parseInt(teamId))) throw Error("Invalid ID");

        //Parse team ID to integer
        const id = parseInt(teamId);
        
        //Read file
        const rawData = fs.readFileSync("data.json");
        const data = JSON.parse(rawData);
    
        //Find team on array
        const team = data.equipes.filter(equipe => equipe.id === id)[0];
    
        if(!team){
            throw Error("Team not found");
        }
    
        return team.members;
    } catch (err){
        throw Error(err);
    }
}

module.exports = retrieveTeamMembers;