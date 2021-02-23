const retrieveTeamMembers = require("./teams");

describe("Team", function () {

    it("should return the teams members", function () {
        expect(retrieveTeamMembers(5)).toEqual(["Caio Nunes", "Pedro Henrique", "Ulisses Lopes", "Caio Nunes"]);
    });

    it("should throw team not found", function () {
        expect(() => retrieveTeamMembers(4)).toThrow("Team not found");
    });

    it("should throw invalid ID", function () {
        // expect(() => retrieveTeamMembers()).toThrow("Team not found");
        expect(() => retrieveTeamMembers()).toThrow("Invalid ID");
    });

    it("should verify first position ", function () {
        // expect(retrieveTeamMembers(5)[0]).toEqual("Pedro Henrique");
        expect(retrieveTeamMembers(5)[0]).toEqual("Caio Nunes");
    });

    /* 
        Se o tamanho do array (original) e do conjunto (copy) são diferentes, 
        é pq há duplicidade, o que não deveria ser permitido
    */
    it("should verify duplicate ", function () {
        const original = retrieveTeamMembers(5);
        let copy = [...new Set(original)];
        expect(original.length).toEqual(copy.length);
    });
})