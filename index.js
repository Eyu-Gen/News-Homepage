document.getElementById("menuBtn").addEventListener("click", function() {
    (document.getElementById("navSideBar")).style.display = "block";
    (document.getElementById("navSideBar")).style.touchAction = "auto";
    (document.getElementById("navSideBar")).style.right = "0";
    (document.getElementById("overlay")).style.display = "block";
    document.body.style.overflow = "hidden";
    });
    
    document.getElementById("menuCloseBtn").addEventListener("click", function() {
        (document.getElementById("navSideBar")).style.right = "-70%";
        (document.getElementById("navSideBar")).style.touchAction = "none";
        (document.getElementById("overlay")).style.display = "none";
        document.body.style.overflow = "scroll";
});