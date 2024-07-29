function solve(input){
    const listOfHeroes = [];
    class Hero{
        constructor(name,hp,mp){
            this.name = name;
            this.hp = hp;
            this.mp = mp;
        }
        Heal(hp){
           if( this.hp + hp > 100){
            this.hp = 100;
           } 
           
           console.log(`{hero name} healed for {amount recovered} HP!`);
        }
        TakeDamage(killer,hp){

        }

        Recharge(mp){

        }
        CastSpell(spell,mp){

        }
    }
    let n = Number(input.shift());
    for(let i = 0; i < n;i++){
        let line = input.shift();
        let [name,hp,mp] = line.split(" ");
        hp = Number(hp);
        mp = Number(mp);
        let hero = new Hero(name,hp,mp);
        listOfHeroes.push(hero);
    }
    
    let command = input.shift();
    while(command !== 'End'){
        let infoArr = command.split(" - ");
        let cmd =infoArr.shift();
        let name = infoArr.shift();

        if(cmd === 'Heal'){
            let hp = Number(infoArr.shift());
            let obj = listOfHeroes.find((obj)=>obj.name === name);
            obj.Heal(hp);
        } else if(cmd === 'Recharge'){
            let mp = Number(infoArr.shift());
            let obj = listOfHeroes.find((obj)=>obj.name === name);
            obj.Recharge(mp);
        }else if(cmd === 'TakeDamage'){
            let killer = infoArr.shift();
            let hp = Number(infoArr.shift());
            let obj = listOfHeroes.find((obj)=>obj.name === name);
            obj.TakeDamage(killer,hp);
        }else if(cmd === 'CastSpell'){
            let spell = infoArr.shift();
            let mp = Number(infoArr.shift());
            let obj = listOfHeroes.find((obj)=>obj.name === name);
            obj.CastSpell(spell,mp);
        }

        command = input.shift(); 
    }
    listOfHeroes.forEach((obj)=>{
        console.log(`${obj.name}`);
        console.log(`  HP: ${obj.hp}`);
        console.log(`  MP: ${obj.mp}`);
    })
}
solve(['2','Solmyr 85 120','Kyrre 99 50', 'Heal - Solmyr - 10','Recharge - Solmyr - 50 ','TakeDamage - Kyrre - 66 - Orc','CastSpell - Kyrre - 15 - ViewEarth','End']);