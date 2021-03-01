class TeamController {
    
    constructor(service){
        this.service = service;
    }

    show(request, response) {
        const { id } = request.params;

        try {
            if(!id || isNaN(parseInt(id))) throw Error("Invalid ID");

            const team = this.service.get(id);
            return response.status(200).json(team.toJSON());
        } catch (err){
            return response.status(400).json({ error: err.message });
        }
    }
}

module.exports = TeamController;