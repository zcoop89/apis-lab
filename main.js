const baseUrl = "https://swapi.dev/api/planets/2/"
const button = document.querySelector("button")
function resButton()  {
    console.log('button clicked')
    axios.get(baseUrl).then((res) => {
        let residents = res.data.residents
        for(i = 0; i < residents.length; i ++) {
            axios.get(residents[i]).then((res) => {
                console.log(res.data.name)
                let names = document.createElement('h2')
                names.textContent = res.data.name
                document.querySelector("body").appendChild(names)
            })
        }

    })
   
}
button.addEventListener('click', resButton)