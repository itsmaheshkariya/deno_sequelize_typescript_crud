import express, {Application} from "npm:express"
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts"
import { initDB } from "./models/index.ts";
import { UserRoutes } from "./routes/user.ts";
class App {
    public app: Application;
    public userRoutes: UserRoutes;
    constructor() {
        this.app = express();
        this.userRoutes = new UserRoutes();
        this.config();
        this.userRoutes.routes();
        this.app.use(this.userRoutes.router);
    }
    private config(): void {
        this.app.use(express.json());
    }
}
const { APP_PORT } = config();
const app = new App().app;
await initDB();
app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
})