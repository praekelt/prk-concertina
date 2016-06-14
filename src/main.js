require('./styles/default/concertina.scss');

export default class Concertina {
    constructor(el, customOptions) {
        // Config
        this.element = el; // TODO: Get this to work with multiple elements - document.querySelectorAll('blah');
        this.options = {
            'blockClass': '.Concertina',
            'tabClass': '.Concertina-tab',
            'tabActiveClass': '.is-selected',
            'panelClass': '.Concertina-panel',
            'panelActiveClass': '.is-visible'
        };

        for (let prop in customOptions) {
            this.options[prop] = customOptions[prop];
        }

        this.tabs = [...this.element.querySelectorAll(this.options.tabClass)];
        this.panels = [...this.element.querySelectorAll(this.options.panelClass)];
    }

    init() {
        //TODO: Set aria-controls attr on tabs and aria-labelledby attr on panels.

        this.setTabsInactive();
        this.setPanelsInactive();

        this.element.addEventListener('click', (e) => {
            if (this.tabs.includes(e.target)){
                e.preventDefault();
                this.setTabState(e.target);
                this.setPanelState(e.target.getAttribute('href'));
            }
        });
    }

    // Set state on a single tab.
    setTabState(el) {
        this.setTabsInactive();
        this.toggleState(el, true);
    }

    // Set state on a single panel.
    setPanelState(id) {
        id = id.replace('#', '');
        let el = this.panels.find(elem => elem.id == id);
        this.setPanelsInactive();
        this.toggleState(el, true);
    }

    // Disable all tabs.
    setTabsInactive() {
        this.tabs.map(elem => this.toggleState(elem, false));
    }

    // Disable all panels.
    setPanelsInactive() {
        this.panels.map(elem => this.toggleState(elem, false));
    }

    // Toggle the active state.
    toggleState(el, state) {
        let className = '';
        if (this.tabs.includes(el)) {
            el.setAttribute('aria-selected', state);
            className = this.options.tabActiveClass.replace('.', '');
        }
        if (this.panels.includes(el)) {
            el.setAttribute('aria-hidden', !state);
            className = this.options.panelActiveClass.replace('.', '');
        }
        state ? el.classList.add(className) : el.classList.remove(className);
    }
}
