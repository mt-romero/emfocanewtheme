var toggle = document.querySelector("#toggle-nav")
var collapse = document.querySelector("#nav-collapse");
var collapseClasses = collapse.classList;


function toggleNavbar() {
    let toggleVisible = toggle.classList.contains("show-mobile");
    let isHidden = collapseClasses.contains("hide-mobile");
    if (toggleVisible === true) {
        switch (isHidden) {
            case true:
                collapseClasses.remove("hide-mobile");
                
                break;

            case false:
                collapseClasses.add("hide-mobile");
              
                break;
        }

    }

}
toggle.addEventListener('click', toggleNavbar);
toggle.addEventListener('pointerdown', toggleNavbar);

