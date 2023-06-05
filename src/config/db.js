const { Pool } = require(`pg`);

const pool = new Pool ({ 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    
    
    
});

const initDatabase = async () =>{
await pool.query(`
    CREATE  TABLE IF NOT EXISTS experiencias ( 
            id SERIAL PRIMARY Key,
            titulo VARCHAR(255) NOT NULL,
            tipo VARCHAR(255) NOT NULL,
            descricao TEXT NOT NULL,
            "anoInicio" INT NOT NULL,
            "anoFim" INT
        )
    `);
    
    await pool.query(`
    CREATE  TABLE IF NOT EXISTS portfolio ( 
        id SERIAL PRIMARY Key,
        title VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL,
        image VARCHAR NOT NULL
    )
    `);
        
    await pool.query(`
    CREATE  TABLE IF NOT EXISTS informacoes ( 
        id INT  PRIMARY Key,
        foto VARCHAR(255) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        cargo VARCHAR NOT NULL,
        resumo text NOT NULL
    )
    `);
            
    await pool.query(`
    CREATE  TABLE IF NOT EXISTS usuarios ( 
        id INT PRIMARY KEY,
        email VARCHAR (255) NOT NULL,
        password VARCHAR (255) NOT NULL
        );
    
    `)
    console.log('banco de dados inicializado com sucesso!'); 
};
    
module.exports = { pool, initDatabase};