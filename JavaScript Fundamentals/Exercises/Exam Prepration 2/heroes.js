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
            hp = 100 - this.hp;
            this.hp = 100;
           } 
           console.log(`${this.name} healed for ${hp} HP!`);
        }
        TakeDamage(killer,hp){
            this.hp -= hp;
            if(this.hp > 0){
                console.log(`${this.name} was hit for ${hp} HP by ${killer} and now has ${this.hp} HP left!`);
            }else{
                console.log(`${this.name} has been killed by ${killer}!`);
            }
        }
        Recharge(mp){
            if( this.mp + mp > 200){
                mp = 200 - this.mp;
                this.mp = 200;
            } 

            


            console.log(`${this.name} recharged for ${mp} MP!`);
        }
        CastSpell(spell,mp){
            if(this.mp >= mp){
            console.log(`${this.name} has successfully cast ${spell} and now has ${this.mp} MP!`);
            }else{
                console.log(`${this.name} does not have enough MP to cast ${spell}!`);
            }
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
            let index = listOfHeroes.indexOf(obj);
            listOfHeroes.splice(index,1);
             obj.Heal(hp);
        } else if(cmd === 'Recharge'){
            let mp = Number(infoArr.shift());
            let obj = listOfHeroes.find((obj)=>obj.name === name);
            let index = listOfHeroes.indexOf(obj);
            listOfHeroes.splice(index,1);
            obj.Recharge(mp);
            listOfHeroes.push(obj)
        }else if(cmd === 'TakeDamage'){
            let killer = infoArr.pop();
            let hp = Number(infoArr.shift());
            let obj = listOfHeroes.find((obj)=>obj.name === name);
            let index = listOfHeroes.indexOf(obj);
            listOfHeroes.splice(index,1);
            obj.TakeDamage(killer,hp);
            listOfHeroes.push(obj)
        }else if(cmd === 'CastSpell'){
            let spell = infoArr.pop();
            let mp = Number(infoArr.shift());
            let obj = listOfHeroes.find((obj)=>obj.name === name);
            let index = listOfHeroes.indexOf(obj);
            listOfHeroes.splice(index,1);
            obj.CastSpell(spell,mp);
            listOfHeroes.push(obj)
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