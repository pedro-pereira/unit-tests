const { Router } = require("express");

const routes = Router();

const TeamDAO = require("./daos/team");
const TeamController = require("./controllers/team");

const teamDAO = new TeamDAO();
const teamController = new TeamController(teamDAO);

routes.get("/teams/:id", (req, res) => teamController.show(req, res));

module.exports = routes;