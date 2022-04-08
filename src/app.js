import Utils from "./services/Utils";

import Home from './views/pages/Home';
import Dogs from './views/pages/Dogs';
import Cats from './views/pages/Cats';
import Contact from './views/pages/Contact';

let routes = {
    '/': Home,
    '/dogs': Dogs,
    '/cats': Cats,
    '/contact': Contact
}

const router = async () => {
    const content = null || document.getElementById('app');
    
    let request = Utils.parseRequestURL();
    
    let parsedURL = (request.resource ? '/' + request.resource: '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');

    let page = routes[parsedURL] ? routes[parsedURL] : Err;
    
    content.innerHTML =  await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);