import '../styles/common.scss';
import '../styles/about-program.scss';
import '../styles/footer.scss';
import '../styles/header.scss';
import '../styles/programs.scss';

import {Programs} from '~/scripts/programs';

class App {
    private programs: Programs = null;

    constructor() {
        this.programs = new Programs();
    }

    public run(): void {
        const version = 1;
        console.log('started', version);

        this.initApp();
    }

    private initApp() {
        this.programs.initPrograms();
    }
}

const app = new App();
app.run();
