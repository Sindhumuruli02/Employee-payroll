 function showDetails() {
            
            const fullName = document.getElementById('name1').value;
            const email = document.querySelector('input[name="email"]').value;
            const age = document.querySelector('input[name="age"]').value;
            const birthDate = document.querySelector('input[name="birthdate"]').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const address = document.querySelector('input[name="address"]').value;
            const country = document.querySelector('select[name="country"]').value;
            const city = document.querySelector('input[name="city"]').value;
            const pincode = document.querySelector('input[name="pincode"]').value;

           
            console.log('Name:', fullName);
            console.log('Email:', email);
            console.log('Age:', age);
            console.log('Birth Date:', birthDate);
            console.log('Gender:', gender);
            console.log('Address:', address);   
            console.log('Country:', country);
            console.log('City:', city);
            console.log('Pincode:', pincode);
 }
 

