const TeamController = require("../../src/controllers/team");
const TeamDAO = require("../../src/daos/team");
const {MockRequest, MockResponse} = require("../../src/utils/interceptors");

describe("Team", function () {

    it("should return a status 200 and a team with id and members", function () {
        // Same as having /teams/5
        let request = new MockRequest();
        request.setParam("id", 5);
        
        let response = new MockResponse();

        const teamDAO = new TeamDAO();
        const teamController = new TeamController(teamDAO);

        const {status, data} = teamController.show(request, response);

        expect(status).toBe(200);

        expect(data).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                members: expect.any(Array)
            })
        );
    });

    it("should return status 400 and error team not found", function () {
        let request = new MockRequest();
        request.setParam("id", 4);
        
        let response = new MockResponse();

        const teamDAO = new TeamDAO();
        const teamController = new TeamController(teamDAO);

        const {status, data} = teamController.show(request, response);

        expect(status).toBe(400);

        expect(data).toEqual(
            expect.objectContaining({
                error: "Team not found",
            })
        );
    });

    it("should return status 400 and error invalid ID", function () {
        let request = new MockRequest();
        request.setParam("id", null);
        
        let response = new MockResponse();

        const teamDAO = new TeamDAO();
        const teamController = new TeamController(teamDAO);

        const {status, data} = teamController.show(request, response);

        expect(status).toBe(400);

        expect(data).toEqual(
            expect.objectContaining({
                error: "Invalid ID",
            })
        );
    });

    it("should verify first member", function () {
        let request = new MockRequest();
        request.setParam("id", 5);
        
        let response = new MockResponse();

        const teamDAO = new TeamDAO();
        const teamController = new TeamController(teamDAO);

        const {data} = teamController.show(request, response);

        expect(data.members[0]).toEqual("Caio Nunes");
    });
    
    it("should verify duplicate", function () {
        let request = new MockRequest();
        request.setParam("id", 5);
        
        let response = new MockResponse();

        const teamDAO = new TeamDAO();
        const teamController = new TeamController(teamDAO);

        const {data} = teamController.show(request, response);

        const members = data.members;
        const membersUnique = [...new Set(members)];
        
        expect(members.length).toEqual(membersUnique.length);
    });
})