function echoPrint(data){

    let typeOfData = typeof(data);

    if(typeOfData === "number" || typeOfData === "string"){
        console.log(typeOfData);
        console.log(data);
    }else{
        console.log(typeOfData);
        console.log('Parameter is not suitable for printing');
    }

}
echoPrint(null);

function concatnatingNames(firstName,lastName,joinSign){

    let arrayName = [firstName,lastName];
    let result = arrayName.join(joinSign);
    
    console.log(result);
}

concatnatingNames('John',

'Smith'

,

'->')