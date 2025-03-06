import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", 
  database: "estudiantes",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
db.connect(err => {
  if (err) {
      console.log('Error al conectar a la base de datos:', err);
      return;
  }
  console.log('Conexión a la base de datos exitosa');
});

export default pool;
