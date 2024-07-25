function experiment(){
    let arr = ['abv','abjsf','dkjfhkf','sfjdkf'];
    for (let i = 0; i < arr.length - 1; i++) {
        const element = arr[i];
        const elemnt2 = arr[i + 1];
        let newArr = [];
        if(i !== arr.length - 1){
           newArr =  elemnt2.split("");
        }else{
            newArr = [];
        }
    
        console.log(newArr);
        
    }
}
experiment()