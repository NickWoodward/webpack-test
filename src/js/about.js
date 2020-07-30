/* ASSETS */
import '../sass/common.scss';
import '../sass/about.scss';

import * as headerView from './views/headerView';

class AboutController {
    constructor() {
        this.init();
    }

    init() {
        /* EVENT LISTENERS */
        window.addEventListener('DOMContentLoaded', headerView.renderHeader('about'));
    }
}

new AboutController();