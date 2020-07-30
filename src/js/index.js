import * as headerView from './views/headerView';

/* ASSETS */
import '../sass/index.scss';

class IndexController {
    constructor() {
        this.init();
    }

    init() {
        /* EVENT LISTENERS */
        window.addEventListener('DOMContentLoaded', () => headerView.renderHeader('index'));       
    }
}

new IndexController();