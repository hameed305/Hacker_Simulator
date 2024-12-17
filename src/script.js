// variables

let terminal = document.querySelector(".terminal");
let result_box = document.querySelector(".result");
let facebook = document.getElementById("facebook")
let insta = document.getElementById("insta")
let locat = document.getElementById("location")
let gmail = document.getElementById("gmail")
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let user_name = document.querySelector(".img h2");
let rand_1 = Math.floor(100 + 800 * Math.random())
let rand_2 = Math.floor(100 + 800 * Math.random())
let rand_3 = Math.floor(100 + 800 * Math.random())

function display() {
    user_name.innerHTML = input.value.toUpperCase()
    facebook.innerHTML = "Facebook : www.facebook.com/" + input.value + rand_1;
    locat.innerHTML = "Location : Quetta";
    insta.innerHTML = "Instagram : @" + input.value + rand_2;
    gmail.innerHTML = "Gmail id : " + input.value + rand_3 + "@gmail.com";
}

btn.addEventListener("click", function () {

    setInterval(() => {
        let p = document.querySelector(".terminal p");
        p.insertAdjacentText("beforeend", ".")
    }, 200);

    display();
    result_box.style.display = "none"

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(terminal.insertAdjacentHTML("afterbegin", `<p>Searching data from server</p>`))
        }, 500);
    })
    p1.then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(terminal.insertAdjacentHTML("afterbegin", `<p>Wait to fetch your info</p>`))
            }, 1200);
        }).then((value) => {
            console.log(value);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(terminal.insertAdjacentHTML("afterbegin", `<p>Checking your files</p>`))
                }, 2000);
            }).then((value) => {
                console.log(value);
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(terminal.insertAdjacentHTML("afterbegin", `<p>Starting to hack the files</p>`))
                    }, 2500);
                }).then((value) => {
                    console.log(value);
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(terminal.insertAdjacentHTML("afterbegin", `<p>Sending your files</p>`))
                        }, 3000);
                    }).then((value) => {
                        console.log(value);
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve(terminal.insertAdjacentHTML("afterbegin", `<p>finishing hacked setup</p>`))
                            }, 1200);
                        }).then((value) => {
                            console.log(value);
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve(terminal.insertAdjacentHTML("afterbegin", `<h1>Hacked <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>warning-sign</title><g fill="#ff0000"><path d="M45.521,39.04L27.527,5.134c-1.021-1.948-3.427-2.699-5.375-1.679-.717,.376-1.303,.961-1.679,1.679L2.479,39.04c-.676,1.264-.635,2.791,.108,4.017,.716,1.207,2.017,1.946,3.42,1.943H41.993c1.403,.003,2.704-.736,3.42-1.943,.743-1.226,.784-2.753,.108-4.017ZM23.032,15h1.937c.565,0,1.017,.467,1,1.031l-.438,14c-.017,.54-.459,.969-1,.969h-1.062c-.54,0-.983-.429-1-.969l-.438-14c-.018-.564,.435-1.031,1-1.031Zm.968,25c-1.657,0-3-1.343-3-3s1.343-3,3-3,3,1.343,3,3-1.343,3-3,3Z" fill="#ff0000"></path></g></svg></h1>`))
                                }, 1000);
                            }).then((value) => {
                                console.log(value);
                                return new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        result_box.style.display = "flex"
                                        terminal.style.display = "none";
                                        terminal.style.transition = "all 4s linear";
                                    }, 1500);
                                })
                            })

                        })
                    })
                })
            })
        })
    })
})

