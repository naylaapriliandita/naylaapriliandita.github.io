const form = document.getElementById("form")
const email = document.getElementById("email")
const username = document.getElementById("username")
const password = document.getElementById("password")
const retypePassword = document.getElementById("retypePassword")

// untuk menghindari terjadi redirect halaman
form.addEventListener("submit", e => {
    e.preventDefault()

    validateInputs()
})


const setError = (element, message) => {  //elemen yang salah, message pesan yg ditampilkan kalau salah
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(".error")  // menangkap <div class="error text-danger"></div> di html

    errorDisplay.innerText = message

    // hilangkan class success
    inputControl.classList.add("error")
    inputControl.classList.remove("success")
}

const setSuccess = element => {  // kalau parameternya cuma satu bisa diisi tanpa ()
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = ""

    // hilangkan class error
    inputControl.classList.add("success")
    inputControl.classList.remove("error")
}

//berfungsi melakukan pengecekan email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // https://pastebin.com/ZLex9mRs

    //convert jadi string, lalu jadi huruf kecil
    return re.test(String(email).toLowerCase())
}


//trim = salah satu method
const validateInputs = () => {
    const emailValue = email.value.trim() //kalau user tambah spasi atau karakter lain bisa di ignore
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()
    const retypePasswordValue = retypePassword.value.trim()

    //cek email
    if (emailValue === ""){
        setError(email, "Masukkan Email")
    } else if (isValidEmail(emailValue) === false) {
        //jika email tidak sesuai format
        setError(email, "Email tidak Valid")
    } else {
        setSuccess(email)
    }

    //cek username
    if (usernameValue === ""){
        setError(username, "Masukkan Username")
    } else if (usernameValue.lenght < 5){
        setError(username, "Username harus lebih dari 5 karakter")
    } else {
        setSuccess(username)
    }
    
    //cek password
    if (passwordValue === ""){
        setError(password, "Masukkan Password")
    } else if (passwordValue.lenght < 4){
        setError(password, "Password harus lebih dari 4 karakter")
    } else {
        setSuccess(password)
    }

    //cek retype password
    if (retypePasswordValue === ""){
        setError(retypePassword, "Masukkan Ulang Password")
    } else if (retypePasswordValue.lenght < 4){
        setError(retypePassword, "Password harus lebih dari 4 karakter")
    } else {
        setSuccess(retypePassword)
    }

}