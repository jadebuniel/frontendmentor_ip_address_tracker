import {leaflet, leafletChange} from "/leaflet.js"

const btnSubmit = document.querySelector('.btn-submit')
const input = document.querySelector('.input-text')


btnSubmit.addEventListener("click", async (e) => {
    e.preventDefault()
    const res = await fetchData(input.value)
    if (res.code){
        return
    }
    updateData(".ip-address h2", res.ip)
    updateData(".location h2", `${res.location.city}, ${res.location.country}`)
    updateData(".timezone h2", `UTC ${res.location.timezone}`)
    updateData(".isp h2", res.isp)

    leafletChange(res)
})

document.addEventListener("DOMContentLoaded", async() => {
    const res = await fetchData()
    updateData(".ip-address h2", res.ip)
    updateData(".location h2", `${res.location.city}, ${res.location.country}`)
    updateData(".timezone h2", `UTC ${res.location.timezone}`)
    updateData(".isp h2", res.isp)

    leaflet(res)
})



const fetchData = async (ipaddress) => {

    const ipSplit = input.value.split('.')

    if (input.value === ""){
        const data = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_4pw1gP0oDATQYa9yRoJDzHuOYqCJw`)
        const res = await data.json()
        return res
    } else if (ipSplit.length === 4) {
        const data = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_4pw1gP0oDATQYa9yRoJDzHuOYqCJw&ipAddress=${ipaddress}`)
        const res = await data.json()
        return res
    } else {
        const data = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_4pw1gP0oDATQYa9yRoJDzHuOYqCJw&domain=${ipaddress}`)
        const res = await data.json()
        return res
    }
   }


const updateData = (el, value) => {
    document.querySelector(`${el}`).textContent = `${value}`
}