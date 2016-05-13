// Private Methods
function extendConfig(defaults, options) {
    let prop, extended = {};

    for (prop in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
            extended[prop] = defaults[prop];
        }
    }

    for (prop in options) {
        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
            extended[prop] = options[prop];
        }
    }

    return extended;
};

export default class Concertina {
    constructor(el, options) {
        // Config
        this.element = el; // TODO: Get this to work with multiple elements - document.querySelectorAll('blah');
        this.defaults = {
            'blockClass': '.Concertina',
            'tabClass': '.Concertina-tab',
            'tabActiveClass': '.is-selected',
            'panelClass': '.Concertina-panel',
            'panelActiveClass': '.is-visible'
        };
        this.options = extendConfig.bind(this)(this.defaults, options);
        this.tabs = this.element.querySelectorAll(this.options.tabClass);
        this.panels = this.element.querySelectorAll(this.options.panelClass);
    }

    init() {
        //TODO: Set aria-controls attr on tabs and aria-labelledby attr on panels.
        this.setTabsInactive();
        this.setPanelsInactive();

        this.element.addEventListener('click', (e) => {
            if (e.target.classList.contains(this.options.tabClass.replace('.', ''))){
                e.preventDefault();

                this.setTabsInactive();
                this.setPanelsInactive();
                this.setTabState(e.target);
                this.setPanelState(e.target.getAttribute('href').replace('#', ''));
            }
        });
    }

    // Disable all tabs.
    setTabsInactive() {
        for (let i = 0; i < this.tabs.length; i += 1) {
            this.tabs[i].setAttribute('aria-selected', 'false');
            this.tabs[i].classList.remove(this.options.tabActiveClass.replace('.', ''));
        }
    }

    // Set state on a single tab.
    setTabState(el) {
        this.setTabsInactive();

        el.setAttribute('aria-selected', 'true');
        el.classList.add(this.options.tabActiveClass.replace('.', ''));
    }

    // Disable all panels.
    setPanelsInactive() {
        for (let i = 0; i < this.panels.length; i += 1) {
            this.panels[i].setAttribute('aria-hidden', 'true');
            this.panels[i].classList.remove(this.options.panelActiveClass.replace('.', ''));
        }
    }

    // Set state on a single panel.
    setPanelState(id) {
        let el = document.getElementById(id);

        el.setAttribute('aria-hidden', 'false');
        el.classList.add(this.options.panelActiveClass.replace('.', ''));
    }
}
