import { Router } from "express";

const router = Router();
 
router.get("/", (req, res) => {
    res.render("./pages/index");
});
router.get("/dashboard", (req, res) => { 
    res.render("./pages/dashboard");
});

router.get("/MizerKids", (req, res) => { 
    res.render("./pages/MizerKids");
});

router.get("/MizerBenders", (req, res) => { 
    res.render("./pages/MizerBenders");
});

router.get("/MizerKids-Pulpo", (req, res) => { 
    res.render("./pages/MizerKids-Pulpo");
});

router.get("/Pedrito", (req, res) => { 
    res.render("./pages/Pedrito");
});

router.get("/report", (req, res) => { 
    res.render("report");
});

router.get("/settings", (req, res) => { 
    res.render("settings");
});

router.get("/consumption", (req, res) => { 
    res.render("consumption"); 
});

 export default router;