import app from "./src/server";

app.listen(app.get("port"), () =>{
    console.log(`Conectado al puerto ${app.get('port')}`);
});