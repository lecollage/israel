import {Programs} from '~/scripts/programs';

class App {
    private programs: Programs = null;

    constructor() {
        this.programs = new Programs();
    }

    public async run() {
        await this.initApp();
    }

    private async initApp() {
        await this.programs.initPrograms();
    }
}

const app = new App();
app.run();
