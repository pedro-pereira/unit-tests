class Team {
    constructor(id, members){
        this.id = id;
        this.members = members;
    }

    toJSON(){
        return {
            id: this.id,
            members: this.members
        };
    }
}

module.exports = Team;