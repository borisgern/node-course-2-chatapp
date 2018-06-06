const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: '1',
        name: 'Mike',
        room: 'one'
      }, {
        id: '2',
        name: 'Jen',
        room: 'two'
      }, {
        id: '3',
        name: 'Boris',
        room: 'one'
      }];
  });

  it('should add new user', () => {
      var users = new Users();
      var user = {
        id: '123',
        name: 'Boris',
        room: 'TOF'
      };
      var resUser = users.addUser(user.id, user.name, user.room);

      expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var usersArray = users.removeUser('1');

    expect(usersArray.id).toBe('1');
    expect(users.users.length).toEqual(2);
  });

  it('should not remove user', () => {
    var usersArray = users.removeUser('4');

    expect(usersArray).toBe(undefined);
    expect(users.users.length).toEqual(3);
  });

  it('should find user', () => {
    var user = users.getUser('1');

    expect(user).toEqual(users.users[0]);
  });

  it('should not find user', () => {
    var user = users.getUser('4');

    expect(user).toEqual(undefined);
  });

  it('should return names for room one', () => {
    var userList = users.getUserList('one');

    expect(userList).toEqual(['Mike', 'Boris']);
  });

  it('should return names for room two', () => {
    var userList = users.getUserList('two');

    expect(userList).toEqual(['Jen']);
  });

});
