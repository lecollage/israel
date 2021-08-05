import {Programs} from '~/scripts/programs';
import {Slider} from '~/scripts/slider';

class App {
    private readonly programs: Programs = new Programs();
    private readonly slider: Slider = new Slider();

    constructor() {}

    public async run() {
        await this.initApp();
    }

    private async initApp() {
        await this.programs.initPrograms();
        this.slider.initSlider();
    }
}

const app = new App();
app.run();
