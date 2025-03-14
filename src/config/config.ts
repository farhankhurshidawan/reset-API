import { config as conf } from "dotenv";

// ; lazmi lagana hy config() kay end pay
conf();

const _config={
    port:process.env.PORT,
    databaseUrl:process.env.MONGO_CONNECTION_STRING,
}

// freeze mean read only
export const config=Object.freeze(_config)