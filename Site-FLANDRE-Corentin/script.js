const radiocareer = document.querySelector('#career label')
const textcareer1 = document.querySelector('#career #data-career1')
const textcareer2 = document.querySelector('#career #data-career2')
const textcareer3 = document.querySelector('#career #data-career3')
const textcareer4 = document.querySelector('#career #data-career4')
document.body.classList.add('show4')
radiocareer.addEventListener('input', (e) =>{
    console.log(e.target.id);
    document.body.classList.remove('show1')
    document.body.classList.remove('show2')
    document.body.classList.remove('show3')
    document.body.classList.remove('show4')
    switch(e.target.id){
        case "career1":
            document.body.classList.add('show1')
            break
            // console.log(textcareer1);
        case "career2":
            document.body.classList.add('show2')
            break
        case "career3":
            document.body.classList.add('show3')
            break
        case "career4":
            document.body.classList.add('show4')
            break
        default: document.body.classList.add('show4') 
    }
})
// radiocareer.forEach((rad) => {
//     rad.addEventListener('change', (e) =>{
//         console.log(e.target.id);
//     })
// });
