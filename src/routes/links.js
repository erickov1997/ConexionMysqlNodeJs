const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/carreras", async (req, res) => {
  try {
    let alumnos = await pool.query("SELECT * FROM carrera");
    res.json(alumnos);
  } catch (error) {
    res.send(error)
  }

});

router.get("/carrera/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let alumno = await pool.query("SELECT * FROM carrera where id = ?", [id]);
    res.json(alumno);
  } catch (error) {
    res.send('ha ocurrido un error');
  }


});

router.post("/carreras", async (req, res) => {
  try {
    const { nombre } = req.body;
    const carrera = {
      nombre
    };
    await pool.query("INSERT INTO carrera set ?", [carrera]);
    res.send(200);
  } catch (error) {
    res.send('ha ocurrido un error');
  }
});

router.post("/upcarrera/:id", async (req, res) => {

  try {
    const { id } = req.params;
    console.log(id);
    const { nombre } = req.body;
    const upCarrera = {
      nombre
    };
    await pool.query("UPDATE carrera SET ? WHERE id = ?", [upCarrera, id])
    res.send(200);
  } catch (error) {
    res.send('ha ocurrido un error');

  }
})

router.get('/deleteCarrera/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM carrera WHERE id = ?", [id]);
    res.send("exito");
  } catch (error) {
    res.send('ha ocurrido un error');
  }

});

module.exports = router;
