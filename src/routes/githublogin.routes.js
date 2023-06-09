import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
    res.render("github-login");
});

router.get("/", (req, res) => {
    res.redirect("/products");
});

router.get("/error", (req, res) => {
    res.render("error", {error: "Error tratando de loguearse con github"});
});

export default router;

