var toggle = document.getElementById("#toggle-nav")
var collapse = document.getElementById("#nav-collapse");
var collapseClasses = collapse.classList;


function toggleNavbar() {
    let toggleVisible = toggle.classList.contains("show-mobile");
    let isHidden = collapseClasses.contains("hide-mobile");
    if (toggleVisible === true) {
        switch (isHidden) {
            case true:
                collapseClasses.remove("hide-mobile");
                console.log(collapseClasses);
                break;

            case false:
                collapseClasses.add("hide-mobile");
                console.log(collapseClasses);
                break;
        }

    }

}
