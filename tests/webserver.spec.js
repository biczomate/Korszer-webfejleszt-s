const Staff = require('../staff');
const Warrior = require('../warrior');
const Priest = require('../priest');
const app = require('../app');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('Webserver', () => {
    let agent;

    beforeEach(() => {
        agent = supertest.agent(app);
    });

    it('POST /heroes should store a valid hero and return its id.', async () => {
        let warrior = new Warrior(10);
        let result = await agent.post('/heroes').send(warrior.toJSON()).set('Accept', 'application/json');
        expect(result.statusCode).to.eql(201);
        expect(result.body).to.eql({ id: 1 });
    });

    it('GET /heroes should return all the stored heroes.', async () => {
        let warrior = new Warrior(10);
        let priest = new Priest(10);
        priest.addWeapon(new Staff());
        await agent.post('/heroes').send(priest.toJSON()).set('Accept', 'application/json');
        let result = await agent.get('/heroes');
        expect(result.statusCode).to.eql(200);
        let array = [warrior.toJSON(), priest.toJSON()];
        array[0]['id'] = 1;
        array[1]['id'] = 2;
        expect(result.body).to.eql(array);
    });

    it('/GET battle?hero1=X&hero2=Y should battle X and Y heroes and return the id of the winner', async () => {
        let result = await agent.get('/battle').query({ hero1: 1, hero2: 2});
        expect(result.statusCode).to.eql(200);
        expect(result.body).to.eql({winner_id: 2});
    });


});