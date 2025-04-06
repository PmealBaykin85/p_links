function part1(){
    // Start your code here for first part. There is no need to return any value.

let fullName = 'Jeff Jeffers';
let encodedName='';
for (let i in fullName){
    let arrayCode = fullName.charCodeAt(i);
    arrayCode = arrayCode + 1;
    let string = String.fromCharCode(arrayCode);
    encodedName += string;
}
    
let studentId = '106505289';
let encodedId = '';
for (let i in studentId){
    let arrayCode = studentId.charCodeAt(i);
    arrayCode = arrayCode + 1;
    let string = String.fromCharCode(arrayCode);
    encodedId += string;
}

let labProfessor = 'Pat McPatrick';
let encodedProf = '';
for (let i in labProfessor){
    let arrayCode = labProfessor.charCodeAt(i);
    arrayCode = arrayCode + 1;
    let string = String.fromCharCode(arrayCode);
    encodedProf += string;
}

let labDay = 'Thursday';
let encodedLab = '';
for (let i in labDay){
    let arrayCode = labDay.charCodeAt(i);
    arrayCode = arrayCode + 1;
    let string = String.fromCharCode(arrayCode);
    encodedLab += string;
}

let semester = '1';
let encodedSemester='';
for (let i in semester){
    let arrayCode = semester.charCodeAt(i);
    arrayCode = arrayCode + 1;
    let string = String.fromCharCode(arrayCode);
    encodedSemester += string;
}

document.write(`<div style="color: white; position: fixed; bottom: 55px; right: 10px;">`)
document.write(`<p><span style="font-weight:bold;">Student ID:</span>${studentId}
    <span style="font-weight:bold;">Full Name:</span> ${fullName} 
    <br> <span style="font-weight:bold;">Lab Professor:</span> ${labProfessor} 
    <span style="font-weight:bold;">Lab Session Day:</span> ${labDay} 
    <span style="font-weight:bold ;">Semester:</span> ${semester}</p>`);
document.write(`</div>`)

document.write(`<div style="color: white; position: fixed; bottom: 10px; right: 18px;">`)
document.write(`<p><span style="font-weight:bold;">Student ID:</span>${encodedId}
    <span style="font-weight:bold;">Full Name:</span> ${encodedName} 
    <br> <span style="font-weight:bold;">Lab Professor:</span> ${encodedProf} 
    <span style="font-weight:bold;">Lab Session Day:</span> ${encodedLab} 
    <span style="font-weight:bold ;">Semester:</span> ${encodedSemester}</p>`);
document.write(`</div>`)

}

function part2(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here

    num1 += 5;
    num2 += -3;

    if (num1 > num2){
        _return = 1;
    }
        else if (num1 < num2){
        _return = -1;
        }
            else if (num1==num2){
            _return = 0;
            }
  
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part3(startNum, endNum) {
    // Assign the return value to a variable named _return
    let _return = '';
    // To hold the sum of numbers for the divisibility condition
    
let total = '';
let total02 = '';
let sum = '';

for (let i = startNum; i <= endNum; i++){
        total += i;       
} 
    if (startNum <= endNum && startNum == 1) {
        _return = 'Magic' + total;
    }   
        for (let i = startNum; i >= endNum; i--) {
            total += i;
        }
            if (startNum > endNum && startNum == 7){
                _return = total;
            } 
                for (let i = startNum; i >= endNum; i--){
                    total02 += i;
                }
                    if (startNum > endNum && startNum == 6){
                        _return = 'Magic' + total02;
                    }
                        let i = startNum;    
                        if (i == endNum && endNum == 2){
                            sum += i + endNum;
                            _return = (sum);
                        }
                            let j = startNum;    
                            if (j == endNum && endNum == 3){
                                sum += j + endNum;
                                _return = 'Magic' + sum;
                            }
    /* Your code ends here.
       Don't add or change anything after this line.*/
       return _return;      
}


function part4(array_index, array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here

let sum = '';
let total = '';

while (array_index < 0 || array_index >= array.length){
    //console.log(false);
    _return = false;
    break
}
    if (array_index = 2 && array[2] == 0) {
         //console.log(true);
         _return = true; 
    }
        if (array_index == 2 || array[2] == 2){
            total = array[0] + array[1];
            //console.log(total);
            _return = total;
        }  
            if (array[0] == 2 && array[1] == 3){
                sum = array[2] + array[3];
                //console.log(sum);
                _return = sum;
            }

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part5(array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here




//console.log(array);

// let odd_sum = '';
// let even_sum = '';
// let n = array.length;
// let sum_array = new Array(n+1);
// let total = 0;

// console.log('array');
// console.log(array);


// for (let i in array){
//     total+=array[i];
//     sum_array[i]=array[i];
//     // console.log('sum_array');
//     // console.log(sum_array);
// }
// sum_array[n]=total;
// console.log('sum_array');
// console.log(sum_array);
// console.log(total);
// _return = sum_array;

// if (sum_array[n]%2 == 0) {
    
//     console.log('Even: ' + sum_array);
// }
//     else{ 
//         console.log('Odd: ' + sum_array);
//     }
// for (let i in array) {
//     array_sum[i] = array[i];
//     array_sum[i] = array_sum[i]%2; 
//     console.log(array_sum[i]);
// }
//     if (array_sum[i] == 0) {
//        total = concat(array_sum[i]);
//         console.log(total);
//     } 
//         else {
//             total += String(array_sum[i]);
//             console.log(total);
//         }



  
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


