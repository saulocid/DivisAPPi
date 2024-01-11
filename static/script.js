async function api() {
    try {
        // consumo la API
        const res = await fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_6EZqnq6sPO7QjbNeDeDamgTRbYnb9qBtNlwkYdB9')
        const data = await res.json()

        // crep las variables de tipo FLOAT (number)
        const pesoARG = parseFloat(data.data.ARS.value).toFixed(2)
        const pesoEUR = parseFloat(data.data.EUR.value)
        const pesoMXN = parseFloat(data.data.MXN.value)
        const pesoBTC = parseFloat((data.data.BTC.value).toFixed(10))

        // devuelvo los valores a sus respectivos 'id'
        document.getElementById('usd').textContent = pesoARG
        document.getElementById('eur').textContent = (pesoARG / pesoEUR).toFixed(2)
        document.getElementById('mxn').textContent = (pesoARG / pesoMXN).toFixed(2)
        document.getElementById('btc').textContent = (pesoARG / pesoBTC).toFixed(2)

    } catch (error) {
        console.log(error)
    }
}

api()