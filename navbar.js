const toggle = document.querySelector('.toggle-collapse');
const collapse = document.querySelector('.collapse-nav');
var collapseClasses = collapse.classList;
var toggleVisible = toggle.classList.contains("show-mobile");
var isHidden = collapseClasses.contains("hide-mobile");


function toggleNavbar() {
  
    if (toggleVisible === true) {
        collapse classes.toggle("hide-mobile");
    }

}

/*

switch (isHidden) {
            case true:
                collapseClasses.remove("hide-mobile");
                
                break;

            case false:
                collapseClasses.add("hide-mobile");
              
                break;
        }


toggle.addEventListener('click', toggleNavbar);*/



