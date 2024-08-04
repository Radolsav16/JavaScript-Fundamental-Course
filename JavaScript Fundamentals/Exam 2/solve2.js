function solve(input){
    let inputs = Number(input.shift());
    let pattern = /^\|[A-Z]{4,}\|:#([A-Za-z]+ [A-Za-z]+)#$/;
    let trueLines = '';

    for(let i = 0; i < inputs;i++){
        let line = input[i];
        if(pattern.test(line)){
            let lastIndexOfPipe = line.lastIndexOf('|');
            let name =line.slice(1,lastIndexOfPipe);
            let lastIndexOfChar = line.lastIndexOf("#");
            let firstIndexOfChar = line.indexOf("#");
            let title = line.slice(firstIndexOfChar + 1,lastIndexOfChar);
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        }else{
            console.log("Access denied!");
        }
    
    }

    


}
solve(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']);
