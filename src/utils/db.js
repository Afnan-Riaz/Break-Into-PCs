const {name,password}=process.env;
export const connStr=`mongodb+srv://${name}:${password}@cluster0.w7a1bfy.mongodb.net/mainDB?retryWrites=true&w=majority`;