import { InMemoryDbService } from 'angular2-in-memory-web-api';
 
export class InMemUserService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 1, name: 'Aravind', email: 'budd@gmail.com', password: 'budd@gmail.com' },
      { id: 2, name: 'Rohit', email: 'rohit@gmail.com', password: 'rohit@gmail.com'}
    ];
    return {users};
  }
}