const mailService () {

    const response = await fetch('http://localhost:5000/api/midtrans-notification')
    const data = await response.json()
    
    return 
}