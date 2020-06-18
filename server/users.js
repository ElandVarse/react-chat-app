const users = [];

const addUser = ({ id, name, room }) => {
    //Junta o nome caso esteja separado e coloca tudo em minúsculo
    name = name.trim();
    room = room.trim();

    //Checa se existe usuários com o mesmo nome
    const existingUser = users.find((user) => user.room === room && user.name === name)

    if(existingUser) {
        return { error: 'Nome de usuário já existente'}
    }

    const user = { id, name, room};

    users.push(user)

    return { user }



}

const removeUser = ( id ) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => users.find ((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom}
