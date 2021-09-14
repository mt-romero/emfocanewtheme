var toggle = document.querySelector("#toggle-nav")
var collapse = document.querySelector("#nav-collapse");
var collapseClasses = collapse.classList;
var toggleVisible = toggle.classList.contains("show-mobile");
var isHidden = collapseClasses.contains("hide-mobile");


function toggleNavbar() {
    preventDefault();
  
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



