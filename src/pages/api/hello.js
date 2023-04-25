export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    msg: 'Todo Correcto',
    method: req.method || 'No hay método'
  })
}
