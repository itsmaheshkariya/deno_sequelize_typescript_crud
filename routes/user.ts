import express, {Request, Response} from "npm:express"
import { UserController } from "../controller/user.ts";

export class UserRoutes {
    public router: express.Router;
    public userController: UserController;
    constructor() {
        this.userController = new UserController();
        this.router = express.Router();
        this.routes();
    }
    public routes() {
        this.router.get('/', async (_req: Request, res: Response) => {
            const users = await this.userController.getAllUsers();
            res.json(users);
        });
        this.router.get('/:id', async (req: Request, res: Response) => {
            const user = await this.userController.getUserById(req.params.id);
            res.json(user);
        });
        this.router.post('/', async (req: Request, res: Response) => {            
            const user = await this.userController.createUser(req.body);
            res.json(user);
        });
        this.router.put('/:id', async (req: Request, res: Response) => {
            const user = await this.userController.updateUser(req.params.id, req.body);
            res.json(user);
        });
        this.router.delete('/:id', async (req: Request, res: Response) => {
            const user = await this.userController.deleteUser(req.params.id);
            res.json(user);
        });
    }
}
