if("serviceWorker" in navigator){
    navigator.serviceWorker.register("ServiceWorker.js").then(registration =>{
        console.log("Service Worker registered!");
        console.log(registration);
    }).catch(error =>{
        console.log("Service Worker Failed to register!");
        console.log(error);
    })
}