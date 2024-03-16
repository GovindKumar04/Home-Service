{/* <input type="text" name="user_name" id="user_name" placeholder="Enter your name">
                <input type="email" name="email" id="email" placeholder="Enter your email">
                <input type="tel" name="mobile_number" id="mobile_number" placeholder="Enter your mobile number"> */}
                // <input type="password" name="password" id="password" placeholder="Enter your password">
                // <button class="submit">submit</button>

const namea= document.querySelector('#user_name')
const mobile_number= document.querySelector('#mobile_number')
const email= document.querySelector('#email')
const password= document.querySelector('#password')

const singnUpform=document.querySelector("#signUp")

singnUpform.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(namea.value)
    console.log(mobile_number.value)
    console.log(email.value)
    console.log(password.value)
})