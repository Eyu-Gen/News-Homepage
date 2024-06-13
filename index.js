document.getElementById("menuBtn").addEventListener("click", function() {
    (document.getElementById("navSideBar")).style.right = "0";
    (document.getElementById("overlay")).style.display = "block";
    document.body.style.overflow = "hidden";
    });
    
    document.getElementById("menuCloseBtn").addEventListener("click", function() {
        (document.getElementById("navSideBar")).style.right = "-70%";
        (document.getElementById("overlay")).style.display = "none";
});