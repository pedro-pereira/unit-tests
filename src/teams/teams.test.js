const retrieveTeamMembers = require("./teams");

describe("Team", function () {

    it("should return the teams members", function () {
        expect(retrieveTeamMembers(5)).toEqual(["Caio Nunes", "Pedro Henrique", "Ulisses Lopes"]);
    });

    it("should throw team not found", function () {
        // expect(() => retrieveTeamMembers(4)).toThrow("Team not found");
        expect(retrieveTeamMembers(4)).toThrow("Team not found");
    });

    it("should throw invalid ID", function () {
        // expect(() => retrieveTeamMembers()).toThrow("Team not found");
        // expect(() => retrieveTeamMembers()).toThrow("Invalid ID");
        expect(retrieveTeamMembers()).toThrow("Invalid ID");
    });

    it("verify first position", function () {
        expect(retrieveTeamMembers(5)[0]).toEqual("Caio Nunes");
    });

    it("verify first position", function () {
        expect(retrieveTeamMembers(5)[0]).toEqual("Pedro Henrique");
    });

})