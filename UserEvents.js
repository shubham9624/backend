import EventEmitter from 'events';

// Create User class extending EventEmitter
export class User extends EventEmitter {
    createPost() {
        console.log('Post Created');
        this.emit('postCreated');
    }
}
