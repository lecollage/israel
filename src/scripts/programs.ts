export class Programs {
    private readonly programsCommonClass = 'programs__input_radio';
    private readonly contentCommonClass = 'programs__content_item_';
    private readonly contentInitShowIndex = 1;

    constructor() {

    }

    public initPrograms(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            try {
                const programs: HTMLElement = document.getElementById('programs');
                const buttonsCollection: HTMLCollectionOf<Element> = programs ? programs.getElementsByClassName(this.programsCommonClass) || null : null;

                if (buttonsCollection) {
                    this.showInitialContent(buttonsCollection);

                    for (let i = 0; i < buttonsCollection.length; i++) {
                        buttonsCollection[i].addEventListener('click', () => {
                            this.showOnlyOneContent(buttonsCollection, i);
                        });
                    }
                }
            } catch (err) {
                reject(err);
            }

            resolve();
        });
    }

    private showInitialContent(buttonsCollection: HTMLCollectionOf<Element>) {
        buttonsCollection[this.contentInitShowIndex].setAttribute('checked', 'true');
        this.showOnlyOneContent(buttonsCollection, this.contentInitShowIndex);
    }

    private showOnlyOneContent(buttonsCollection: HTMLCollectionOf<Element>, showIndex: number) {
        this.hideAllContents(buttonsCollection);
        this.showButtonContent(buttonsCollection, showIndex);
    }

    private getProgramsContentById(buttonsCollection: HTMLCollectionOf<Element>, index: number): HTMLElement {
        const lastNumbersRegExp = /[0-9]+$/gm;
        const lastPartOfId: string = buttonsCollection[index] ? buttonsCollection[index].id.match(lastNumbersRegExp)[0] : '';
        const id = `${this.contentCommonClass}${lastPartOfId}`;

        return document.getElementById(id);
    }

    private showButtonContent(buttonsCollection: HTMLCollectionOf<Element>, showIndex: number) {
        const buttonContent: HTMLElement = this.getProgramsContentById(buttonsCollection, showIndex);
        if (buttonContent) {
            buttonContent.classList.remove('hidden');
        }
    }

    private hideAllContents(buttonsCollection: HTMLCollectionOf<Element>) {
        for (let i = 0; i < buttonsCollection.length; i++) {
            const buttonContent: HTMLElement = this.getProgramsContentById(buttonsCollection, i);
            if (buttonContent) {
                buttonContent.classList.add('hidden');
            }
        }
    }
}
