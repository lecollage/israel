import '../styles/common.scss';
import '../styles/about-program.scss';
import '../styles/footer.scss';
import '../styles/header.scss';
import '../styles/programs.scss';
import '../styles/want-to-go.scss';
import '../styles/how-to-go.scss';

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
