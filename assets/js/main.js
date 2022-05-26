// requires utilities.js

function SALogoAnimation() {
    const logo = document.getElementById('site-logo');
    const rotate_config = ['45deg', '90deg', '135deg', '180deg', '225deg', '270', '315deg']

    const do_transform = () => {
        logo.style.visibility = "hidden";
        setTimeout(() => {
            logo.style.visibility = "visible";
            setTimeout(() => {
                logo.style.visibility = "hidden";
                    setTimeout(() => {
                        logo.style.visibility = "visible";
                        logo.style.transform = 'translate(-50%, -50%) rotate(' + rotate_config[Math.floor(Math.random() * rotate_config.length)] + ')'
                    }, 80);
            }, 70);
        }, 50);
    }

    setRandInterval(() => {
        do_transform();
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
                    fontSize: String(Math.floor(Math.random() * 12)) + 'vh',
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
        }, 1000);
    }, 500);
    
}

function main() {
    const prompts = ["施工中...", "Work in progress...", "진행중인 작업..."];
    const footer = document.getElementById('site-footer');

    setInterval(() => {
        footer.innerHTML = "STRANDING AIR" + " @ " + String(Date.now()); 
    }, 1);
    initPromptAnimation(prompts);
    SALogoAnimation();
}

window.addEventListener('load', main);