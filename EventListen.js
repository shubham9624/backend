import {User} from './UserEvents.js';
const user=new User();

user.addListener('postCreated',saveToDB);
user.addListener('postCreated',sendNotification);
user.addListener('postCreated',updatetimeLine);
function saveToDB(){
    console.log('Save to DB');  
}
function sendNotification(){
    console.log('Send notification');
}
function updatetimeLine(){
    console.log('Update timeLine');
}
user.createPost();
