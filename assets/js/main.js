// requires utilities.js
function flashElement(ele, callback) {
    ele.style.visibility = "hidden";
    setTimeout(() => {
        ele.style.visibility = "visible";
        setTimeout(() => {
            ele.style.visibility = "hidden";
                setTimeout(() => {
                    callback();
                    ele.style.visibility = "visible";
                }, 80);
        }, 70);
    }, 50);
}


function SALogoAnimation() {
    const logo = document.getElementById('site-logo');
    const rotate_config = ['0deg', '45deg', '90deg', '135deg', '-45deg', '-90deg', '-135deg']

    logo.style.transform = 'translate(-50%, -50%) rotate(' + rotate_config[Math.floor(Math.random() * rotate_config.length)] + ')';
    setRandInterval(() => {
        flashElement(logo, () => {logo.style.transform = 'translate(-50%, -50%) rotate(' + rotate_config[Math.floor(Math.random() * rotate_config.length)] + ')'});
    }, 3000, 8000);
}

function initPromptAnimation(prompts) {
    const prompts_container = document.getElementById('site-prompts-container');
    const gen_prompt_parameters = () => {
        const transition_time = Math.floor(Math.random() * Math.floor(window.innerWidth/100)) + 2;
        return {
            text: prompts[Math.floor(Math.random() * prompts.length)],
            time: transition_time,
            styles: {
                start: {
                    top:  String(Math.floor(Math.random() * 100)) + 'vh',
                    left: '0',
                    transform: 'translate(-100%, 0)',
                    transition: 'all ' + String(transition_time) + 's',
                    fontSize: String(Math.floor(Math.random() * 5)) + 'vh',
                    color: 'rgba(128,128,128,' + String(Math.random()) + ')'
                },
                end: {
                    left: '100vw',
                    transform: 'translate(100%, 0)'
                }
            }

        }
    }
    setInterval(() => {
        const el_parameters = gen_prompt_parameters();
        const el = createHTMLElement('p', el_parameters.text, {class: 'prompt'}); 
        

        Object.assign(el.style, el_parameters.styles.start);
        prompts_container.appendChild(el);
        setTimeout(() => {
            Object.assign(el.style, el_parameters.styles.end);
            setTimeout(() => {
                prompts_container.removeChild(el);
            }, el_parameters.time * 1000);
        }, 250);
    }, 50);
    
}

function main() {
    const prompts = ["施工中...", "Work in progress...", "진행중인 작업..."];
    const footer = document.getElementById('site-footer');

    // init footer
    setInterval(() => {
        footer.innerHTML = "STRANDING AIR" + " @ " + String(Date.now()); 
    }, 1);

    // init animations
    initPromptAnimation(prompts);
    SALogoAnimation();

    // pages
    const site_container = document.getElementById('site-container');
    const nav_home = document.getElementById('nav-home');
    const nav_about = document.getElementById('nav-about');
    const nav_contact = document.getElementById('nav-contact');

    const site_home = document.getElementById('site-logo');
    const site_about = document.getElementById('site-about');
    const site_contact = document.getElementById('site-contact');

    let current_page = "home";
    let current_page_ele = site_home;
    site_container.classList.add(current_page);

    // home
    nav_home.addEventListener('click', () => {
        flashElement(current_page_ele, () => {
            site_container.classList.remove(current_page);
            site_container.classList.add('home');
            current_page = 'home';
            current_page_ele = site_home;
        });
    });

    // about
    nav_about.addEventListener('click', () => {
        flashElement(current_page_ele, () => {
            site_container.classList.remove(current_page);
            site_container.classList.add('about');
            current_page = 'about';
            current_page_ele = site_about;
        });
    });

    // contact
    nav_contact.addEventListener('click', () => {
        flashElement(current_page_ele, () => {
            site_container.classList.remove(current_page);
            site_container.classList.add('contact');
            current_page = 'contact';
            current_page_ele = site_contact;
        });
    });
}

window.addEventListener('load', main);