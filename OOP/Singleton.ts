class DataBase {
    num: number;
    private static instance: DataBase;

    constructor() {
        if(DataBase.instance){
            return DataBase.instance;
        }

        this.num = Math.random();
        DataBase.instance = this;
    }
}


const db1 = new DataBase();
const db2 = new DataBase();


console.log(db1.num);
console.log(db2.num);