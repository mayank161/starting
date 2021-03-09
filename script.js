let names;
const localName = localStorage.getItem('NAME');
if(localName === null) { names = []; }
else { names = JSON.parse(localName); }

let email;
const localEmail = localStorage.getItem('EMAIL');
if(localEmail === null) { email = []; }
else { email = JSON.parse(localEmail); }

let phone;
const localPhone = localStorage.getItem('PHONE');
if(localPhone === null) { phone = []; }
else { phone = JSON.parse(localPhone); }


/*let date;
const localDate = localStorage.getItem('DATE');
if(localDate === null) { date = []; }
else { date = JASON.parse(localDate); }

let time;
const localTime = localStorage.getItem('TIME');
if(localTime === null) { time = []; }
else { time = JASON.parse(localDate); } */

const button = document.getElementById("button");
const details = document.getElementById("details");


button.onclick = () => {
    if(names != null && email != null && phone != null /*&& date != null && time != null*/) {
        names.push(`${document.getElementById("name").value}`);
        localStorage.setItem('NAME', JSON.stringify(names));

        email.push(`${document.getElementById("email").value}`);
        localStorage.setItem('EMAIL', JSON.stringify(email));

        phone.push(`${document.getElementById("phone").value}`);
        localStorage.setItem('PHONE', JSON.stringify(phone));

        /*date.push(`${document.getElementById("date").value}`);
        localStorage.setItem('DATE', JSON.stringify(date));

        time.push(`${document.getElementById("time").value}`);
        localStorage.setItem('TIME', JSON.stringify(time)); */
        location.reload();
    }
};

for(let i=0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    details.innerHTML += `${key}: ${localStorage.getItem(key)} <br><br>`;
}