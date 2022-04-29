const { Router } = require("express");
const router = Router();
const { pool } = require("../DB/config");

router.delete("/delete", async (req, res) => {
  let cliente = await pool.connect();
  try {
    const { nombre_usuario } = req.body;    
    console.log(nombre_usuario)
    let result = await cliente.query(
      `DELETE FROM usuarios WHERE nombre_usuario =$1`,
      [nombre_usuario]
    );
    res.json(result);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "Internal error server" });
  } finally {
    cliente.release(true);
  }
});

module.exports = router;