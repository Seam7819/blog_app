import app from "./app";
import { prisma } from "./lib/prisma";


const PORT = process.env.PORT

async function main() {
    try{
        await prisma.$connect();
        console.log("Database Connected Successfully");

        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    }
    catch(err){
        console.error("An error occurred" ,err);
        await prisma.$disconnect(),
        process.exit(1)

    }
}

main()