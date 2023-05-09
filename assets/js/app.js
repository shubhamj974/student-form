let cl = console.log;

const form = document.getElementById('form');
const fnameContent = document.getElementById('fname')
const lnameContent = document.getElementById('lname')
const emailContent = document.getElementById('email')
const contactContent = document.getElementById('contact')
const stdContent = document.getElementById('stdContent')

let stdArr = []

const stdTemp = (Arr) => {
    let result = '';
    Arr.forEach((std, i) => {
        result +=
        `
        <tr>
        <td>${i + 1}</td>
        <td>${std.fname}</td>
        <td>${std.lname}</td>
        <td>${std.email}</td>
        <td>${std.contact}</td>
        </tr>
        `
    })
    stdContent.innerHTML = result
}



const Onsubmit = (e) => {
    e.preventDefault();
    let stdObj =
    {
        fname: fnameContent.value,
        lname: lnameContent.value,
        email: emailContent.value,
        contact: contactContent.value,
    }
    cl(stdObj)
    stdArr.push(stdObj)
    stdTemp(stdArr)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    e.target.reset()
}

form.addEventListener('submit', Onsubmit)