/* ASSETS */
import '../sass/common.scss';
import '../sass/admin.scss';

import * as headerView from './views/headerView';

class AdminController {
    constructor() {
        this.init();
    }

    init() {
        /* EVENT LISTENERS */
        window.addEventListener('DOMContentLoaded', headerView.renderHeader('admin'));
    }
}

new AdminController();