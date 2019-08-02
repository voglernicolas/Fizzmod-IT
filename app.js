var xhr = new XMLHttpRequest

xhr.addEventListener("readystatechange", () => {
    console.log(`Nuevo estado ${xhr.readyState} `);

    if (xhr.status == 200) {
        document.body.innerHTML = xhr.response;
    }
})

// readyState = 1
// XHR.open(metodo String, url String)
xhr.open("get", "info.txt")

// XHR.send([{String|DormData|Blob}])
xhr.send()
 
