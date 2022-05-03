// приложение разделено на некоторые слои

// 1. логика работы с бд (получить, записать, обновить)
// MongoRepository
// MySqlRepository

// 2. бизнес логика

// interface repository

class Userr {

}

interface UserRepos {
    getUsers: ()=> Userr[];
}


class UserMongoDBRepo implements UserRepos {
    getUsers(): Userr[] {
        console.log('Mongo');
        return [{age: 15, username: 'User From mongo'}];
    }
}


class UserSQLDBRepo implements UserRepos {
    getUsers(): Userr[] {
        console.log('SQL');
        return [{age: 15, username: 'User From sql'}];
    }
}


class UserService {
    userRepo: UserRepos;

    constructor(userRepo: UserRepos){
        this.userRepo = userRepo;
    }

    filterUserByAge(age: number){
        const users = this.userRepo.getUsers();
        console.log(users);
    }
}


const userService = new UserService(new UserMongoDBRepo())
userService.filterUserByAge(15);


