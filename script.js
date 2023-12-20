const accordion=document.querySelector(".accordion")

accordion.addEventListener("click",(e)=>{
    const panel=e.target.closest(".panel")
    console.log(panel);
    toggle_accordion(panel);
})

function toggle_accordion(panel){
    const panel_container=panel.querySelector(".header__panel");
    const content=panel.querySelector(".content__panel");
    const isExpanded=panel_container.getAttribute("aria-expanded");
    const sibling=siblings(panel)
    sibling.map(hide);
    console.log(isExpanded);
    if(isExpanded==="true"){
        console.log("yes");
        panel_container.setAttribute("aria-expanded","false")
        content.setAttribute("aria-hidden","true")
        console.log(panel_container);
        console.log(content);
    }
    else{
        panel_container.setAttribute("aria-expanded",true)
        content.setAttribute("aria-hidden",false)
    }  
}

const siblings=(panel)=> [...panel.parentNode.parentNode.querySelectorAll(".panel")].filter(p=> p!=panel);

function hide(panel){
    panel
        .querySelector(".header__panel")
        .setAttribute("aria-expanded","false")
    panel
    .querySelector(".content__panel")
    .setAttribute("aria-hidden","true")
}